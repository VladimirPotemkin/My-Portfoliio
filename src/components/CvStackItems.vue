<template>
  <div :class="stackClass">
    <article
      v-for="item in items"
      :key="item.id"
      :class="itemClass"
    >
      <h3 :class="titleClass">{{ item.title }}</h3>
      <p :class="textClass">{{ item.meta }}</p>
    </article>
  </div>
</template>

<script setup lang="ts">
type CvStackItem = {
  id: string
  title: string
  meta: string
}

defineProps<{
  items: CvStackItem[]
  stackClass: string
  itemClass: string
  titleClass: string
  textClass: string
}>()
</script>
