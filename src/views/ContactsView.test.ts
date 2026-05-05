import { describe, expect, it, vi } from 'vitest'
import { ref } from 'vue'
import { shallowMount } from '@vue/test-utils'
import ContactsView from './ContactsView.vue'

const localeRef = ref<'ru' | 'en'>('ru')

vi.mock('vue-i18n', () => ({
  useI18n: () => ({
    locale: localeRef,
    t: (key: string) => key,
  }),
}))

describe('ContactsView smoke', () => {
  it('renders contacts and form controls', () => {
    const wrapper = shallowMount(ContactsView)

    expect(wrapper.find('.contacts-grid').exists()).toBe(true)
    expect(wrapper.find('form.contacts-form').exists()).toBe(true)
    expect(wrapper.find('input[name="name"]').exists()).toBe(true)
    expect(wrapper.find('input[name="email"]').exists()).toBe(true)
    expect(wrapper.find('textarea[name="message"]').exists()).toBe(true)
  })
})
