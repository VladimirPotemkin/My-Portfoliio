<template>
  <section class="content-view">
    <div class="content-view__intro">
      <h1 class="content-view__title">{{ t('portfolio.title') }}</h1>
    </div>

    <div class="portfolio-showcase">
      <h2 class="portfolio-section-title">
        {{ t('portfolio.featuredTitle') }}
      </h2>

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
        :motion-initial="projectMotionById[repo.id]?.initial"
        :motion-visible-once="projectMotionById[repo.id]?.visibleOnce"
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
import type { GitHubRepo } from '../types'

type MotionInitial = {
  opacity: number
  x: number
  y: number
  rotate: number
  scale: number
}

type MotionVisibleOnce = {
  opacity: number
  x: number
  y: number
  rotate: number
  scale: number
  transition: {
    delay: number
    duration: number
    ease: string
  }
}

type ProjectMotionConfig = {
  initial: MotionInitial
  visibleOnce: MotionVisibleOnce
}

const githubStore = useGithubStore()
const { t, locale } = useI18n()

const { availableLanguages, filteredRepos, selectedLanguage, status, error } =
  storeToRefs(githubStore)
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

const hashSeed = (value: string): number => {
  let hash = 2166136261

  for (let index = 0; index < value.length; index += 1) {
    hash ^= value.charCodeAt(index)
    hash = Math.imul(hash, 16777619)
  }

  return hash >>> 0
}

const randomFromSeed = (seed: number): number => {
  const next = Math.imul(seed ^ 0x6d2b79f5, 1 | seed)
  const mixed = next ^ (next + Math.imul(next ^ (next >>> 7), 61 | next))
  return ((mixed ^ (mixed >>> 14)) >>> 0) / 4294967296
}

const pickSignedOffset = (seedA: number, seedB: number, min: number, max: number): number => {
  const magnitude = min + (max - min) * randomFromSeed(seedA)
  const direction = randomFromSeed(seedB) > 0.5 ? 1 : -1
  return magnitude * direction
}

const buildExplosionSeed = (repo: GitHubRepo, index: number): ProjectMotionConfig => {
  const baseSeed = hashSeed(`${repo.id}-${repo.name}-${index}`)
  const xOffset = pickSignedOffset(baseSeed + 11, baseSeed + 29, 160, 420)
  const yOffset = pickSignedOffset(baseSeed + 53, baseSeed + 71, 140, 360)
  const rotation = pickSignedOffset(baseSeed + 97, baseSeed + 131, 6, 24)
  const scale = 0.8 + randomFromSeed(baseSeed + 173) * 0.18
  const delay = 50 + Math.round(randomFromSeed(baseSeed + 211) * 380)
  const duration = 520 + Math.round(randomFromSeed(baseSeed + 257) * 260)

  return {
    initial: {
      opacity: 0,
      x: xOffset,
      y: yOffset,
      rotate: rotation,
      scale,
    },
    visibleOnce: {
      opacity: 1,
      x: 0,
      y: 0,
      rotate: 0,
      scale: 1,
      transition: {
        delay,
        duration,
        ease: 'ease-out',
      },
    },
  }
}

const projectMotionById = computed<Record<number, ProjectMotionConfig>>(() => {
  return filteredRepos.value.reduce<Record<number, ProjectMotionConfig>>((accumulator, repo, index) => {
    accumulator[repo.id] = buildExplosionSeed(repo, index)
    return accumulator
  }, {})
})

onMounted(() => {
  if (status.value === 'idle') {
    void fetchRepos()
  }
})
</script>
