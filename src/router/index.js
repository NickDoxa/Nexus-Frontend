import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/LoginView.vue'
import HomeView from '@/views/HomeView.vue'
import DirectoryView from '@/views/DirectoryView.vue'
import SignupView from '@/views/SignupView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/directory',
      name: 'directory',
      component: DirectoryView
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignupView
    }
  ]
})

export default router
