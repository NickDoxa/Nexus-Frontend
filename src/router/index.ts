import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/LoginView.vue'
import HomeView from '@/views/HomeView.vue'
import DirectoryView from '@/views/DirectoryView.vue'
import SignupView from '@/views/SignupView.vue'
import AccountView from '@/views/AccountView.vue'
import CallbackView from '@/views/CallbackView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/directory',
      name: 'directory',
      component: DirectoryView
    },
    {
      path: '/account',
      name: 'account',
      component: AccountView
    },
    {
      path: '/callback',
      name: 'callback',
      component: CallbackView
    }
  ]
})

export default router
