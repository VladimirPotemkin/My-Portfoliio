<template>
  <section class="content-view">
    <div class="content-view__intro">
      <h1 class="content-view__title">{{ t('contacts.title') }}</h1>
    </div>

    <div class="contacts-layout">
      <div class="contacts-grid">
        <a
          v-for="contact in primaryContacts"
          :key="contact.type"
          class="surface-panel contacts-card contacts-card--link"
          :href="contact.href"
          :target="
            contact.type === 'email' || contact.type === 'phone'
              ? undefined
              : '_blank'
          "
          rel="noreferrer"
        >
          <p class="info-title">{{ contact.label }}</p>
          <p class="info-body">{{ contact.value }}</p>
        </a>
      </div>

      <form
        class="surface-panel contacts-form"
        novalidate
        @submit.prevent="submitForm"
      >
        <p class="info-title">{{ t('contacts.formTitle') }}</p>

        <label class="contacts-form__label">
          <span>{{ t('contacts.formNameLabel') }}</span>
          <input
            v-model.trim="form.name"
            class="contacts-form__field"
            type="text"
            name="name"
            autocomplete="name"
          />
          <span
            v-if="errors.name"
            class="contacts-form__error"
          >
            {{ errors.name }}
          </span>
        </label>

        <label class="contacts-form__label">
          <span>{{ t('contacts.formEmailLabel') }}</span>
          <input
            v-model.trim="form.email"
            class="contacts-form__field"
            type="email"
            name="email"
            autocomplete="email"
          />
          <span
            v-if="errors.email"
            class="contacts-form__error"
          >
            {{ errors.email }}
          </span>
        </label>

        <label class="contacts-form__label">
          <span>{{ t('contacts.formMessageLabel') }}</span>
          <textarea
            v-model.trim="form.message"
            class="contacts-form__field contacts-form__field--area"
            name="message"
          ></textarea>
          <span
            v-if="errors.message"
            class="contacts-form__error"
          >
            {{ errors.message }}
          </span>
        </label>

        <button
          class="action-link contacts-form__submit"
          type="submit"
        >
          {{ t('contacts.formSubmit') }}
        </button>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, reactive } from 'vue'
import { useI18n } from 'vue-i18n'
import { useToast } from '../composables/useToast'
import { profileData } from '../data/profile'
import { profileDataRu } from '../data/profile.ru'

const { t, locale } = useI18n()
const { showToast } = useToast()

const form = reactive({
  name: '',
  email: '',
  message: '',
})

const errors = reactive({
  name: '',
  email: '',
  message: '',
})

const activeProfile = computed(() =>
  locale.value === 'ru' ? profileDataRu : profileData,
)

const primaryContacts = computed(() =>
  activeProfile.value.contacts.filter(({ type }) =>
    ['email', 'telegram', 'github'].includes(type),
  ),
)

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

function validateForm(): boolean {
  errors.name = form.name ? '' : t('contacts.formErrors.nameRequired')
  errors.email = form.email
    ? isValidEmail(form.email)
      ? ''
      : t('contacts.formErrors.emailInvalid')
    : t('contacts.formErrors.emailRequired')
  errors.message = form.message ? '' : t('contacts.formErrors.messageRequired')

  return !errors.name && !errors.email && !errors.message
}

function submitForm(): void {
  if (!validateForm()) {
    return
  }

  form.name = ''
  form.email = ''
  form.message = ''
  showToast(t('toast.formSubmitted'))
}
</script>
