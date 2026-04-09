import type { DeveloperProfile } from '../types'

export const profileDataRu: DeveloperProfile = {
  fullName: 'Владимир Потёмкин',
  firstName: 'Владимир',
  role: 'Frontend-разработчик',
  tagline: 'Разрабатываю масштабируемые интерфейсы и внутренние продукты на Vue.',
  summary:
    'Я фронтенд-разработчик с коммерческим опытом на Vue 3 и экосистеме Vue. Проектирую интерфейсы, работаю с клиентской логикой, API-интеграциями, адаптивной вёрсткой и развитием UI-платформ. В работе опираюсь на SOLID, DRY, KISS, БЭМ и FSD-подход.',
  experienceLabel: '2+ года коммерческой веб-разработки',
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
      label: 'Почта',
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
      label: 'Телефон',
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
    { name: 'Tailwind', category: 'frontend' },
    { name: 'SCSS', category: 'frontend' },
    { name: 'HTML5', category: 'frontend' },
    { name: 'CSS3', category: 'frontend' },
    { name: 'Git', category: 'tooling' },
    { name: 'Figma', category: 'design' },
    { name: 'Vitest/Cypress', category: 'test' },
  ],
  timeline: [
    {
      year: 'Апрель 2025 - настоящее время',
      title: 'Frontend-разработчик',
      company: 'ЭКОН Технологии',
      description:
        'Разрабатываю крупные клиентские веб-приложения на Vue 3, Pinia, Vue Router и Vite. В проекте СУМУЗ для Вымпелкома развиваю административный SPA для анти-DDoS сервисов: модули мониторинга, ручной митигации, ролевого доступа и интеграции с внутренними API.',
      projects: [
        {
          id: 'ipam',
          name: 'IPAM',
          description: 'Интерфейсы управления адресным пространством, клиентами, сетями и служебными настройками.',
          images: [
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
          ],
        },
        {
          id: 'ert',
          name: 'ERT для Вымпелком',
        },
        {
          id: 'sumuz',
          name: 'СУМУЗ для Вымпелком',
          description: 'Административный SPA для anti-DDoS: мониторинг, ручная митигация, маршруты, роль-доступ.',
          images: [
            '/portfolio/sumuz/Screenshot%202026-04-09%20130729.png',
            '/portfolio/sumuz/Screenshot%202026-04-09%20130742.png',
            '/portfolio/sumuz/Screenshot%202026-04-09%20130811.png',
            '/portfolio/sumuz/Screenshot%202026-04-09%20130817.png',
          ],
        },
      ],
    },
    {
      year: 'Май 2024 - апрель 2025',
      title: 'Frontend-разработчик',
      company: 'Компания не указана в PDF',
      description:
        'Создавал сайты и веб-приложения на Vue 3, Vuex, Vue Router и Vite, занимался ребрендингом, адаптивной вёрсткой, UX-логикой и интеграцией с API-сервисами.',
    },
    {
      year: 'Май 2023 - октябрь 2023',
      title: 'Frontend-разработчик',
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
        'СУМУЗ: Vuetify, vue-i18n, Chart.js/ApexCharts, role-based routing',
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
