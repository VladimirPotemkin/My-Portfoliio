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
defineProps({
  message: {
    type: String,
    default: null,
  },
})
</script>
