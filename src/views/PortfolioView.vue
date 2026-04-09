<template>
  <section class="content-view">
    <div class="content-view__intro">
      <p class="eyebrow">{{ t('portfolio.eyebrow') }}</p>
      <h1 class="content-view__title">{{ t('portfolio.title') }}</h1>
    </div>

    <div class="portfolio-showcase">
      <h2 class="portfolio-section-title">{{ t('portfolio.featuredTitle') }}</h2>

      <article
        v-for="project in featuredProjects"
        :key="project.id"
        class="portfolio-local-card surface-panel"
      >
        <div class="portfolio-local-card__content">
          <h3 class="portfolio-local-card__title">{{ project.title }}</h3>
        </div>
        <div class="portfolio-local-card__shots">
          <img
            v-for="image in project.images"
            :key="image"
            class="portfolio-local-card__shot"
            :src="image"
            :alt="project.title"
            loading="lazy"
            decoding="async"
          />
        </div>
      </article>
    </div>

    <div class="portfolio-toolbar surface-panel">
      <h2 class="portfolio-section-title">{{ t('portfolio.githubTitle') }}</h2>

      <div class="portfolio-filters">
        <button
          class="portfolio-filter"
          :class="{ 'is-active': selectedLanguage === allLanguagesFilter }"
          type="button"
          @click="setLanguageFilter(allLanguagesFilter)"
        >
          {{ t('portfolio.allLanguages') }}
        </button>
        <button
          v-for="language in availableLanguages"
          :key="language"
          class="portfolio-filter"
          :class="{ 'is-active': selectedLanguage === language }"
          type="button"
          @click="setLanguageFilter(language)"
        >
          {{ language }}
        </button>
      </div>
    </div>

    <div
      v-if="status === 'loading'"
      class="portfolio-state surface-panel"
    >
      <LoaderSpinner :label="t('portfolio.loading')" />
    </div>

    <div
      v-else-if="status === 'error'"
      class="portfolio-state surface-panel"
    >
      <p class="portfolio-state__text">
        {{ error ?? t('portfolio.errorFallback') }}
      </p>
      <button
        class="action-link"
        type="button"
        @click="retryFetch"
      >
        {{ t('portfolio.retry') }}
      </button>
    </div>

    <div
      v-else-if="!filteredRepos.length"
      class="portfolio-state surface-panel"
    >
      <p class="portfolio-state__text">{{ t('portfolio.empty') }}</p>
    </div>

    <div
      v-else
      class="portfolio-grid"
    >
      <ProjectCard
        v-for="repo in filteredRepos"
        :key="repo.id"
        :repo="repo"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useI18n } from 'vue-i18n'
import LoaderSpinner from '../components/LoaderSpinner.vue'
import ProjectCard from '../components/ProjectCard.vue'
import { useGithubStore } from '../stores/githubStore'

const githubStore = useGithubStore()
const { t, locale } = useI18n()

const {
  availableLanguages,
  filteredRepos,
  selectedLanguage,
  status,
  error,
} = storeToRefs(githubStore)
const { allLanguagesFilter, setLanguageFilter, fetchRepos, retryFetch } =
  githubStore

const featuredProjects = computed(() => {
  const ipamImages = [
    '/portfolio/ipam/Screenshot%202026-04-09%20145236.png',
    '/portfolio/ipam/Screenshot%202026-04-09%20145354.png',
    '/portfolio/ipam/Screenshot%202026-04-09%20145625.png',
  ]
  const sumuzImages = [
    '/portfolio/sumuz/Screenshot%202026-04-09%20130729.png',
    '/portfolio/sumuz/Screenshot%202026-04-09%20130742.png',
    '/portfolio/sumuz/Screenshot%202026-04-09%20130811.png',
  ]

  if (locale.value === 'ru') {
    return [
      {
        id: 'ipam',
        title: 'IPAM',
        images: ipamImages,
      },
      {
        id: 'sumuz',
        title: 'СУМУЗ',
        images: sumuzImages,
      },
    ]
  }

  return [
    {
      id: 'ipam',
      title: 'IPAM',
      images: ipamImages,
    },
    {
      id: 'sumuz',
      title: 'SUMUZ',
      images: sumuzImages,
    },
  ]
})

onMounted(() => {
  if (status.value === 'idle') {
    void fetchRepos()
  }
})
</script>
