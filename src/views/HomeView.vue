<template>
  <main class="app-shell app-shell--onepage">
    <div class="ambient-orb ambient-orb--primary"></div>
    <div class="ambient-orb ambient-orb--secondary"></div>

    <section
      id="about"
      v-motion="{
        initial: { opacity: 0, y: 48 },
        visibleOnce: { opacity: 1, y: 0 },
      }"
      class="page-frame scroll-section home-stage"
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
      v-motion="{
        initial: { opacity: 0, y: 48 },
        visibleOnce: { opacity: 1, y: 0 },
      }"
      class="content-view scroll-section"
    >
      <div class="content-view__intro">
        <h2 class="content-view__title">{{ t('home.timelineSection') }}</h2>
      </div>

      <ExperienceTimeline
        :items="activeProfile.timeline"
        :projects-label="t('home.timelineProjectLabel')"
      />
    </section>

    <div
      id="portfolio"
      v-motion="{
        initial: { opacity: 0, y: 48 },
        visibleOnce: { opacity: 1, y: 0 },
      }"
      class="scroll-section"
    >
      <PortfolioView />
    </div>

    <div
      id="contacts"
      v-motion="{
        initial: { opacity: 0, y: 48 },
        visibleOnce: { opacity: 1, y: 0 },
      }"
      class="scroll-section"
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
      <div class="home-stage__actions">
        <button
          class="action-link"
          type="button"
          @click="printCv"
        >
          {{ t('home.cvPrint') }}
        </button>
        <a
          :href="cvPdfHref"
          class="action-link"
          download
          target="_blank"
          rel="noreferrer"
        >
          {{ t('home.cvDownload') }}
        </a>
      </div>

      <div class="cv-grid">
        <section class="cv-block surface-panel">
          <p class="info-title">{{ t('home.cvProfile') }}</p>
          <div class="cv-stack">
            <article class="cv-stack__item">
              <h3 class="cv-stack__title">{{ activeProfile.fullName }}</h3>
              <p class="cv-stack__meta">{{ activeProfile.role }}</p>
              <p class="cv-stack__meta">{{ activeProfile.summary }}</p>
            </article>

            <article class="cv-stack__item">
              <h3 class="cv-stack__title">{{ t('home.cvWorkFormat') }}</h3>
              <p class="cv-stack__meta">{{ availabilityPrimaryLine }}</p>
              <p class="cv-stack__meta">{{ availabilityModesLine }}</p>
              <p class="cv-stack__meta">{{ availabilityEmploymentLine }}</p>
              <p class="cv-stack__meta">{{ availabilityTripsLine }}</p>
            </article>
          </div>
        </section>

        <section class="cv-block surface-panel">
          <p class="info-title">{{ t('home.cvContacts') }}</p>
          <div class="cv-stack">
            <article
              v-for="contact in activeProfile.contacts"
              :key="contact.type"
              class="cv-stack__item"
            >
              <h3 class="cv-stack__title">{{ contact.label }}</h3>
              <p class="cv-stack__meta">{{ contact.value }}</p>
            </article>
          </div>
        </section>

        <section class="cv-block surface-panel">
          <p class="info-title">{{ t('home.cvFocus') }}</p>
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
          <p class="info-title">{{ t('home.cvStack') }}</p>
          <div class="cv-stack">
            <article
              v-for="group in skillGroups"
              :key="group.category"
              class="cv-stack__item"
            >
              <h3 class="cv-stack__title">{{ group.title }}</h3>
              <p class="cv-stack__meta">{{ group.items }}</p>
            </article>
          </div>
        </section>

        <section class="cv-block surface-panel">
          <p class="info-title">{{ t('home.cvExperience') }}</p>
          <div class="cv-stack">
            <article
              v-for="item in activeProfile.timeline"
              :key="`${item.company}-${item.year}`"
              class="cv-stack__item"
            >
              <h3 class="cv-stack__title">
                {{ item.title }} · {{ item.company }}
              </h3>
              <p class="cv-stack__meta">{{ item.year }}</p>
              <p class="cv-stack__meta">{{ item.description }}</p>
              <p
                v-if="item.projects?.length"
                class="cv-stack__meta"
              >
                {{ t('home.timelineProjectLabel') }}:
                {{ formatProjectNames(item.projects) }}
              </p>
            </article>
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
const cvPdfHref = '/cv/vladimir-potemkin-frontend-developer-cv.pdf'

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

const availabilityPrimaryLine = computed(
  () =>
    `${activeProfile.value.availability.location} · ${activeProfile.value.availability.citizenship}`,
)

const availabilityModesLine = computed(() =>
  activeProfile.value.availability.workModes.join(' / '),
)

const availabilityEmploymentLine = computed(() =>
  activeProfile.value.availability.employmentTypes.join(' / '),
)

const availabilityTripsLine = computed(() =>
  activeProfile.value.availability.businessTrips
    ? t('home.cvBusinessTripsYes')
    : t('home.cvBusinessTripsNo'),
)

const skillCategoryOrder = [
  'language',
  'frontend',
  'state',
  'tooling',
  'test',
  'design',
] as const

const skillGroups = computed(() =>
  skillCategoryOrder
    .map(category => {
      const items = activeProfile.value.skills
        .filter(skill => skill.category === category)
        .map(({ name }) => name)
        .join(' · ')

      return {
        category,
        title: t(`home.cvSkillCategories.${category}`),
        items,
      }
    })
    .filter(({ items }) => items),
)

function formatProjectNames(projects: Array<{ name: string }>): string {
  return projects.map(({ name }) => name).join(' · ')
}

function escapeHtml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
}

function renderList(items: string[]): string {
  return items.map(item => `<li>${escapeHtml(item)}</li>`).join('')
}

