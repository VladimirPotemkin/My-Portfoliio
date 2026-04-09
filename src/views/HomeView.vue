<template>
  <main class="app-shell app-shell--onepage">
    <div class="ambient-orb ambient-orb--primary"></div>
    <div class="ambient-orb ambient-orb--secondary"></div>

    <section
      id="about"
      v-motion
      class="page-frame scroll-section"
      :initial="{ opacity: 0, y: 48 }"
      :visible-once="{ opacity: 1, y: 0 }"
    >
      <div
        class="grid items-start gap-10 lg:grid-cols-[minmax(0,1.35fr)_minmax(18rem,0.8fr)]"
      >
        <div class="space-y-8">
          <p class="meta-pill">
            <span>{{ profileData.fullName }}</span>
            <span class="meta-dot"></span>
            <span>{{ t('profile.role') }}</span>
          </p>

          <div class="space-y-5">
            <p class="eyebrow">{{ t('home.eyebrow') }}</p>
            <h1 class="hero-title">
              {{ t('profile.tagline') }}
            </h1>
            <p class="body-copy">
              {{ t('profile.summary') }}
            </p>
          </div>

          <div class="flex flex-wrap gap-3">
            <a
              :href="primaryEmail?.href"
              class="action-link"
            >
              {{ t('home.emailAction') }}
            </a>
            <a
              :href="githubContact?.href"
              class="action-link"
              target="_blank"
              rel="noreferrer"
            >
              {{ t('home.githubAction') }}
            </a>
          </div>
        </div>

        <div class="grid gap-4">
          <article class="surface-panel p-5">
            <p class="info-title">{{ t('home.experienceTitle') }}</p>
            <p class="info-body">
              {{ t('profile.experienceLabel') }}
            </p>
          </article>

          <article class="surface-panel p-5">
            <p class="info-title">{{ t('home.stackTitle') }}</p>
            <p class="info-body">
              {{ highlightedSkills }}
            </p>
          </article>

          <article class="surface-panel p-5">
            <p class="info-title">{{ t('home.locationTitle') }}</p>
            <p class="info-body">
              {{ t('profile.locationLine') }}
            </p>
          </article>
        </div>
      </div>

      <div class="skill-ribbon">
        <span
          v-for="skill in profileData.skills"
          :key="skill.name"
          class="skill-chip"
        >
          {{ skill.name }}
        </span>
      </div>
    </section>

    <div
      id="portfolio"
      v-motion
      class="scroll-section"
      :initial="{ opacity: 0, y: 48 }"
      :visible-once="{ opacity: 1, y: 0 }"
    >
      <PortfolioView />
    </div>

    <div
      id="contacts"
      v-motion
      class="scroll-section"
      :initial="{ opacity: 0, y: 48 }"
      :visible-once="{ opacity: 1, y: 0 }"
    >
      <ContactsView />
    </div>
  </main>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { profileData } from '../data/profile'
import ContactsView from './ContactsView.vue'
import PortfolioView from './PortfolioView.vue'

const { t } = useI18n()

const highlightedSkills = computed(() =>
  profileData.skills
    .slice(0, 5)
    .map(({ name }) => name)
    .join(' · '),
)

const primaryEmail = computed(() =>
  profileData.contacts.find(({ type }) => type === 'email'),
)

const githubContact = computed(() =>
  profileData.contacts.find(({ type }) => type === 'github'),
)
</script>
