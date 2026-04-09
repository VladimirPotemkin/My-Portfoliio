<template>
  <div
    class="language-switcher"
    :aria-label="t('language.label')"
  >
    <button
      v-for="option in options"
      :key="option.value"
      class="language-switcher__button"
      :class="{ 'is-active': locale === option.value }"
      type="button"
      @click="setLanguage(option.value)"
    >
      {{ option.label }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useI18n } from 'vue-i18n'
import { useLanguageStore } from '../stores/languageStore'

const languageStore = useLanguageStore()
const { locale } = storeToRefs(languageStore)
const { t } = useI18n()

const options = [
  { value: 'ru', label: 'RU' },
  { value: 'en', label: 'EN' },
]

function setLanguage(nextLocale = 'ru') {
  if (nextLocale === 'ru' || nextLocale === 'en') {
    languageStore.setLocale(nextLocale)
  }
}
</script>
