<template>
  <article
    v-motion
    class="project-card surface-panel"
    :initial="{ opacity: 0, y: 56 }"
    :visibleOnce="{ opacity: 1, y: 0 }"
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
import type { PropType } from 'vue'
import { useI18n } from 'vue-i18n'
import type { GitHubRepo } from '../types'

const { t } = useI18n()

defineProps({
  repo: {
    type: Object as PropType<GitHubRepo>,
    required: true,
  },
})
</script>
