import type { DeveloperProfile } from '../types'

export const profileDataRu: DeveloperProfile = {
  fullName: 'Владимир Потёмкин',
  firstName: 'Владимир',
  role: 'Frontend Developer (TypeScript / Vue / React)',
  tagline: 'Разрабатываю TypeScript-first интерфейсы и внутренние продукты с фокусом на производительность и качество поставки.',
  summary:
    'Frontend-разработчик с 2+ годами коммерческого опыта в создании SPA/PWA на Vue 3 и TypeScript. Ключевые зоны ответственности: архитектура интерфейсов, Core Web Vitals (LCP, INP, CLS), тестирование и стабильные релизные процессы. Использую Cursor и GitHub Copilot для ускорения разработки, генерации кода, тестов и документации. Также работаю с актуальными React/Next.js и понимаю SSR/RSC-паттерны.',
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
    { name: 'JavaScript (ES2023+)', category: 'language' },
    { name: 'TypeScript', category: 'language' },
    { name: 'Vue 3', category: 'frontend' },
    { name: 'Nuxt 3', category: 'frontend' },
    { name: 'React', category: 'frontend' },
    { name: 'Next.js', category: 'frontend' },
    { name: 'SSR / RSC', category: 'frontend' },
    { name: 'Web Vitals (LCP, INP, CLS)', category: 'frontend' },
    { name: 'Pinia', category: 'state' },
    { name: 'Vuex', category: 'state' },
    { name: 'Vue Router', category: 'frontend' },
    { name: 'Tailwind CSS', category: 'frontend' },
    { name: 'SCSS', category: 'frontend' },
    { name: 'Vite', category: 'tooling' },
    { name: 'Docker', category: 'tooling' },
    { name: 'CI/CD (GitHub Actions)', category: 'tooling' },
    { name: 'Vitest', category: 'test' },
    { name: 'Cypress', category: 'test' },
    { name: 'Playwright', category: 'test' },
    { name: 'GitHub Copilot', category: 'tooling' },
    { name: 'Cursor', category: 'tooling' },
    { name: 'Git', category: 'tooling' },
    { name: 'HTML5', category: 'frontend' },
    { name: 'CSS3', category: 'frontend' },
    { name: 'Figma', category: 'design' },
  ],
  timeline: [
    {
      year: 'Апрель 2025 - настоящее время',
      title: 'Frontend-разработчик',
      company: 'ЭКОН Технологии',
      description:
        'Оптимизировал производительность SPA для внутренних продуктов (LCP: 2.4s -> 1.3s; INP и CLS в пределах целевых значений), внедрил TypeScript-first компонентную архитектуру и сократил количество регрессий в продакшене. Реализовал модули мониторинга, ручной митигации и ролевого доступа в СУМУЗ для Вымпелкома, а также стандартизировал релизный процесс с помощью AI-assisted workflows.',
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
        'Создавал и развивал SPA на Vue 3 с фокусом на UX и производительность: сокращал время загрузки ключевых страниц и повышал стабильность клиентской логики за счёт модульной архитектуры, TypeScript-first подхода и унификации компонентов.',
    },
    {
      year: 'Май 2023 - октябрь 2023',
      title: 'Frontend-разработчик',
      company: 'Easel Pix',
      description:
        'Разрабатывал веб-приложения на JavaScript и Vue 3, внедрял API-интеграции и адаптивную вёрстку, участвовал в полном цикле релиза совместно с дизайнерами и backend-командой.',
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
  languages: [
    { name: 'Русский', level: 'Родной' },
    { name: 'Английский', level: 'B1' },
  ],
  cvSections: [
    {
      title: 'Core Frontend Delivery',
      items: [
        'TypeScript как основной язык разработки: строгая типизация, контракты данных и переиспользуемая компонентная архитектура.',
        'Основной production-стек: Vue 3 / Nuxt 3; есть опыт работы с актуальными React / Next.js под задачи продуктовой разработки.',
      ],
    },
    {
      title: 'Performance & Quality',
      items: [
        'Фокус на Core Web Vitals: LCP, INP, CLS, производительность рендеринга, критический путь загрузки и отзывчивость интерфейса.',
        'Тестирование и контроль качества: Vitest, Cypress, Playwright, снижение регрессий и предсказуемые релизы.',
      ],
    },
    {
      title: 'AI-Assisted Engineering',
      items: [
        'Использую Cursor и GitHub Copilot для генерации черновиков кода, unit/e2e тестов и технической документации.',
        'AI-assisted workflows помогают сокращать time-to-release без потери читаемости, типобезопасности и качества code review.',
      ],
    },
    {
      title: 'SSR / RSC',
      items: [
        'Понимание SSR, streaming, React Server Components, App Router и границ между server/client components.',
        'При проектировании интерфейсов учитываю SEO, TTFB, кэширование, гидратацию и runtime performance.',
      ],
    },
  ],
}