function printCv(): void {
  const printWindow = window.open(
    '',
    '_blank',
    'noopener,noreferrer,width=1040,height=900',
  )

  if (!printWindow) {
    window.print()
    return
  }

  const profile = activeProfile.value
  const groups = skillGroups.value
  const html = `<!doctype html>
<html lang="${escapeHtml(locale.value)}">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${escapeHtml(profile.fullName)} - CV</title>
    <style>
      :root {
        color-scheme: light;
      }

      * {
        box-sizing: border-box;
      }

      body {
        margin: 0;
        padding: 32px;
        color: #111827;
        background: #ffffff;
        font-family: "Segoe UI", Arial, sans-serif;
        line-height: 1.55;
      }

      main {
        max-width: 960px;
        margin: 0 auto;
      }

      header {
        margin-bottom: 28px;
        padding-bottom: 20px;
        border-bottom: 2px solid #d1d5db;
      }

      h1 {
        margin: 0 0 8px;
        font-size: 30px;
        line-height: 1.2;
      }

      h2 {
        margin: 0 0 12px;
        font-size: 16px;
        letter-spacing: 0.08em;
        text-transform: uppercase;
      }

      h3 {
        margin: 0 0 6px;
        font-size: 17px;
        line-height: 1.35;
      }

      p {
        margin: 0;
      }

      .lead {
        color: #4b5563;
        font-size: 14px;
      }

      .contact-list,
      .grid {
        display: grid;
        gap: 16px;
      }

      .contact-list {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }

      .grid {
        grid-template-columns: minmax(0, 1.3fr) minmax(0, 1fr);
      }

      .section {
        page-break-inside: avoid;
        break-inside: avoid;
        margin-bottom: 22px;
      }

      .card {
        border: 1px solid #d1d5db;
        padding: 16px 18px;
      }

      .meta {
        color: #6b7280;
        font-size: 13px;
      }

      .stack {
        display: flex;
        flex-direction: column;
        gap: 14px;
      }

      ul {
        margin: 8px 0 0;
        padding-left: 18px;
      }

      li + li {
        margin-top: 6px;
      }

      .experience-item + .experience-item,
      .stack-item + .stack-item {
        margin-top: 16px;
        padding-top: 16px;
        border-top: 1px solid #e5e7eb;
      }

      @page {
        size: A4;
        margin: 14mm;
      }

      @media print {
        body {
          padding: 0;
        }
      }
    </style>
  </head>
  <body>
    <main>
      <header>
        <h1>${escapeHtml(profile.fullName)}</h1>
        <p class="lead">${escapeHtml(profile.role)}</p>
        <p class="lead">${escapeHtml(profile.summary)}</p>
      </header>

      <section class="section card">
        <h2>${escapeHtml(t('home.cvContacts'))}</h2>
        <div class="contact-list">
          ${profile.contacts
            .map(
              contact => `
                <div>
                  <h3>${escapeHtml(contact.label)}</h3>
                  <p class="meta">${escapeHtml(contact.value)}</p>
                </div>
              `,
            )
            .join('')}
        </div>
      </section>

      <div class="grid">
        <section class="section card">
          <h2>${escapeHtml(t('home.cvFocus'))}</h2>
          <div class="stack">
            ${profile.cvSections
              .map(
                section => `
                  <div class="stack-item">
                    <h3>${escapeHtml(section.title)}</h3>
                    <ul>${renderList(section.items)}</ul>
                  </div>
                `,
              )
              .join('')}
          </div>
        </section>

        <section class="section card">
          <h2>${escapeHtml(t('home.cvStack'))}</h2>
          <div class="stack">
            ${groups
              .map(
                group => `
                  <div class="stack-item">
                    <h3>${escapeHtml(group.title)}</h3>
                    <p class="meta">${escapeHtml(group.items)}</p>
                  </div>
                `,
              )
              .join('')}
          </div>
        </section>
      </div>

      <section class="section card">
        <h2>${escapeHtml(t('home.cvExperience'))}</h2>
        <div class="stack">
          ${profile.timeline
            .map(
              item => `
                <div class="experience-item">
                  <h3>${escapeHtml(item.title)} · ${escapeHtml(item.company)}</h3>
                  <p class="meta">${escapeHtml(item.year)}</p>
                  <p>${escapeHtml(item.description)}</p>
                  ${
                    item.projects?.length
                      ? `<p class="meta" style="margin-top: 8px;">${escapeHtml(t('home.timelineProjectLabel'))}: ${escapeHtml(formatProjectNames(item.projects))}</p>`
                      : ''
                  }
                </div>
              `,
            )
            .join('')}
        </div>
      </section>

      <div class="grid">
        <section class="section card">
          <h2>${escapeHtml(t('home.cvEducation'))}</h2>
          <div class="stack">
            ${profile.education
              .map(
                item => `
                  <div class="stack-item">
                    <h3>${escapeHtml(item.institution)}</h3>
                    <p class="meta">${escapeHtml(`${item.degree} · ${item.field} · ${item.year}`)}</p>
                  </div>
                `,
              )
              .join('')}
          </div>
        </section>

        <section class="section card">
          <h2>${escapeHtml(t('home.cvLanguages'))}</h2>
          <div class="stack">
            ${profile.languages
              .map(
                language => `
                  <div class="stack-item">
                    <h3>${escapeHtml(language.name)}</h3>
                    <p class="meta">${escapeHtml(language.level)}</p>
                  </div>
                `,
              )
              .join('')}
          </div>
        </section>
      </div>
    </main>
  </body>
</html>`

  printWindow.document.open()
  printWindow.document.write(html)
  printWindow.document.close()
  printWindow.focus()

  printWindow.onload = () => {
    printWindow.print()
  }
}
</script>
