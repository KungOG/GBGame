import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue')
    },
    {
      path: '/highscore',
      name: 'highscore',
      component: () => import('./views/Highscore.vue')
    },
    {
      path: '/rules',
      name: 'rules',
      component: () => import('./views/Rules.vue')
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import('./views/Settings.vue')
    },
    {
      path: '/menu',
      name: 'menu',
      component: () => import('./views/Menu.vue')
    }
  ]
})
