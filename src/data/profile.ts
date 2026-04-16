import type { DeveloperProfile } from '../types'

export const profileData: DeveloperProfile = {
  fullName: 'Vladimir Potemkin',
  firstName: 'Vladimir',
  role: 'Frontend Developer (TypeScript / Vue / React)',
  tagline: 'Building TypeScript-first product interfaces with a focus on performance and delivery quality.',
  summary:
    'Frontend developer with 2+ years of commercial experience building SPA/PWA interfaces with Vue 3 and TypeScript. Core focus areas include interface architecture, Core Web Vitals (LCP, INP, CLS), testing discipline, and reliable release workflows. I use Cursor and GitHub Copilot to accelerate code, test, and documentation generation, and I also work with modern React/Next.js and SSR/RSC patterns.',
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
      year: 'April 2025 - Present',
      title: 'Frontend Developer',
      company: 'AKON Technologies',
      description:
        'Improved SPA performance for internal products (LCP: 2.4s -> 1.3s; INP and CLS kept within target ranges), introduced a TypeScript-first component architecture, and reduced production regressions. Delivered monitoring, manual mitigation, and role-based access modules for SUMUZ at VimpelCom, and standardized release workflows with AI-assisted engineering practices.',
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
          name: 'SUMUZ for VimpelCom',
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
        'Built and evolved Vue 3 SPAs with a focus on UX and performance, reducing key page load time and improving client-side stability through modular architecture, TypeScript-first development, and component standardization.',
    },
    {
      year: 'May 2023 - October 2023',
      title: 'Frontend Developer',
      company: 'Easel Pix',
      description:
        'Developed web applications with JavaScript and Vue 3, delivered API integrations and responsive UI, and participated in the full release cycle together with designers and backend engineers.',
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
  languages: [
    { name: 'Russian', level: 'Native' },
    { name: 'English', level: 'B1' },
  ],
  cvSections: [
    {
      title: 'Core Delivery',
      items: [
        'TypeScript-first frontend development: strict typing, reusable UI contracts, and maintainable component architecture.',
        'Commercial delivery with Vue 3 / Nuxt 3; working experience with modern React / Next.js on product-facing tasks.',
      ],
    },
    {
      title: 'Performance & Quality',
      items: [
        'Core Web Vitals focus: LCP, INP, CLS, rendering performance, critical rendering path, and interaction responsiveness.',
        'Testing stack: Vitest, Cypress, Playwright; release discipline, regression control, and code review hygiene.',
      ],
    },
    {
      title: 'AI-Assisted Engineering',
      items: [
        'Use of Cursor and GitHub Copilot to generate code drafts, unit/e2e tests, and technical documentation.',
        'AI-assisted workflows used to shorten time-to-release without compromising readability, review quality, and type safety.',
      ],
    },
    {
      title: 'SSR / RSC',
      items: [
        'Understanding of SSR, streaming, React Server Components, App Router, and server/client boundaries.',
        'Design decisions made with SEO, TTFB, caching, hydration, and runtime performance in mind.',
      ],
    },
  ],
}
