import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/collab',
    component: () => import('../views/collab/collab.vue')
  },
  {
    path: '/docs',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/docs/docs.vue'),
    redirect: '/docs/start',
    children: [
      {
        path: 'start',
        component: () => import('../views/docs/start/start.vue')
      },
      {
        path: 'config',
        component: () => import('../views/docs/start/config.vue')
      },
      {
        path: 'members',
        component: () => import('../views/docs/start/members.vue')
      },
      {
        path: 'examples',
        component: () => import('../views/docs/start/example.vue')
      },
      {
        path: 'school',
        component: () => import('../views/docs/guide/videos.vue')
      },
      {
        path: 'guide',
        component: () => import('../views/docs/guide/start.vue')
      },
      {
        path: 'component',
        component: () => import('../views/docs/guide/component.vue')
      },
      {
        path: 'hooks',
        component: () => import('../views/docs/guide/hooks.vue')
      },
      {
        path: 'slot',
        component: () => import('../views/docs/guide/slot.vue')
      },
      {
        path: 'plugin',
        component: () => import('../views/docs/guide/plugin.vue')
      },
      {
        path: 'advance',
        component: () => import('../views/docs/advance/start.vue')
      },
      {
        path: 'collab',
        component: () => import('../views/docs/advance/collab.vue')
      },
    ]
  },
  {
    path: '/v1',
    component: () => import('../views/docs-v1/docs.vue'),
    redirect: '/v1/start',
    children: [
      {
        path: 'start',
        component: () => import('../views/docs-v1/components/start.vue')
      },
      {
        path: 'upload',
        component: () => import('../views/docs-v1/components/upload.vue')
      },
      {
        path: 'examples',
        component: () => import('../views/docs-v1/components/examples.vue')
      },
      {
        path: 'design',
        component: () => import('../views/docs-v1/components/design.vue')
      },
      {
        path: 'tutorial',
        component: () => import('../views/docs-v1/components/tutorial.vue')
      },
      {
        path: 'component',
        component: () => import('../views/docs-v1/components/component.vue')
      },
      {
        path: 'formatter',
        component: () => import('../views/docs-v1/components/formatter.vue')
      },
      {
        path: 'plugin',
        component: () => import('../views/docs-v1/components/plugin.vue')
      },
      {
        path: 'tool',
        component: () => import('../views/docs-v1/components/tool.vue')
      },
      {
        path: 'api',
        component: () => import('../views/docs-v1/components/api.vue')
      }
    ]
  },
  {
    path: '/api',
    component: () => import('../views/api/api.vue'),
    redirect: '/api/formatter',
    children: [
      {
        path: 'slot',
        component: () => import('../views/api/model/slot.vue')
      },
      {
        path: 'slots',
        component: () => import('../views/api/model/slots.vue')
      },
      {
        path: 'formatter',
        component: () => import('../views/api/model/formatter.vue')
      },
      {
        path: 'component',
        component: () => import('../views/api/model/component.vue')
      },
      {
        path: 'hooks',
        component: () => import('../views/api/model/hooks.vue')
      },
      {
        path: 'core',
        component: () => import('../views/api/modules/core.vue')
      },
      {
        path: 'browser',
        component: () => import('../views/api/modules/browser.vue')
      },
      {
        path: 'editor',
        component: () => import('../views/api/modules/editor.vue')
      },
      {
        path: 'collaborate',
        component: () => import('../views/api/modules/collaborate.vue')
      }
    ]
  },
  {
    path: '/auth',
    component: () => import('../views/auth/auth.vue')
  },
  {
    path: '/sponsor',
    component: () => import('../views/sponsor/sponsor.vue')
  },
  {
    path: '/about',
    component: () => import('../views/404.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
