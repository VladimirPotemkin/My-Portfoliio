import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import type { ThemeMode } from '../types'

const THEME_STORAGE_KEY = 'my-portfolio:theme'
const DARK_THEME_COLOR = '#08111b'
const LIGHT_THEME_COLOR = '#eef3f7'

function getSystemTheme(): ThemeMode {
  if (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark'
  }

  return 'light'
}

function persistTheme(theme: ThemeMode): void {
  if (typeof window === 'undefined') {
    return
  }

  window.localStorage.setItem(THEME_STORAGE_KEY, theme)
}

function syncDocumentTheme(theme: ThemeMode): void {
  if (typeof document === 'undefined') {
    return
  }

  const root = document.documentElement
  const themeColorMeta = document.querySelector('meta[name="theme-color"]')

  root.classList.toggle('dark', theme === 'dark')

  if (themeColorMeta instanceof HTMLMetaElement) {
    themeColorMeta.content = theme === 'dark' ? DARK_THEME_COLOR : LIGHT_THEME_COLOR
  }
}

export const useThemeStore = defineStore('theme', () => {
  const theme = ref<ThemeMode>('dark')
  const initialized = ref(false)

  const isDark = computed(() => theme.value === 'dark')

  function setTheme(nextTheme: ThemeMode): void {
    theme.value = nextTheme
    persistTheme(nextTheme)
    syncDocumentTheme(nextTheme)
  }

  function toggleTheme(): void {
    setTheme(theme.value === 'dark' ? 'light' : 'dark')
  }

  function initializeTheme(): void {
    if (initialized.value) {
      syncDocumentTheme(theme.value)
      return
    }

    const storedTheme = typeof window !== 'undefined' ? window.localStorage.getItem(THEME_STORAGE_KEY) : null

    const resolvedTheme = storedTheme === 'light' || storedTheme === 'dark' ? storedTheme : getSystemTheme()

    theme.value = resolvedTheme
    syncDocumentTheme(resolvedTheme)
    initialized.value = true
  }

  return {
    theme,
    initialized,
    isDark,
    setTheme,
    toggleTheme,
    initializeTheme,
  }
})
