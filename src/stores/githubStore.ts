import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import type { GitHubRepo, GitHubRequestStatus } from '../types'

const DEFAULT_GITHUB_USERNAME = 'VladimirPotemkin'
const ALL_LANGUAGES_FILTER = 'all'

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null
}

function isString(value: unknown): value is string {
  return typeof value === 'string'
}

function isNullableString(value: unknown): value is string | null {
  return value === null || typeof value === 'string'
}

function isNumber(value: unknown): value is number {
  return typeof value === 'number'
}

function isStringArray(value: unknown): value is string[] {
  return Array.isArray(value) && value.every(isString)
}

function isGitHubRepo(value: unknown): value is GitHubRepo {
  if (!isRecord(value)) {
    return false
  }

  return (
    isNumber(value.id) &&
    isString(value.name) &&
    isString(value.full_name) &&
    isNullableString(value.description) &&
    isString(value.html_url) &&
    isNullableString(value.homepage) &&
    isNullableString(value.language) &&
    isNumber(value.stargazers_count) &&
    isNumber(value.forks_count) &&
    typeof value.fork === 'boolean' &&
    isStringArray(value.topics) &&
    isString(value.updated_at)
  )
}

function resolveGithubUsername(username?: string): string {
  const envUsername = import.meta.env.VITE_GITHUB_USERNAME?.trim()
  const candidate = username?.trim() || envUsername || DEFAULT_GITHUB_USERNAME

  return candidate
}

export const useGithubStore = defineStore('github', () => {
  const repos = ref<GitHubRepo[]>([])
  const status = ref<GitHubRequestStatus>('idle')
  const error = ref<string | null>(null)
  const activeUsername = ref(resolveGithubUsername())
  const selectedLanguage = ref<string>(ALL_LANGUAGES_FILTER)

  const availableLanguages = computed(() =>
    Array.from(new Set(repos.value.map(({ language }) => language).filter((language): language is string => Boolean(language)))).sort((left, right) =>
      left.localeCompare(right),
    ),
  )

  const filteredRepos = computed(() => {
    if (selectedLanguage.value === ALL_LANGUAGES_FILTER) {
      return repos.value
    }

    return repos.value.filter(({ language }) => language === selectedLanguage.value)
  })

  async function fetchRepos(username?: string): Promise<void> {
    const resolvedUsername = resolveGithubUsername(username)

    status.value = 'loading'
    error.value = null
    activeUsername.value = resolvedUsername

    try {
      const response = await fetch(`https://api.github.com/users/${resolvedUsername}/repos?per_page=100&sort=updated`, {
        headers: {
          Accept: 'application/vnd.github+json',
        },
      })

      if (!response.ok) {
        throw new Error(
          response.status === 403 ? 'GitHub API временно недоступен из-за ограничения запросов.' : 'Не удалось загрузить репозитории GitHub.',
        )
      }

      const payload: unknown = await response.json()

      if (!Array.isArray(payload)) {
        throw new Error('GitHub API вернул неожиданный формат данных.')
      }

      const normalizedRepos = payload
        .filter(isGitHubRepo)
        .filter(({ fork, description }) => !fork && Boolean(description))
        .sort((left, right) => {
          if (right.stargazers_count !== left.stargazers_count) {
            return right.stargazers_count - left.stargazers_count
          }

          return new Date(right.updated_at).getTime() - new Date(left.updated_at).getTime()
        })

      repos.value = normalizedRepos

      if (!availableLanguages.value.includes(selectedLanguage.value)) {
        selectedLanguage.value = ALL_LANGUAGES_FILTER
      }

      status.value = 'success'
    } catch (caughtError) {
      repos.value = []
      status.value = 'error'
      error.value = caughtError instanceof Error ? caughtError.message : 'Неизвестная ошибка при загрузке GitHub-данных.'
    }
  }

  async function retryFetch(): Promise<void> {
    await fetchRepos(activeUsername.value)
  }

  function setLanguageFilter(language: string): void {
    selectedLanguage.value = language
  }

  return {
    repos,
    status,
    error,
    activeUsername,
    selectedLanguage,
    availableLanguages,
    filteredRepos,
    fetchRepos,
    retryFetch,
    setLanguageFilter,
    allLanguagesFilter: ALL_LANGUAGES_FILTER,
  }
})
