import type { DeveloperProfile } from '../types'

export const profileData: DeveloperProfile = {
  fullName: 'Владимир Потёмкин',
  firstName: 'Владимир',
  role: 'Frontend Developer',
  tagline: 'Vue-focused frontend engineer building scalable interfaces and internal products.',
  summary:
    'Фронтенд-разработчик с коммерческим опытом на Vue 3 и экосистеме Vue. Проектирует интерфейсы, работает с клиентской логикой, API-интеграциями, адаптивной вёрсткой и развитием UI-платформ. В работе опирается на SOLID, DRY, KISS, БЭМ и FSD-подход.',
  experienceLabel: '2+ years of commercial web development',
  availability: {
    location: 'Москва',
    citizenship: 'Россия',
    relocation: true,
    businessTrips: true,
    workModes: ['Офис', 'Удалённо', 'Гибрид'],
    employmentTypes: ['Полная занятость', 'Частичная занятость', 'Проектная работа'],
  },
  contacts: [
    {
      type: 'email',
      label: 'Email',
      value: 'v.potemkin93@yandex.ru',
      href: 'mailto:v.potemkin93@yandex.ru',
    },
    {
      type: 'telegram',
      label: 'Telegram',
      value: '@VladimirPotemkin',
      href: 'https://t.me/VladimirPotemkin',
    },
    {
      type: 'github',
      label: 'GitHub',
      value: 'VladimirPotemkin',
      href: 'https://github.com/VladimirPotemkin',
    },
    {
      type: 'phone',
      label: 'Phone',
      value: '+7 (977) 458-48-78',
      href: 'tel:+79774584878',
    },
  ],
  skills: [
    { name: 'Vue 3', category: 'frontend' },
    { name: 'TypeScript', category: 'language' },
    { name: 'Pinia', category: 'state' },
    { name: 'Vuex', category: 'state' },
    { name: 'Vue Router', category: 'frontend' },
    { name: 'Vite', category: 'tooling' },
    { name: 'Tailwind CSS', category: 'frontend' },
    { name: 'SCSS', category: 'frontend' },
    { name: 'HTML5', category: 'frontend' },
    { name: 'CSS3', category: 'frontend' },
    { name: 'Git', category: 'tooling' },
    { name: 'Figma', category: 'design' },
  ],
  timeline: [
    {
      year: 'Apr 2025 - Present',
      title: 'Frontend Developer',
      company: 'ЭКОН Технологии',
      description:
        'Разрабатываю крупные клиентские веб-приложения на Vue 3, Pinia, Vue Router и Vite, проектирую переиспользуемую UI-платформу и улучшаю производительность интерфейсов.',
      projects: ['IPAM', 'ERT для Вымпелком'],
    },
    {
      year: 'May 2024 - Apr 2025',
      title: 'Frontend Developer',
      company: 'Компания не указана в PDF',
      description:
        'Создавал сайты и веб-приложения на Vue 3, Vuex, Vue Router и Vite, занимался ребрендингом, адаптивной вёрсткой, UX-логикой и интеграцией с API-сервисами.',
    },
    {
      year: 'May 2023 - Oct 2023',
      title: 'Frontend Developer',
      company: 'Easel Pix',
      description:
        'Разрабатывал сайты и веб-приложения на JavaScript и Vue 3, интегрировал компоненты и API, оптимизировал клиентский код и выпускал обновления вместе с дизайнерами и backend-командой.',
    },
  ],
  education: [
    {
      institution: 'Московский финансово-промышленный университет "Синергия"',
      degree: 'Бакалавр',
      field: 'Гостиничный и ресторанный бизнес',
      year: 2015,
      location: 'Москва',
    },
  ],
  courses: [
    {
      year: 2020,
      provider: 'BrainsCloud',
      title: 'HTML+CSS',
    },
    {
      year: 2020,
      provider: 'HTML Academy',
      title: 'HTML и CSS. Адаптивная вёрстка и автоматизация',
    },
  ],
  languages: [
    { name: 'Русский', level: 'Родной' },
    { name: 'Английский', level: 'B1' },
  ],
  cvSections: [
    {
      title: 'Подход к разработке',
      items: [
        'Проектирование интерфейсов и клиентской логики',
        'Интеграция backend API и работа с состоянием',
        'Развитие UI-платформы и переиспользуемых компонентов',
        'Настройка Vite, ESLint, Prettier и рабочих процессов команды',
      ],
    },
    {
      title: 'Технический фокус',
      items: [
        'Vue 3, Pinia, Vue Router, Vite',
        'TypeScript, JavaScript, Axios',
        'Tailwind CSS, SCSS, адаптивная вёрстка',
        'SOLID, DRY, KISS, БЭМ, FSD',
      ],
    },
    {
      title: 'Формат работы',
      items: ['Москва', 'Удалённо, гибрид, офис', 'Готов к командировкам', 'Полная занятость, частичная занятость, проектная работа'],
    },
  ],
}
