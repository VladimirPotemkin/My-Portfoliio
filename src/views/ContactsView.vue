<template>
  <section class="content-view">
    <div class="content-view__intro">
      <p class="eyebrow">{{ t('contacts.eyebrow') }}</p>
      <h1 class="content-view__title">{{ t('contacts.title') }}</h1>
      <p class="body-copy">
        {{ t('contacts.description') }}
      </p>
    </div>

    <div class="content-grid">
      <article class="surface-panel content-card">
        <p class="info-title">{{ t('contacts.emailTitle') }}</p>
        <p class="info-body">v.potemkin93@yandex.ru</p>
      </article>

      <article class="surface-panel content-card">
        <p class="info-title">{{ t('contacts.telegramTitle') }}</p>
        <p class="info-body">@VladimirPotemkin</p>
      </article>

      <article class="surface-panel content-card">
        <p class="info-title">{{ t('contacts.githubTitle') }}</p>
        <p class="info-body">github.com/VladimirPotemkin</p>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
