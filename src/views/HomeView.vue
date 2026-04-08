<template>
  <main class="min-h-screen px-6 py-10 sm:px-8 lg:px-12">
    <section
      class="mx-auto flex min-h-[calc(100vh-5rem)] max-w-6xl flex-col justify-center gap-10 rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] px-6 py-8 shadow-[0_24px_80px_rgba(0,0,0,0.24)] backdrop-blur md:px-10 lg:px-14">
      <div class="max-w-3xl space-y-5">
        <p
          class="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-accent-soft)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-[var(--color-accent)]">
          {{ profileData.fullName }}
          <span class="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]"></span>
          {{ profileData.role }}
        </p>

        <h1 class="font-[var(--font-display)] text-4xl font-bold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
          {{ profileData.tagline }}
        </h1>

        <p class="max-w-2xl text-base leading-8 text-[var(--color-muted)] sm:text-lg">
          {{ profileData.summary }}
        </p>
      </div>

      <div class="grid gap-4 md:grid-cols-3">
        <article class="rounded-[1.5rem] border border-[var(--color-border)] bg-[var(--color-surface-strong)] p-5">
          <p class="mb-2 text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]">
            Experience
          </p>
          <p class="text-sm leading-7 text-[var(--color-muted)]">
            {{ profileData.experienceLabel }}
          </p>
        </article>

        <article class="rounded-[1.5rem] border border-[var(--color-border)] bg-[var(--color-surface-strong)] p-5">
          <p class="mb-2 text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]">
            Stack
          </p>
          <p class="text-sm leading-7 text-(--color-muted)">
            {{ highlightedSkills }}
          </p>
        </article>

        <article class="rounded-[1.5rem] border border-[var(--color-border)] bg-[var(--color-surface-strong)] p-5">
          <p class="mb-2 text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]">
            Location
          </p>
          <p class="text-sm leading-7 text-[var(--color-muted)]">
            {{ profileData.availability.location }} ·
            {{ profileData.availability.workModes.join(' / ') }}
          </p>
        </article>
      </div>

      <div class="flex flex-wrap gap-3">
        <span v-for="skill in profileData.skills" :key="skill.name"
          class="rounded-full border border-[var(--color-border)] bg-white/5 px-4 py-2 text-sm text-[var(--color-muted)]">
          {{ skill.name }}
        </span>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { profileData } from '../data/profile'

const highlightedSkills = computed(() => profileData.skills.slice(0, 5).map((skill) => skill.name).join(' · '))
</script>
