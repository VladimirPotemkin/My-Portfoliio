<template>
  <header class="app-header">
    <button
      class="brand-mark"
      type="button"
      @click="scrollToSection('#about')"
    >
      <span class="brand-mark__name">{{ t('document.title') }}</span>
      <span class="brand-mark__accent">/</span>
    </button>

    <nav
      class="nav-strip"
      :aria-label="t('nav.aria')"
    >
      <button
        v-for="item in navigation"
        :key="item.name"
        class="nav-link"
        :class="{ 'is-active': activeSection === item.hash }"
        type="button"
        @click="scrollToSection(item.hash)"
      >
        {{ t(item.labelKey) }}
      </button>
    </nav>

    <LanguageSwitcher />
  </header>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute, useRouter } from 'vue-router'
import LanguageSwitcher from './LanguageSwitcher.vue'

const route = useRoute()
const router = useRouter()
const { t } = useI18n()

const navigation = [
  {
    name: 'home',
    labelKey: 'nav.about',
    hash: '#about',
  },
  {
    name: 'portfolio',
    labelKey: 'nav.portfolio',
    hash: '#portfolio',
  },
  {
    name: 'contacts',
    labelKey: 'nav.contacts',
    hash: '#contacts',
  },
]

const activeSection = computed(() => {
  if (route.hash === '#portfolio' || route.hash === '#contacts') {
    return route.hash
  }

  return '#about'
})

async function scrollToSection(hash = '#about') {
  if (route.path !== '/') {
    await router.push('/')
  }

  const target = document.querySelector(hash)

  if (target instanceof HTMLElement) {
    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  if (route.hash !== hash) {
    await router.replace({ path: '/', hash })
  }
}
</script>
