<template>
  <ModalDialog
    :model-value="modelValue"
    :title="title"
    :section-label="sectionLabel"
    :close-label="t('home.projectGalleryClose')"
    :description="description"
    @update:model-value="emit('update:modelValue', $event)"
  >
    <div
      v-if="images.length"
      class="project-gallery"
    >
      <div class="project-gallery__viewport">
        <button
          class="project-gallery__nav"
          type="button"
          :aria-label="t('home.projectGalleryPrev')"
          @click="showPreviousImage"
        >
          &lsaquo;
        </button>

        <figure class="project-gallery__frame">
          <img
            class="project-gallery__image"
            :src="images[activeImageIndex]"
            :alt="`${title} - ${activeImageIndex + 1}`"
          />
          <figcaption class="project-gallery__caption">
            {{
              t('home.projectGalleryCounter', {
                current: activeImageIndex + 1,
                total: images.length,
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
          &rsaquo;
        </button>
      </div>

      <div class="project-gallery__thumbs">
        <button
          v-for="(image, imageIndex) in images"
          :key="`${image}-${imageIndex}`"
          type="button"
          class="project-gallery__thumb"
          :class="{ 'is-active': imageIndex === activeImageIndex }"
          :aria-label="`${title} ${imageIndex + 1}`"
          @click="activeImageIndex = imageIndex"
        >
          <img
            :src="image"
            :alt="`${title} ${imageIndex + 1}`"
          />
        </button>
      </div>
    </div>
  </ModalDialog>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import ModalDialog from './ModalDialog.vue'

const props = withDefaults(
  defineProps<{
    modelValue: boolean
    title: string
    sectionLabel: string
    description?: string
    images: string[]
    initialIndex?: number
  }>(),
  {
    description: '',
    initialIndex: 0,
  },
)

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
}>()

const { t } = useI18n()
const activeImageIndex = ref(0)

const normalizeIndex = (index: number): number => {
  if (!props.images.length) {
    return 0
  }

  return ((index % props.images.length) + props.images.length) % props.images.length
}

const showPreviousImage = () => {
  if (!props.images.length) {
    return
  }

  activeImageIndex.value = normalizeIndex(activeImageIndex.value - 1)
}

const showNextImage = () => {
  if (!props.images.length) {
    return
  }

  activeImageIndex.value = normalizeIndex(activeImageIndex.value + 1)
}

watch(
  () => props.modelValue,
  isOpen => {
    activeImageIndex.value = isOpen ? normalizeIndex(props.initialIndex) : 0
  },
  { immediate: true },
)

watch(
  () => props.initialIndex,
  nextIndex => {
    if (!props.modelValue) {
      return
    }

    activeImageIndex.value = normalizeIndex(nextIndex)
  },
)

watch(
  () => props.images,
  images => {
    if (!images.length) {
      activeImageIndex.value = 0
      return
    }

    activeImageIndex.value = normalizeIndex(activeImageIndex.value)
  },
)
</script>
