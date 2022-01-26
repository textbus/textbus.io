import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/body/home.vue'
import Docs from '../views/body/docs.vue'

export enum RoutePath {
  HOME = '/',
  DOCS = '/docs'
}

const routes: Array<RouteRecordRaw> = [
  {
    path: RoutePath.HOME,
    name: 'home',
    component: Home
  },
  {
    path: RoutePath.DOCS,
    name: 'docs',
    component: Docs
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
