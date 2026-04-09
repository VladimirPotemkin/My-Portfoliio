<template>
  <div
    class="loader-spinner"
    role="status"
    :aria-label="label"
  >
    <span class="loader-spinner__ring" aria-hidden="true"></span>
    <span class="loader-spinner__text">{{ label }}</span>
  </div>
</template>

<script setup lang="ts">
defineProps({
  label: {
    type: String,
    required: true,
  },
})
</script>
