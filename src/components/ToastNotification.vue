<template>
  <Transition name="toast">
    <div
      v-if="message"
      class="toast-notification"
      role="status"
      aria-live="polite"
    >
      {{ message }}
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { useToast } from '../composables/useToast'

const { message } = useToast()
</script>
