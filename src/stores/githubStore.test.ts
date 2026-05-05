import { beforeEach, describe, expect, it, vi } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { useGithubStore } from './githubStore'

type Deferred<T> = {
  promise: Promise<T>
  resolve: (value: T) => void
}

function createDeferred<T>(): Deferred<T> {
  let resolveRef: ((value: T) => void) | null = null
  const promise = new Promise<T>(resolve => {
    resolveRef = resolve
  })

  if (!resolveRef) {
    throw new Error('Deferred resolver was not initialized.')
  }

  return { promise, resolve: resolveRef }
}

function createRepo(id: number, updatedAt: string, language: string) {
  return {
    id,
    name: `repo-${id}`,
    full_name: `owner/repo-${id}`,
    description: null,
    html_url: `https://github.com/owner/repo-${id}`,
    homepage: null,
    language,
    stargazers_count: 0,
    forks_count: 0,
    fork: false,
    topics: [],
    updated_at: updatedAt,
  }
}

describe('githubStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
    vi.restoreAllMocks()
  })

  it('loads repositories and computes available languages', async () => {
    vi.spyOn(globalThis, 'fetch').mockResolvedValue({
      ok: true,
      json: async () => [
        createRepo(1, '2025-04-01T10:00:00Z', 'TypeScript'),
        createRepo(2, '2025-05-01T10:00:00Z', 'Vue'),
      ],
    } as Response)

    const store = useGithubStore()
    await store.fetchRepos('user')

    expect(store.status).toBe('success')
    expect(store.repos).toHaveLength(2)
    expect(store.repos[0]?.id).toBe(2)
    expect(store.availableLanguages).toEqual(['TypeScript', 'Vue'])
  })

  it('keeps newest request result when earlier request resolves later', async () => {
    const firstRequest = createDeferred<Response>()
    const secondRequest = createDeferred<Response>()

    vi.spyOn(globalThis, 'fetch')
      .mockImplementationOnce(async () => firstRequest.promise)
      .mockImplementationOnce(async () => secondRequest.promise)

    const store = useGithubStore()

    const firstFetch = store.fetchRepos('first')
    const secondFetch = store.fetchRepos('second')

    secondRequest.resolve({
      ok: true,
      json: async () => [createRepo(2, '2025-05-01T10:00:00Z', 'Vue')],
    } as Response)
    await secondFetch

    firstRequest.resolve({
      ok: true,
      json: async () => [createRepo(1, '2025-04-01T10:00:00Z', 'TypeScript')],
    } as Response)
    await firstFetch

    expect(store.activeUsername).toBe('second')
    expect(store.repos).toHaveLength(1)
    expect(store.repos[0]?.id).toBe(2)
    expect(store.status).toBe('success')
  })
})
