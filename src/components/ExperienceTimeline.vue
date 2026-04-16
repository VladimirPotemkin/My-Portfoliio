<template>
  <div class="timeline-list">
    <article
      v-for="(item, index) in items"
      :key="`${item.year}-${item.company}-${index}`"
      v-motion="{ initial: { opacity: 0, y: 100 }, visibleOnce: { opacity: 1, y: 0 } }"
      class="timeline-entry"
    >
      <div class="timeline-entry__year">{{ item.year }}</div>
      <div class="timeline-entry__marker" aria-hidden="true">
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
          <span class="timeline-entry__projects-label">{{ projectsLabel }}</span>
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

  <ModalDialog
    v-model="isGalleryOpen"
    :title="selectedProject?.name ?? t('home.projectGalleryTitle')"
    :section-label="projectsLabel"
    :close-label="t('home.projectGalleryClose')"
    :description="selectedProject?.description ?? ''"
  >
    <div
      v-if="galleryImages.length"
      class="project-gallery"
    >
      <div class="project-gallery__viewport">
        <button
          class="project-gallery__nav"
          type="button"
          :aria-label="t('home.projectGalleryPrev')"
          @click="showPreviousImage"
        >
          ‹
        </button>

        <figure class="project-gallery__frame">
          <img
            class="project-gallery__image"
            :src="galleryImages[activeImageIndex]"
            :alt="`${selectedProject?.name} · ${activeImageIndex + 1}`"
          />
          <figcaption class="project-gallery__caption">
            {{
              t('home.projectGalleryCounter', {
                current: activeImageIndex + 1,
                total: galleryImages.length,
              })
            }}
          </figcaption>
        </figure>

        <button
          class="project-gallery__nav"
          type="button"
          :aria-label="t('home.projectGalleryNext')"
          @click="showNextImage"
        >
          ›
        </button>
      </div>

      <div class="project-gallery__thumbs">
        <button
          v-for="(image, imageIndex) in galleryImages"
          :key="`${image}-${imageIndex}`"
          type="button"
          class="project-gallery__thumb"
          :class="{ 'is-active': imageIndex === activeImageIndex }"
          :aria-label="`${selectedProject?.name} ${imageIndex + 1}`"
          @click="activeImageIndex = imageIndex"
        >
          <img
            :src="image"
            :alt="`${selectedProject?.name} ${imageIndex + 1}`"
          />
        </button>
      </div>
    </div>
  </ModalDialog>
</template>

<script setup lang="ts">
import { computed, ref, type PropType } from 'vue'
import { useI18n } from 'vue-i18n'
import type { TimelineItem, TimelineProject } from '../types'
import ModalDialog from './ModalDialog.vue'

const { t } = useI18n()
const selectedProject = ref<TimelineProject | null>(null)
const activeImageIndex = ref(0)

const isGalleryOpen = computed({
  get: () => selectedProject.value !== null,
  set: (value: boolean) => {
    if (!value) {
      selectedProject.value = null
      activeImageIndex.value = 0
    }
  },
})

const galleryImages = computed(() => selectedProject.value?.images ?? [])

const hasGallery = (project: TimelineProject) =>
  (project.images?.length ?? 0) > 0

const openGallery = (project: TimelineProject) => {
  if (!hasGallery(project)) {
    return
  }

  selectedProject.value = project
  activeImageIndex.value = 0
}

const showPreviousImage = () => {
  if (!galleryImages.value.length) {
    return
  }

  activeImageIndex.value =
    (activeImageIndex.value - 1 + galleryImages.value.length) %
    galleryImages.value.length
}

const showNextImage = () => {
  if (!galleryImages.value.length) {
    return
  }

  activeImageIndex.value =
    (activeImageIndex.value + 1) % galleryImages.value.length
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
