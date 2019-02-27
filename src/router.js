import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase'

Vue.use(Router)

const router = new Router({
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
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('./views/Signup.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  var requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  var currentUser = firebase.auth().currentUser;

  if (requiresAuth && !currentUser) {
      next('/login');
  } else if (to.path == '/login' && currentUser) {
      next('/');

  } else {
      next();
  }

});

export default router;