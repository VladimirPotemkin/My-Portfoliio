import { ref } from 'vue'
import { defineStore } from 'pinia'
import { i18n } from '../i18n'
import type { Locale } from '../types'

const LANGUAGE_STORAGE_KEY = 'my-portfolio:locale'

function getPreferredLocale(): Locale {
  if (typeof navigator === 'undefined') {
    return 'ru'
  }

  return navigator.language.toLowerCase().startsWith('ru') ? 'ru' : 'en'
}

function persistLocale(locale: Locale): void {
  if (typeof window === 'undefined') {
    return
  }

  window.localStorage.setItem(LANGUAGE_STORAGE_KEY, locale)
}

function syncDocumentLanguage(locale: Locale): void {
  if (typeof document === 'undefined') {
    return
  }

  document.documentElement.lang = locale
}

function syncI18nLanguage(locale: Locale): void {
  i18n.global.locale.value = locale
}

export const useLanguageStore = defineStore('language', () => {
  const locale = ref<Locale>('ru')
  const initialized = ref(false)

  function setLocale(nextLocale: Locale): void {
    locale.value = nextLocale
    persistLocale(nextLocale)
    syncDocumentLanguage(nextLocale)
    syncI18nLanguage(nextLocale)
  }

  function initializeLanguage(): void {
    if (initialized.value) {
      syncDocumentLanguage(locale.value)
      syncI18nLanguage(locale.value)
      return
    }

    const storedLocale = typeof window !== 'undefined' ? window.localStorage.getItem(LANGUAGE_STORAGE_KEY) : null

    const resolvedLocale = storedLocale === 'ru' || storedLocale === 'en' ? storedLocale : getPreferredLocale()

    locale.value = resolvedLocale
    syncDocumentLanguage(resolvedLocale)
    syncI18nLanguage(resolvedLocale)
    initialized.value = true
  }

  return {
    locale,
    initialized,
    setLocale,
    initializeLanguage,
  }
})
