import type { DeveloperProfile } from '../types'

export const profileData: DeveloperProfile = {
  fullName: 'Vladimir Potemkin',
  firstName: 'Vladimir',
  role: 'Frontend Developer (Vue / JavaScript / TypeScript)',
  tagline: 'Building complex product SPAs with Vue 3 and TypeScript.',
  summary:
    'Frontend developer focused on Vue 3 / TypeScript and complex product SPAs. My core profile is interfaces with dense business logic, server-driven data processing, many domain entities, and deep backend API integration. Strongest side is scalable frontend architecture: reusable components, unified recurring scenarios, FSD-based project structure, lower module coupling, and easier long-term codebase evolution. On the current project, I built an entity orchestrator that reduced wiring a new domain model into the UI to about 30 minutes.',
  experienceLabel: 'Commercial frontend development since May 2023',
  availability: {
    location: 'Moscow',
    citizenship: 'Russia',
    relocation: true,
    businessTrips: true,
    workModes: ['Office', 'Remote', 'Hybrid'],
    employmentTypes: ['Full-time', 'Part-time', 'Project-based'],
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
      year: 'April 2025 - Present',
      title: 'Frontend Developer',
      company: 'AKON Technologies',
      description:
        'Developing complex internal Vue 3 SPAs with role-based access, server-driven data processing, and backend API integrations. Built an entity orchestrator that reduced onboarding a new domain model in the UI to about 30 minutes, unified recurring scenarios via platform components, participated in the Vue 2 to Vue 3 migration, reduced coupling through FSD refactoring, and improved screen stability with lazy loading, caching, and state-management optimization.',
      projects: [
        {
          id: 'ipam',
          name: 'IPAM',
          description: 'Product for managing network infrastructure.',
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
          name: 'ERT for VimpelCom',
          description:
            'Interfaces for policies, blacklists, and logging workflows for VimpelCom.',
        },
        {
          id: 'sumuz',
          name: 'SUMUZ for VimpelCom',
          description:
            'Admin dashboard for monitoring and infrastructure control in an anti-DDoS system for VimpelCom.',
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
      year: 'October 2023 - April 2025',
      title: 'Frontend Developer',
      company: 'Commercial projects',
      description:
        'Built commercial Vue 3 interfaces with client-side logic, routing, and backend API integrations. Structured component architecture and user flows to reduce frontend fragmentation, implemented rebranding and new product scenarios including responsive UI, and optimized project structure and client code for easier support and further evolution.',
    },
    {
      year: 'May 2023 - October 2023',
      title: 'Frontend Developer',
      company: 'Easel Pix',
      description:
        'Developed Vue 3 interfaces with client-side logic, routing, and REST API integrations. Delivered new functionality and rebranding tasks, optimized interface loading across images, fonts, and client state, and helped integrate a payment flow with the backend team.',
    },
  ],
  education: [
    {
      institution: 'Moscow Financial-Industrial University "Synergy"',
      degree: "Bachelor's Degree",
      field: 'Hotel and Restaurant Business',
      year: 2015,
      location: 'Moscow',
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
      title: 'HTML and CSS. Responsive Layout and Automation',
      year: 2020,
    },
  ],
  languages: [
    { name: 'Russian', level: 'Native' },
    { name: 'English', level: 'B2' },
  ],
  cvSections: [
    {
      title: 'Product SPA Delivery',
      items: [
        'Complex product SPAs with dense business logic, many entities, and backend API integrations.',
        'Internal interfaces and admin panels with role-based access and server-driven workflows.',
      ],
    },
    {
      title: 'Scalable Frontend Architecture',
      items: [
        'Reusable components, unified recurring UI scenarios, and architecture built around FSD principles.',
        'Reduced module coupling and a codebase structure that is easier to scale and maintain over time.',
      ],
    },
    {
      title: 'Platform Approach',
      items: [
        'Built an entity orchestrator that reduced wiring a new domain model into the UI to about 30 minutes.',
        'Standardized typical entity flows through platform components and shared mechanics.',
      ],
    },
    {
      title: 'Engineering Discipline',
      items: [
        'Participated in Vue 2 to Vue 3 migration, keeping client logic and baseline UI mechanics aligned with updated architecture.',
        'Daily engineering contour: Vite, ESLint, Prettier, code review, lazy loading, caching, and state-management optimization.',
      ],
    },
  ],
}
