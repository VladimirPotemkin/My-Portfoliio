<template>
  <article
    v-motion="motionVariants"
    class="project-card surface-panel"
  >
    <div class="project-card__body">
      <div class="project-card__header">
        <h3 class="project-card__title">{{ repo.name }}</h3>
        <span class="project-card__language">{{ repo.language ?? t('portfolio.languageUnknown') }}</span>
      </div>

      <a
        class="project-card__link action-link"
        :href="repo.html_url"
        target="_blank"
        rel="noreferrer"
      >
        {{ t('portfolio.openOnGithub') }}
      </a>
    </div>
  </article>
</template>

<script setup lang="ts">
import { computed, type PropType } from 'vue'
import { useI18n } from 'vue-i18n'
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

const { t } = useI18n()

const props = defineProps({
  repo: {
    type: Object as PropType<GitHubRepo>,
    required: true,
  },
  motionInitial: {
    type: Object as PropType<MotionInitial>,
    default: () => ({
      opacity: 0,
      x: 0,
      y: 56,
      rotate: 0,
      scale: 1,
    }),
  },
  motionVisibleOnce: {
    type: Object as PropType<MotionVisibleOnce>,
    default: () => ({
      opacity: 1,
      x: 0,
      y: 0,
      rotate: 0,
      scale: 1,
      transition: {
        delay: 0,
        duration: 520,
        ease: 'ease-out',
      },
    }),
  },
})

const motionVariants = computed(() => ({
  initial: props.motionInitial,
  visibleOnce: props.motionVisibleOnce,
}))
</script>
