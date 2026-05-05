import { describe, expect, it, vi } from 'vitest'
import { ref } from 'vue'
import { shallowMount } from '@vue/test-utils'
import HomeView from './HomeView.vue'

const localeRef = ref<'ru' | 'en'>('ru')

vi.mock('vue-i18n', () => ({
  useI18n: () => ({
    locale: localeRef,
    t: (key: string) => key,
  }),
}))

describe('HomeView smoke', () => {
  it('renders key sections and action controls', () => {
    const wrapper = shallowMount(HomeView, {
      global: {
        directives: {
          motion: () => undefined,
        },
      },
    })

    expect(wrapper.find('#about').exists()).toBe(true)
    expect(wrapper.find('#portfolio').exists()).toBe(true)
    expect(wrapper.find('#contacts').exists()).toBe(true)
    expect(wrapper.findAll('.home-stage__actions .action-link').length).toBeGreaterThanOrEqual(2)
  })
})
