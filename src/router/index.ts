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
        path: 'collab',
        component: () => import('../views/docs/start/collab.vue')
      },
      {
        path: 'school',
        component: () => import('../views/docs/school/videos.vue')
      },
      {
        path: 'examples',
        component: () => import('../views/docs/start/example.vue')
      },
      {
        path: 'component',
        component: () => import('../views/docs/component/start.vue')
      },
      {
        path: 'hooks',
        component: () => import('../views/docs/component/hooks.vue')
      },
      {
        path: 'slot',
        component: () => import('../views/docs/component/slot.vue')
      },
      {
        path: 'formatter',
        component: () => import('../views/docs/formatter/start.vue')
      },
      {
        path: 'plugin',
        component: () => import('../views/docs/plugin/start.vue')
      },
      {
        path: 'advance',
        component: () => import('../views/docs/advance/start.vue')
      }
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
    redirect: '/api/start',
    children: [
      {
        path: 'start',
        component: () => import('../views/api/core/start.vue')
      },
      {
        path: 'NativeRenderer',
        component: () => import('../views/api/core/NativeRenderer.vue')
      },
      {
        path: 'RootComponentRef',
        component: () => import('../views/api/core/RootComponentRef.vue')
      },
      {
        path: 'Commander',
        component: () => import('../views/api/core/Commander.vue')
      },
      {
        path: 'History',
        component: () => import('../views/api/core/History.vue')
      },
      {
        path: 'Keyboard',
        component: () => import('../views/api/core/Keyboard.vue')
      },
      {
        path: 'NativeRenderer',
        component: () => import('../views/api/core/NativeRenderer.vue')
      },
      {
        path: 'OutputRenderer',
        component: () => import('../views/api/core/OutputRenderer.vue')
      },
      {
        path: 'Query',
        component: () => import('../views/api/core/Query.vue')
      },
      {
        path: 'Registry',
        component: () => import('../views/api/core/Registry.vue')
      },
      {
        path: 'Renderer',
        component: () => import('../views/api/core/Renderer.vue')
      },
      {
        path: 'Selection',
        component: () => import('../views/api/core/Selection.vue')
      },
      {
        path: 'Translator',
        component: () => import('../views/api/core/Translator.vue')
      },
      {
        path: 'Starter',
        component: () => import('../views/api/core/Starter.vue')
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
