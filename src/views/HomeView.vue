<template>
  <main class="app-shell app-shell--onepage">
    <div class="ambient-orb ambient-orb--primary"></div>
    <div class="ambient-orb ambient-orb--secondary"></div>

    <section
      id="about"
      v-motion
      class="page-frame scroll-section home-stage"
      :initial="{ opacity: 0, y: 48 }"
      :visibleOnce="{ opacity: 1, y: 0 }"
    >
      <div class="home-stage__grid">
        <div class="home-stage__visual surface-panel">
          <div class="home-stage__avatar-frame">
            <div class="home-stage__avatar-core">
              <span class="home-stage__avatar-mark">&lt;/&gt;</span>
            </div>
          </div>
          <div class="home-stage__visual-meta">
            <p class="eyebrow">{{ t('home.heroLabel') }}</p>
            <p class="home-stage__visual-text">{{ activeProfile.fullName }}</p>
          </div>
        </div>

        <div class="home-stage__content">
          <p class="meta-pill">
            <span>{{ activeProfile.fullName }}</span>
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

          <div class="home-stage__actions">
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
            <button
              class="action-link"
              type="button"
              @click="isCvOpen = true"
            >
              {{ t('home.cvAction') }}
            </button>
          </div>

          <div class="home-stage__facts">
            <article class="surface-panel home-stage__fact-card">
              <p class="info-title">{{ t('home.experienceTitle') }}</p>
              <p class="info-body">
                {{ t('profile.experienceLabel') }}
              </p>
            </article>

            <article class="surface-panel home-stage__fact-card">
              <p class="info-title">{{ t('home.stackTitle') }}</p>
              <p class="info-body">
                {{ highlightedSkills }}
              </p>
            </article>

            <article class="surface-panel home-stage__fact-card">
              <p class="info-title">{{ t('home.locationTitle') }}</p>
              <p class="info-body">
                {{ t('profile.locationLine') }}
              </p>
            </article>
          </div>
        </div>
      </div>

      <div class="home-stage__tech-strip">
        <span
          v-for="skill in activeProfile.skills"
          :key="skill.name"
          class="skill-chip"
        >
          {{ skill.name }}
        </span>
      </div>
    </section>

    <section
      v-motion
      class="content-view scroll-section"
      :initial="{ opacity: 0, y: 48 }"
      :visibleOnce="{ opacity: 1, y: 0 }"
    >
      <div class="content-view__intro">
        <p class="eyebrow">{{ t('home.experienceSection') }}</p>
        <h2 class="content-view__title">{{ t('home.timelineSection') }}</h2>
      </div>

      <ExperienceTimeline
        :items="activeProfile.timeline"
        :projects-label="t('home.timelineProjectLabel')"
      />
    </section>

    <div
      id="portfolio"
      v-motion
      class="scroll-section"
      :initial="{ opacity: 0, y: 48 }"
      :visibleOnce="{ opacity: 1, y: 0 }"
    >
      <PortfolioView />
    </div>

    <div
      id="contacts"
      v-motion
      class="scroll-section"
      :initial="{ opacity: 0, y: 48 }"
      :visibleOnce="{ opacity: 1, y: 0 }"
    >
      <ContactsView />
    </div>

    <ModalDialog
      v-model="isCvOpen"
      :title="t('home.cvTitle')"
      :section-label="t('home.cvSection')"
      :close-label="t('home.cvClose')"
      :description="t('home.cvSubtitle')"
    >
      <div class="cv-grid">
        <section class="cv-block surface-panel">
          <p class="info-title">{{ t('home.cvApproach') }}</p>
          <div class="cv-block__list">
            <div
              v-for="section in activeProfile.cvSections"
              :key="section.title"
              class="cv-section"
            >
              <h3 class="cv-section__title">{{ section.title }}</h3>
              <ul class="cv-section__items">
                <li
                  v-for="item in section.items"
                  :key="item"
                >
                  {{ item }}
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section class="cv-block surface-panel">
          <p class="info-title">{{ t('home.cvEducation') }}</p>
          <div class="cv-stack">
            <article
              v-for="item in activeProfile.education"
              :key="`${item.institution}-${item.year}`"
              class="cv-stack__item"
            >
              <h3 class="cv-stack__title">{{ item.institution }}</h3>
              <p class="cv-stack__meta">
                {{ item.degree }} · {{ item.field }} · {{ item.year }}
              </p>
            </article>
          </div>
        </section>

        <section class="cv-block surface-panel">
          <p class="info-title">{{ t('home.cvCourses') }}</p>
          <div class="cv-stack">
            <article
              v-for="course in activeProfile.courses"
              :key="`${course.provider}-${course.title}`"
              class="cv-stack__item"
            >
              <h3 class="cv-stack__title">{{ course.title }}</h3>
              <p class="cv-stack__meta">
                {{ course.provider }} · {{ course.year }}
              </p>
            </article>
          </div>
        </section>

        <section class="cv-block surface-panel">
          <p class="info-title">{{ t('home.cvLanguages') }}</p>
          <div class="cv-stack">
            <article
              v-for="language in activeProfile.languages"
              :key="language.name"
              class="cv-stack__item"
            >
              <h3 class="cv-stack__title">{{ language.name }}</h3>
              <p class="cv-stack__meta">{{ language.level }}</p>
            </article>
          </div>
        </section>
      </div>
    </ModalDialog>
  </main>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import ExperienceTimeline from '../components/ExperienceTimeline.vue'
import ModalDialog from '../components/ModalDialog.vue'
import { profileData } from '../data/profile'
import { profileDataRu } from '../data/profile.ru'
import ContactsView from './ContactsView.vue'
import PortfolioView from './PortfolioView.vue'

const { t, locale } = useI18n()
const isCvOpen = ref(false)

const activeProfile = computed(() =>
  locale.value === 'ru' ? profileDataRu : profileData,
)

const highlightedSkills = computed(() =>
  activeProfile.value.skills
    .slice(0, 5)
    .map(({ name }) => name)
    .join(' · '),
)

const primaryEmail = computed(() =>
  activeProfile.value.contacts.find(({ type }) => type === 'email'),
)

const githubContact = computed(() =>
  activeProfile.value.contacts.find(({ type }) => type === 'github'),
)
</script>
