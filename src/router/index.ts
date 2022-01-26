import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/body/home.vue'
import Docs from '../views/body/docs.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/docs',
    name: 'docs',
    component: Docs
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
