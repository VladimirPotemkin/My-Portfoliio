<template>
  <section class="content-view">
    <div class="content-view__intro">
      <p class="eyebrow">{{ t('portfolio.eyebrow') }}</p>
      <h1 class="content-view__title">{{ t('portfolio.title') }}</h1>
      <p class="body-copy">
        {{ t('portfolio.description') }}
      </p>
    </div>

    <div class="content-grid">
      <article class="surface-panel content-card">
        <p class="info-title">{{ t('portfolio.dataTitle') }}</p>
        <p class="info-body">
          {{ t('portfolio.dataBody', { username: activeUsername }) }}
        </p>
      </article>

      <article class="surface-panel content-card">
        <p class="info-title">{{ t('portfolio.filtersTitle') }}</p>
        <p class="info-body">
          {{ t('portfolio.filtersBody', { filter: allLanguagesFilter }) }}
        </p>
      </article>

      <article class="surface-panel content-card">
        <p class="info-title">{{ t('portfolio.statesTitle') }}</p>
        <p class="info-body">
          {{ t('portfolio.statesBody') }}
        </p>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useI18n } from 'vue-i18n'
import { useGithubStore } from '../stores/githubStore'

const githubStore = useGithubStore()
const { t } = useI18n()

const { activeUsername } = storeToRefs(githubStore)
const { allLanguagesFilter } = githubStore
</script>
