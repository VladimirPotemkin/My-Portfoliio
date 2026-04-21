<template>
  <div class="timeline-list">
    <article
      v-for="(item, index) in items"
      :key="`${item.year}-${item.company}-${index}`"
      v-motion="{
        initial: { opacity: 0, y: 100 },
        visibleOnce: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 850,
            delay: index * 90,
            ease: 'ease-out',
          },
        },
      }"
      class="timeline-entry"
    >
      <div class="timeline-entry__year">{{ item.year }}</div>
      <div
        class="timeline-entry__marker"
        aria-hidden="true"
      >
        <span class="timeline-entry__dot"></span>
      </div>
      <div class="timeline-entry__body">
        <h3 class="timeline-entry__title">
          {{ item.title }}
          <span class="timeline-entry__company">{{ item.company }}</span>
        </h3>
        <p class="timeline-entry__description">{{ item.description }}</p>
        <div
          v-if="item.projects?.length"
          class="timeline-entry__projects"
        >
          <span class="timeline-entry__projects-label">{{
            projectsLabel
          }}</span>
          <div class="timeline-entry__projects-value">
            <button
              v-for="project in item.projects"
              :key="project.id"
              class="timeline-entry__project-chip"
              :class="{ 'is-unavailable': !hasGallery(project) }"
              type="button"
              :title="
                hasGallery(project)
                  ? project.name
                  : t('home.projectGalleryUnavailable')
              "
              @click="openGallery(project)"
            >
              {{ project.name }}
            </button>
          </div>
        </div>
      </div>
    </article>
  </div>

  <ProjectGalleryModal
    v-model="isGalleryOpen"
    :title="selectedProject?.name ?? t('home.projectGalleryTitle')"
    :section-label="projectsLabel"
    :description="selectedProject?.description ?? ''"
    :images="selectedProject?.images ?? []"
  />
</template>

<script setup lang="ts">
import { computed, ref, type PropType } from 'vue'
import { useI18n } from 'vue-i18n'
import type { TimelineItem, TimelineProject } from '../types'
import ProjectGalleryModal from './ProjectGalleryModal.vue'

const { t } = useI18n()
const selectedProject = ref<TimelineProject | null>(null)

const isGalleryOpen = computed({
  get: () => selectedProject.value !== null,
  set: (value: boolean) => {
    if (!value) {
      selectedProject.value = null
    }
  },
})

const hasGallery = (project: TimelineProject) =>
  (project.images?.length ?? 0) > 0

const openGallery = (project: TimelineProject) => {
  if (!hasGallery(project)) {
    return
  }

  selectedProject.value = project
}

defineProps({
  items: {
    type: Array as PropType<TimelineItem[]>,
    required: true,
  },
  projectsLabel: {
    type: String,
    required: true,
  },
})
</script>
