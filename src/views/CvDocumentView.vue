<template>
  <main class="cv-document">
    <div class="cv-document__toolbar no-print">
      <RouterLink
        class="cv-document__toolbar-link"
        to="/"
      >
        {{ t('home.cvBack') }}
      </RouterLink>
      <button
        class="cv-document__toolbar-link"
        type="button"
        @click="printCurrentPage"
      >
        {{ t('home.cvPrint') }}
      </button>
      <a
        :href="cvPdfHref"
        class="cv-document__toolbar-link"
        download
        target="_blank"
        rel="noreferrer"
      >
        {{ t('home.cvDownload') }}
      </a>
    </div>

    <article class="cv-document__sheet">
      <header class="cv-document__header">
        <div class="cv-document__intro">
          <p class="cv-document__eyebrow">{{ t('home.cvSection') }}</p>
          <h1 class="cv-document__title">{{ activeProfile.fullName }}</h1>
          <p class="cv-document__role">{{ activeProfile.role }}</p>
          <p class="cv-document__summary">{{ activeProfile.summary }}</p>

          <div class="cv-document__meta-list">
            <p>{{ availabilityPrimaryLine }}</p>
            <p>{{ availabilityModesLine }}</p>
            <p>{{ availabilityEmploymentLine }}</p>
            <p>{{ availabilityTripsLine }}</p>
          </div>
        </div>

        <aside class="cv-document__photo">
          <p class="cv-document__photo-title">{{ t('home.cvPhotoPlaceholder') }}</p>
          <p class="cv-document__photo-hint">{{ t('home.cvPhotoHint') }}</p>
        </aside>
      </header>

      <div class="cv-document__grid">
        <section class="cv-document__section">
          <h2 class="cv-document__section-title">{{ t('home.cvContacts') }}</h2>
          <div class="cv-document__stack">
            <article
              v-for="contact in activeProfile.contacts"
              :key="contact.type"
              class="cv-document__stack-item"
            >
              <h3 class="cv-document__item-title">{{ contact.label }}</h3>
              <p class="cv-document__item-text">{{ contact.value }}</p>
            </article>
          </div>
        </section>

        <section class="cv-document__section">
          <h2 class="cv-document__section-title">{{ t('home.cvFocus') }}</h2>
          <div class="cv-document__stack">
            <article
              v-for="section in activeProfile.cvSections"
              :key="section.title"
              class="cv-document__stack-item"
            >
              <h3 class="cv-document__item-title">{{ section.title }}</h3>
              <ul class="cv-document__list">
                <li
                  v-for="item in section.items"
                  :key="item"
                >
                  {{ item }}
                </li>
              </ul>
            </article>
          </div>
        </section>

        <section class="cv-document__section">
          <h2 class="cv-document__section-title">{{ t('home.cvStack') }}</h2>
          <div class="cv-document__stack">
            <article
              v-for="group in skillGroups"
              :key="group.category"
              class="cv-document__stack-item"
            >
              <h3 class="cv-document__item-title">{{ group.title }}</h3>
              <p class="cv-document__item-text">{{ group.items }}</p>
            </article>
          </div>
        </section>

        <section class="cv-document__section">
          <h2 class="cv-document__section-title">{{ t('home.cvEducation') }}</h2>
          <CvStackItems
            :items="educationStackItems"
            stack-class="cv-document__stack"
            item-class="cv-document__stack-item"
            title-class="cv-document__item-title"
            text-class="cv-document__item-text"
          />
        </section>

        <section class="cv-document__section">
          <h2 class="cv-document__section-title">{{ t('home.cvTraining') }}</h2>
          <CvStackItems
            :items="trainingStackItems"
            stack-class="cv-document__stack"
            item-class="cv-document__stack-item"
            title-class="cv-document__item-title"
            text-class="cv-document__item-text"
          />
        </section>

        <section class="cv-document__section cv-document__section--full">
          <h2 class="cv-document__section-title">{{ t('home.cvExperience') }}</h2>
          <div class="cv-document__stack">
            <article
              v-for="item in activeProfile.timeline"
              :key="`${item.company}-${item.year}`"
              class="cv-document__stack-item"
            >
              <h3 class="cv-document__item-title">
                {{ item.title }} | {{ item.company }}
              </h3>
              <p class="cv-document__item-text cv-document__item-text--muted">
                {{ item.year }}
              </p>
              <p class="cv-document__item-text">{{ item.description }}</p>
              <p
                v-if="item.projects?.length"
                class="cv-document__item-text cv-document__item-text--muted"
              >
                {{ t('home.timelineProjectLabel') }}:
                {{ formatProjectNames(item.projects) }}
              </p>
            </article>
          </div>
        </section>

        <section class="cv-document__section">
          <h2 class="cv-document__section-title">{{ t('home.cvLanguages') }}</h2>
          <CvStackItems
            :items="languageStackItems"
            stack-class="cv-document__stack"
            item-class="cv-document__stack-item"
            title-class="cv-document__item-title"
            text-class="cv-document__item-text"
          />
        </section>
      </div>
    </article>
  </main>
