import { beforeEach, describe, expect, it, vi } from 'vitest'
import { ref } from 'vue'
import { useResumeProfile } from './useResumeProfile'

const localeRef = ref<'ru' | 'en'>('ru')

vi.mock('vue-i18n', () => ({
  useI18n: () => ({
    locale: localeRef,
    t: (key: string) => key,
  }),
}))

describe('useResumeProfile', () => {
  beforeEach(() => {
    localeRef.value = 'ru'
  })

  it('returns russian profile by default', () => {
    const profile = useResumeProfile()

    expect(profile.activeProfile.value.firstName).toBe('Владимир')
    expect(profile.primaryEmailHref.value).toContain('mailto:')
    expect(profile.githubContactHref.value).toContain('github.com')
  })

  it('switches to english profile when locale changes', () => {
    const profile = useResumeProfile()

    localeRef.value = 'en'

    expect(profile.activeProfile.value.firstName).toBe('Vladimir')
    expect(profile.highlightedSkills.value.length).toBeGreaterThan(0)
  })

  it('builds stable derived values and helpers', () => {
    const profile = useResumeProfile()

    expect(profile.primaryContacts.value).toHaveLength(3)
    expect(profile.availabilityTripsLine.value).toBe('home.cvBusinessTripsYes')
    expect(profile.formatProjectNames([{ id: 'p1', name: 'One' }, { id: 'p2', name: 'Two' }])).toBe('One | Two')
  })
})
