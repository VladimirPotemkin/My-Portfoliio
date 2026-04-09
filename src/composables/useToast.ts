import { ref } from 'vue'

const message = ref<string | null>(null)
let dismissTimer: ReturnType<typeof setTimeout> | null = null

function clearToast(): void {
  if (dismissTimer) {
    clearTimeout(dismissTimer)
    dismissTimer = null
  }

  message.value = null
}

function showToast(nextMessage: string, duration = 2200): void {
  clearToast()
  message.value = nextMessage
  dismissTimer = setTimeout(() => {
    message.value = null
    dismissTimer = null
  }, duration)
}

export function useToast() {
  return {
    message,
    showToast,
    clearToast,
  }
}
