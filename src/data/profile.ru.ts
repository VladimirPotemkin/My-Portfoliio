import type { DeveloperProfile } from '../types'

export const profileDataRu: DeveloperProfile = {
  fullName: 'Владимир Потёмкин',
  firstName: 'Владимир',
  role: 'Frontend Developer (Vue / JavaScript / TypeScript)',
  tagline: 'Разрабатываю сложные продуктовые SPA на Vue 3 и TypeScript.',
  summary:
    'Frontend-разработчик с фокусом на Vue 3 / TypeScript и разработку сложных продуктовых SPA. Основной профиль - интерфейсы с насыщенной бизнес-логикой, серверной обработкой данных, большим количеством сущностей и глубокой интеграцией с backend API. Сильная сторона - масштабируемая frontend-архитектура: переиспользуемые компоненты, унификация типовых сценариев, организация проекта по FSD, снижение связности модулей и упрощение дальнейшего развития кодовой базы. На текущем проекте реализовал оркестратор сущностей, сокративший подключение новой доменной модели в UI примерно до 30 минут.',
  experienceLabel: 'Коммерческая frontend-разработка с мая 2023',
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
  ],
  skills: [
    { name: 'Vue 3', category: 'frontend' },
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
  ],
  timeline: [
    {
      year: 'Апрель 2025 - настоящее время',
      title: 'Frontend-разработчик',
      company: 'ЭКОН Технологии',
      description:
        'Разрабатываю сложные внутренние SPA на Vue 3 с ролевой моделью доступа, серверной обработкой данных и интеграцией с backend API. Реализовал оркестратор сущностей, сокративший подключение новой доменной модели в UI примерно до 30 минут, унифицировал типовые сценарии через платформенные компоненты, участвовал в миграции с Vue 2 на Vue 3, снизил связность фронтенда через FSD-рефакторинг и повысил устойчивость сложных экранов за счёт lazy loading, кэширования и оптимизации state management.',
      projects: [
        {
          id: 'ipam',
          name: 'IPAM',
          description: 'Продукт для управления сетевой инфраструктурой.',
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
          description:
            'Интерфейсы для политик, чёрных списков и логирования для Вымпелкома.',
        },
        {
          id: 'sumuz',
          name: 'СУМУЗ для Вымпелком',
          description:
            'Админ-панель мониторинга и управления инфраструктурой в системе защиты от DDoS-атак для Вымпелкома.',
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
      year: 'Октябрь 2023 - апрель 2025',
      title: 'Frontend-разработчик',
      company: 'Коммерческие проекты',
      description:
        'Разрабатывал коммерческие интерфейсы на Vue 3, включая клиентскую логику, маршрутизацию и интеграции с backend API. Выстраивал компонентную структуру и пользовательские сценарии, снижая фрагментацию фронтенда, реализовывал ребрендинг и новые продуктовые сценарии с адаптивной вёрсткой и оптимизировал клиентский код и структуру проекта для более простой поддержки и развития.',
    },
    {
      year: 'Май 2023 - октябрь 2023',
      title: 'Frontend-разработчик',
      company: 'Easel Pix',
      description:
        'Разрабатывал интерфейсы на Vue 3 с клиентской логикой, маршрутизацией и интеграциями с REST API. Реализовывал новый функционал и задачи по ребрендингу, оптимизировал загрузку интерфейсов через работу с изображениями, шрифтами и клиентским состоянием, участвовал в интеграции платёжного сценария с backend-командой.',
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
  training: [
    {
      provider: 'BrainsCloud',
      title: 'HTML+CSS',
      year: 2020,
    },
    {
      provider: 'HTML Academy',
      title: 'HTML и CSS. Адаптивная вёрстка и автоматизация',
      year: 2020,
    },
  ],
  languages: [
    { name: 'Русский', level: 'Родной' },
    { name: 'Английский', level: 'B2' },
  ],
  cvSections: [
    {
      title: 'Продуктовые SPA',
      items: [
        'Сложные продуктовые SPA с насыщенной бизнес-логикой, большим количеством сущностей и интеграцией с backend API.',
        'Внутренние интерфейсы и админ-панели с ролевой моделью доступа и серверными workflow.',
      ],
    },
    {
      title: 'Архитектура и масштабирование',
      items: [
        'Переиспользуемые компоненты, унификация типовых UI-сценариев и архитектура на принципах FSD.',
        'Снижение связности модулей и структура кодовой базы, которую проще масштабировать и поддерживать.',
      ],
    },
    {
      title: 'Платформенный подход',
      items: [
        'Реализовал оркестратор сущностей, сокративший подключение новой доменной модели в UI примерно до 30 минут.',
        'Стандартизировал типовые сценарии работы с сущностями через платформенные компоненты и общие механики.',
      ],
    },
    {
      title: 'Инженерная дисциплина',
      items: [
        'Участвовал в миграции с Vue 2 на Vue 3, обновляя клиентскую логику и базовые интерфейсные механики под новую архитектуру.',
        'Единый инженерный контур: Vite, ESLint, Prettier, code review, lazy loading, кэширование и оптимизация state management.',
      ],
    },
  ],
}
