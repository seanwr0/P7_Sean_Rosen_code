import { createRouter, createWebHashHistory } from 'vue-router'
import signIn from '../views/signIn'

const routes = [
  {
    path: '/',
    name: 'signIn',
    component: signIn
  },
  {
    path: '/signUp',
    name: 'signUp',
    component: () => import( '../views/signUp')
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import( '../views/userProfile')
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
