<template>
  <footer class="app-footer">
    <p class="app-footer__copy">
      {{ currentYear }} · {{ fullName }} · {{ t('footer.role') }}
    </p>
    <div class="app-footer__links">
      <a
        class="app-footer__link"
        href="mailto:v.potemkin93@yandex.ru"
      >
        {{ t('footer.email') }}
      </a>
      <a
        class="app-footer__link"
        href="https://github.com/VladimirPotemkin"
        target="_blank"
        rel="noreferrer"
      >
        {{ t('footer.github') }}
      </a>
      <a
        class="app-footer__link"
        href="https://t.me/VladimirPotemkin"
        target="_blank"
        rel="noreferrer"
      >
        {{ t('footer.telegram') }}
      </a>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { profileData } from '../data/profile'
import { profileDataRu } from '../data/profile.ru'

const currentYear = new Date().getFullYear()
const { t, locale } = useI18n()
const fullName = computed(() =>
  locale.value === 'ru' ? profileDataRu.fullName : profileData.fullName,
)
</script>
