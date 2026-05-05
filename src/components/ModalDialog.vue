<template>
  <Teleport to="body">
    <Transition name="modal-fade">
      <div
        v-if="modelValue"
        class="modal-backdrop"
        @click="closeModal"
      >
        <div
          ref="panelRef"
          v-motion="{ initial: { opacity: 0, scale: 0.94, y: 24 }, enter: { opacity: 1, scale: 1, y: 0 } }"
          class="modal-panel"
          role="dialog"
          aria-modal="true"
          :aria-labelledby="titleId"
          :aria-describedby="description ? descriptionId : undefined"
          tabindex="-1"
          @click.stop
        >
          <div class="modal-header">
            <div>
              <p class="eyebrow">{{ sectionLabel }}</p>
              <h2 :id="titleId" class="modal-title">{{ title }}</h2>
              <p
                v-if="description"
                :id="descriptionId"
                class="modal-description"
              >
                {{ description }}
              </p>
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
import { nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'

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

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
}>()

const panelRef = ref<HTMLElement | null>(null)
const lastFocusedElement = ref<HTMLElement | null>(null)
const dialogId = `modal-${Math.random().toString(36).slice(2, 10)}`
const titleId = `${dialogId}-title`
const descriptionId = `${dialogId}-description`
const focusableSelector =
  'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'

const closeModal = () => {
  emit('update:modelValue', false)
}

const getFocusableElements = () => {
  if (!panelRef.value) {
    return []
  }

  return Array.from(panelRef.value.querySelectorAll<HTMLElement>(focusableSelector)).filter(
    element => !element.hasAttribute('disabled') && element.tabIndex !== -1,
  )
}

const trapFocus = (event: KeyboardEvent) => {
  if (!props.modelValue || event.key !== 'Tab') {
    return
  }

  const focusableElements = getFocusableElements()
  if (focusableElements.length === 0) {
    event.preventDefault()
    panelRef.value?.focus()
    return
  }

  const firstElement = focusableElements[0]
  const lastElement = focusableElements[focusableElements.length - 1]
  const activeElement = document.activeElement

  if (event.shiftKey && activeElement === firstElement) {
    event.preventDefault()
    lastElement.focus()
    return
  }

  if (!event.shiftKey && activeElement === lastElement) {
    event.preventDefault()
    firstElement.focus()
  }
}

const handleKeydown = (event: KeyboardEvent) => {
  if (!props.modelValue) {
    return
  }

  if (event.key === 'Escape') {
    closeModal()
    return
  }

  trapFocus(event)
}

watch(
  () => props.modelValue,
  async isOpen => {
    if (typeof document === 'undefined') {
      return
    }

    document.body.style.overflow = isOpen ? 'hidden' : ''

    if (isOpen) {
      lastFocusedElement.value =
        document.activeElement instanceof HTMLElement ? document.activeElement : null
      await nextTick()
      const focusableElements = getFocusableElements()
      const firstFocusableElement = focusableElements[0]
      if (firstFocusableElement) {
        firstFocusableElement.focus()
      } else {
        panelRef.value?.focus()
      }
      return
    }

    const triggerElement = lastFocusedElement.value
    if (triggerElement) {
      await nextTick()
      triggerElement.focus()
    }
  },
)

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onBeforeUnmount(() => {
  document.body.style.overflow = ''
  window.removeEventListener('keydown', handleKeydown)
})
</script>
