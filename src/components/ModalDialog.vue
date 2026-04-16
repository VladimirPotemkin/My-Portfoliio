<template>
  <Teleport to="body">
    <Transition name="modal-fade">
      <div
        v-if="modelValue"
        class="modal-backdrop"
        @click="closeModal"
      >
        <div
          v-motion="{ initial: { opacity: 0, scale: 0.94, y: 24 }, enter: { opacity: 1, scale: 1, y: 0 } }"
          class="modal-panel"
          @click.stop
        >
          <div class="modal-header">
            <div>
              <p class="eyebrow">{{ sectionLabel }}</p>
              <h2 class="modal-title">{{ title }}</h2>
              <p v-if="description" class="modal-description">{{ description }}</p>
            </div>
            <button
              class="modal-close"
              type="button"
              :aria-label="closeLabel"
              @click="closeModal"
            >
              ×
            </button>
          </div>

          <div class="modal-content">
            <slot />
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, watch } from 'vue'

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  sectionLabel: {
    type: String,
    required: true,
  },
  closeLabel: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['update:modelValue'])
const keydownAbortController = new AbortController()

const closeModal = () => {
  emit('update:modelValue', false)
}

watch(
  () => props.modelValue,
  isOpen => {
    if (typeof document === 'undefined') {
      return
    }

    document.body.style.overflow = isOpen ? 'hidden' : ''
  },
)

onMounted(() => {
  window.addEventListener(
    'keydown',
    event => {
      if (event.key === 'Escape' && props.modelValue) {
        closeModal()
      }
    },
    { signal: keydownAbortController.signal },
  )
})

onBeforeUnmount(() => {
  document.body.style.overflow = ''
  keydownAbortController.abort()
})
</script>
