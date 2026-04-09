import type { DeveloperProfile } from '../types'

export const profileData: DeveloperProfile = {
  fullName: 'Vladimir Potemkin',
  firstName: 'Vladimir',
  role: 'Frontend Developer',
  tagline: 'Building scalable interfaces and internal products with Vue.',
  summary:
    'I am a frontend developer with commercial experience in Vue 3 and the Vue ecosystem. I design interfaces, build client-side logic, integrate APIs, and develop responsive UI platforms. My work is grounded in SOLID, DRY, KISS, BEM, and FSD principles.',
  experienceLabel: '2+ years of commercial web development',
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
      year: 'April 2025 - Present',
      title: 'Frontend Developer',
      company: 'AKON Technologies',
      description:
        'Developing large-scale client web applications with Vue 3, Pinia, Vue Router, and Vite. In the SUMUZ project for VimpelCom, I build and evolve an admin SPA for anti-DDoS services: monitoring modules, manual mitigation workflows, role-based access, and internal API integrations.',
      projects: [
        {
          id: 'ipam',
          name: 'IPAM',
          description: 'Address space management interfaces for customers, networks, and service settings.',
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
        },
        {
          id: 'sumuz',
          name: 'С.У.М.У.З. for VimpelCom',
          description: 'Administrative SPA for anti-DDoS services: monitoring, manual mitigation, route workflows, and role-based access.',
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
      year: 'May 2024 - April 2025',
      title: 'Frontend Developer',
      company: 'Company not specified in PDF',
      description:
        'Built websites and web applications with Vue 3, Vuex, Vue Router, and Vite. Delivered rebranding updates, responsive layouts, UX logic, and API integrations.',
    },
    {
      year: 'May 2023 - October 2023',
      title: 'Frontend Developer',
      company: 'Easel Pix',
      description:
        'Developed websites and web applications with JavaScript and Vue 3, integrated components and APIs, optimized client code, and released updates with designers and backend engineers.',
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
  courses: [
    {
      year: 2020,
      provider: 'BrainsCloud',
      title: 'HTML+CSS',
    },
    {
      year: 2020,
      provider: 'HTML Academy',
      title: 'HTML and CSS. Responsive Layout and Automation',
    },
  ],
  languages: [
    { name: 'Russian', level: 'Native' },
    { name: 'English', level: 'B1' },
  ],
  cvSections: [
    {
      title: 'Development Approach',
      items: [
        'Interface and client-side logic design',
        'Backend API integration and state management',
        'UI platform development and reusable components',
        'Vite, ESLint, Prettier setup and team workflows',
      ],
    },
    {
      title: 'Technical Focus',
      items: [
        'Vue 3, Pinia, Vue Router, Vite',
        'TypeScript, JavaScript, Axios',
        'SUMUZ: Vuetify, vue-i18n, Chart.js/ApexCharts, role-based routing',
        'Tailwind, SCSS, responsive layout',
        'SOLID, DRY, KISS, BEM, FSD',
      ],
    },
    {
      title: 'Work Preferences',
      items: ['Moscow', 'Remote, hybrid, office', 'Open to business trips', 'Full-time, part-time, project-based'],
    },
  ],
}
