<template>
  <div class="app-layout">
    <TheHeader />

    <main class="app-layout__main">
      <RouterView v-slot="{ Component, route: viewRoute }">
        <Transition
          :name="viewRoute.meta.transition ?? 'route-fade'"
          mode="out-in"
        >
          <component
            :is="Component"
            :key="viewRoute.path"
          />
        </Transition>
      </RouterView>
    </main>

    <TheFooter />
    <ToastNotification />
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheFooter from './components/TheFooter.vue'
import TheHeader from './components/TheHeader.vue'
import ToastNotification from './components/ToastNotification.vue'
import { useLanguageStore } from './stores/languageStore'
import { useThemeStore } from './stores/themeStore'

const themeStore = useThemeStore()
const languageStore = useLanguageStore()

themeStore.initializeTheme()
languageStore.initializeLanguage()
</script>
