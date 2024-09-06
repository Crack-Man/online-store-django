import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Store',
    component: import('@/views/StoreView.vue')
  },

  {
    path: '/item/:id',
    name: 'Item',
    component: () => import('@/views/ItemView.vue')
  },

  {
    path: '/login',
    name: 'Log In',
    component: () => import('@/views/LoginView.vue')
  },

  {
    path: '/register',
    name: 'Register',
    component: () => import('@/views/RegView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
