import type { ContactLink, SkillItem } from '../types'

type ContactLabels = {
  email: string
  telegram: string
  github: string
}

const contactMeta = {
  email: {
    value: 'v.potemkin93@yandex.ru',
    href: 'mailto:v.potemkin93@yandex.ru',
  },
  telegram: {
    value: '@VladimirPotemkin',
    href: 'https://t.me/VladimirPotemkin',
  },
  github: {
    value: 'VladimirPotemkin',
    href: 'https://github.com/VladimirPotemkin',
  },
} as const

export const sharedSkills: SkillItem[] = [
  { name: 'Vue 3', category: 'frontend' },
  { name: 'React', category: 'frontend' },
  { name: 'TypeScript', category: 'language' },
  { name: 'JavaScript', category: 'language' },
  { name: 'UI Architecture', category: 'architecture' },
  { name: 'FSD', category: 'architecture' },
  { name: 'SPA', category: 'frontend' },
  { name: 'Component-Based Development', category: 'architecture' },
  { name: 'HTML5', category: 'frontend' },
  { name: 'CSS3', category: 'frontend' },
  { name: 'SCSS', category: 'frontend' },
  { name: 'Tailwind CSS', category: 'frontend' },
  { name: 'Pinia', category: 'state' },
  { name: 'Vuex', category: 'state' },
  { name: 'Vue Router', category: 'frontend' },
  { name: 'SOLID', category: 'architecture' },
  { name: 'DRY', category: 'architecture' },
  { name: 'KISS', category: 'architecture' },
  { name: 'BEM', category: 'architecture' },
  { name: 'Vite', category: 'tooling' },
  { name: 'Git', category: 'tooling' },
  { name: 'ESLint', category: 'tooling' },
  { name: 'Prettier', category: 'tooling' },
  { name: 'Claude Code', category: 'ai' },
  { name: 'Codex', category: 'ai' },
  { name: 'Cursor', category: 'ai' },
  { name: 'ChatGPT', category: 'ai' },
]

export const ipamProjectImages = [
  '/portfolio/ipam/Screenshot%202026-04-09%20145236.png',
  '/portfolio/ipam/Screenshot%202026-04-09%20145309.png',
  '/portfolio/ipam/Screenshot%202026-04-09%20145318.png',
  '/portfolio/ipam/Screenshot%202026-04-09%20145354.png',
  '/portfolio/ipam/Screenshot%202026-04-09%20145359.png',
  '/portfolio/ipam/Screenshot%202026-04-09%20145413.png',
  '/portfolio/ipam/Screenshot%202026-04-09%20145449.png',
  '/portfolio/ipam/Screenshot%202026-04-09%20145456.png',
  '/portfolio/ipam/Screenshot%202026-04-09%20145518.png',
  '/portfolio/ipam/Screenshot%202026-04-09%20145546.png',
  '/portfolio/ipam/Screenshot%202026-04-09%20145625.png',
] as const

export const sumuzProjectImages = [
  '/portfolio/sumuz/Screenshot%202026-04-09%20130729.png',
  '/portfolio/sumuz/Screenshot%202026-04-09%20130742.png',
  '/portfolio/sumuz/Screenshot%202026-04-09%20130811.png',
  '/portfolio/sumuz/Screenshot%202026-04-09%20130817.png',
] as const

export function createSharedContacts(labels: ContactLabels): ContactLink[] {
  return [
    {
      type: 'email',
      label: labels.email,
      value: contactMeta.email.value,
      href: contactMeta.email.href,
    },
    {
      type: 'telegram',
      label: labels.telegram,
      value: contactMeta.telegram.value,
      href: contactMeta.telegram.href,
    },
    {
      type: 'github',
      label: labels.github,
      value: contactMeta.github.value,
      href: contactMeta.github.href,
    },
  ]
}