</template>

<script setup lang="ts">
import { computed, nextTick, onMounted } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import CvStackItems from '../components/CvStackItems.vue'
import { useResumeProfile } from '../composables/useResumeProfile'

const route = useRoute()
const { t } = useI18n()
const {
  activeProfile,
  availabilityPrimaryLine,
  availabilityModesLine,
  availabilityEmploymentLine,
  availabilityTripsLine,
  skillGroups,
  formatProjectNames,
} = useResumeProfile()

const cvPdfHref = '/cv/vladimir-potemkin-frontend-developer-cv.pdf'

const educationStackItems = computed(() =>
  activeProfile.value.education.map(item => ({
    id: `${item.institution}-${item.year}`,
    title: item.institution,
    meta: `${item.degree} | ${item.field} | ${item.year}`,
  })),
)

const trainingStackItems = computed(() =>
  activeProfile.value.training.map(item => ({
    id: `${item.provider}-${item.title}-${item.year}`,
    title: item.provider,
    meta: `${item.title} | ${item.year}`,
  })),
)

const languageStackItems = computed(() =>
  activeProfile.value.languages.map(language => ({
    id: language.name,
    title: language.name,
    meta: language.level,
  })),
)

function printCurrentPage(): void {
  window.print()
}

onMounted(async () => {
  if (route.query.print !== '1') {
    return
  }

  await nextTick()
  requestAnimationFrame(() => {
    window.print()
  })
})
</script>

<style scoped>
.cv-document {
  min-height: 100vh;
  padding: 1.5rem;
  background: #f3f4f6;
  color: #111111;
}

.cv-document__toolbar {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 0.75rem;
  width: min(100%, 210mm);
  margin: 0 auto 1rem;
}

.cv-document__toolbar-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 2.75rem;
  border: 1px solid #111111;
  background: #ffffff;
  padding: 0.7rem 1rem;
  color: #111111;
  font: inherit;
  font-size: 0.95rem;
  text-decoration: none;
  cursor: pointer;
}

.cv-document__sheet {
  width: min(100%, 210mm);
  margin: 0 auto;
  border: 1px solid #111111;
  background: #ffffff;
  padding: 16mm 14mm;
}

.cv-document__header {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 42mm;
  gap: 1rem;
  align-items: start;
  padding-bottom: 1rem;
  border-bottom: 2px solid #111111;
}

.cv-document__eyebrow,
.cv-document__section-title {
  margin: 0;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.cv-document__title {
  margin: 0.4rem 0 0;
  font-size: 2rem;
  line-height: 1.1;
}

.cv-document__role {
  margin: 0.45rem 0 0;
  font-size: 1rem;
  font-weight: 700;
}

.cv-document__summary,
.cv-document__item-text,
.cv-document__list {
  margin: 0.8rem 0 0;
  font-size: 0.95rem;
  line-height: 1.6;
}

.cv-document__meta-list {
  display: grid;
  gap: 0.3rem;
  margin-top: 1rem;
  font-size: 0.92rem;
  line-height: 1.5;
}

.cv-document__photo {
  display: flex;
  min-height: 54mm;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.35rem;
  border: 1px solid #111111;
  padding: 0.75rem;
  text-align: center;
}

.cv-document__photo-title,
.cv-document__photo-hint {
  margin: 0;
}

.cv-document__photo-title {
  font-size: 0.95rem;
  font-weight: 700;
}

.cv-document__photo-hint {
  font-size: 0.82rem;
}

.cv-document__grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: minmax(0, 1.2fr) minmax(0, 1fr);
  margin-top: 1rem;
}

.cv-document__section {
  border: 1px solid #111111;
  padding: 0.9rem 1rem;
}

.cv-document__section--full {
  grid-column: 1 / -1;
}

.cv-document__stack {
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
  margin-top: 0.8rem;
}

.cv-document__stack-item + .cv-document__stack-item {
  padding-top: 0.85rem;
  border-top: 1px solid #111111;
}

.cv-document__item-title {
  margin: 0;
  font-size: 1rem;
  line-height: 1.4;
}

.cv-document__item-text--muted {
  margin-top: 0.35rem;
}

.cv-document__list {
  padding-left: 1.15rem;
}

.cv-document__list li + li {
  margin-top: 0.35rem;
}

@media (max-width: 900px) {
  .cv-document {
    padding: 1rem;
  }

  .cv-document__header,
  .cv-document__grid {
    grid-template-columns: minmax(0, 1fr);
  }

  .cv-document__photo {
    min-height: 40mm;
  }
}

@media print {
  .cv-document {
    padding: 0;
    background: #ffffff;
  }

  .cv-document__sheet {
    width: auto;
    border: 0;
    padding: 0;
  }

  .no-print {
    display: none !important;
  }
}

@page {
  size: A4;
  margin: 12mm;
}
</style>

