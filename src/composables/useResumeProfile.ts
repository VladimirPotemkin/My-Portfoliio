import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { profileData } from '../data/profile'
import { profileDataRu } from '../data/profile.ru'
import type { TimelineProject } from '../types'

const skillCategoryOrder = [
  'language',
  'frontend',
  'state',
  'tooling',
  'test',
  'design',
] as const

export function useResumeProfile() {
  const { t, locale } = useI18n()

  const activeProfile = computed(() =>
    locale.value === 'ru' ? profileDataRu : profileData,
  )

  const highlightedSkills = computed(() =>
    activeProfile.value.skills
      .slice(0, 5)
      .map(({ name }) => name)
      .join(' | '),
  )

  const primaryEmail = computed(() =>
    activeProfile.value.contacts.find(({ type }) => type === 'email'),
  )

  const githubContact = computed(() =>
    activeProfile.value.contacts.find(({ type }) => type === 'github'),
  )

  const availabilityPrimaryLine = computed(
    () =>
      `${activeProfile.value.availability.location} | ${activeProfile.value.availability.citizenship}`,
  )

  const availabilityModesLine = computed(() =>
    activeProfile.value.availability.workModes.join(' / '),
  )

  const availabilityEmploymentLine = computed(() =>
    activeProfile.value.availability.employmentTypes.join(' / '),
  )

  const availabilityTripsLine = computed(() =>
    activeProfile.value.availability.businessTrips
      ? t('home.cvBusinessTripsYes')
      : t('home.cvBusinessTripsNo'),
  )

  const skillGroups = computed(() =>
    skillCategoryOrder
      .map((category) => {
        const items = activeProfile.value.skills
          .filter((skill) => skill.category === category)
          .map(({ name }) => name)
          .join(' | ')

        return {
          category,
          title: t(`home.cvSkillCategories.${category}`),
          items,
        }
      })
      .filter(({ items }) => items),
  )

  function formatProjectNames(projects: TimelineProject[]): string {
    return projects.map(({ name }) => name).join(' | ')
  }

  return {
    locale,
    activeProfile,
    highlightedSkills,
    primaryEmail,
    githubContact,
    availabilityPrimaryLine,
    availabilityModesLine,
    availabilityEmploymentLine,
    availabilityTripsLine,
    skillGroups,
    formatProjectNames,
  }
}

