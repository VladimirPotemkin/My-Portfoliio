<template>
  <footer class="app-footer">
    <p class="app-footer__copy">
      {{ currentYear }} · {{ fullName }} · {{ t('footer.role') }}
    </p>
    <div class="app-footer__links">
      <a
        v-for="contact in footerContacts"
        :key="contact.type"
        class="app-footer__link"
        :href="contact.href"
        :target="isExternalContact(contact.href) ? '_blank' : undefined"
        rel="noreferrer"
      >
        {{ t(contact.labelKey) }}
      </a>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useResumeProfile } from '../composables/useResumeProfile'

const currentYear = new Date().getFullYear()
const { t } = useI18n()
const { activeProfile } = useResumeProfile()

const footerContactTypeOrder = ['email', 'github', 'telegram'] as const
const footerLabelByType: Record<(typeof footerContactTypeOrder)[number], string> =
  {
    email: 'footer.email',
    github: 'footer.github',
    telegram: 'footer.telegram',
  }

const fullName = computed(() => activeProfile.value.fullName)

const footerContacts = computed(() =>
  footerContactTypeOrder.reduce<
    Array<{ type: (typeof footerContactTypeOrder)[number]; href: string; labelKey: string }>
  >((accumulator, type) => {
    const contact = activeProfile.value.contacts.find(item => item.type === type)
    if (!contact?.href) {
      return accumulator
    }

    accumulator.push({
      type,
      href: contact.href,
      labelKey: footerLabelByType[type],
    })

    return accumulator
  }, []),
)

function isExternalContact(href: string): boolean {
  return href.startsWith('http://') || href.startsWith('https://')
}
</script>
