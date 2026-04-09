import { createRouter, createWebHistory } from 'vue-router'
import { i18n } from '../i18n'

const sectionTitleKeys = {
  '#about': 'nav.about',
  '#portfolio': 'nav.portfolio',
  '#contacts': 'nav.contacts',
} as const

const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: 'is-active',
  linkExactActiveClass: 'is-exact-active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
      meta: {
        title: 'nav.about',
        navLabel: 'nav.about',
        transition: 'route-fade',
      },
    },
    {
      path: '/portfolio',
      redirect: { path: '/', hash: '#portfolio' },
    },
    {
      path: '/contacts',
      redirect: { path: '/', hash: '#contacts' },
    },
  ],
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        top: 104,
        behavior: 'smooth',
      }
    }

    return { top: 0, behavior: 'smooth' }
  },
})

router.afterEach(to => {
  const titleKey =
    sectionTitleKeys[to.hash as keyof typeof sectionTitleKeys] ?? to.meta.title

  document.title = `${i18n.global.t(titleKey)} | ${i18n.global.t('document.title')}`
})

export default router
