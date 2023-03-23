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
    path: '/playground',
    component: () => import('../views/playground/playground.vue')
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
      {
        path: 'upgrade',
        component: () => import('../views/docs/other/upgrade.vue')
      },
      {
        path: 'questions',
        component: () => import('../views/docs/other/questions.vue')
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
    redirect: '/api/slot',
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
        path: 'component',
        component: () => import('../views/api/model/component.vue')
      },
      {
        path: 'commander',
        component: () => import('../views/api/modules/core/commander.vue')
      },
      {
        path: 'controller',
        component: () => import('../views/api/modules/core/controller.vue')
      },
      {
        path: 'history',
        component: () => import('../views/api/modules/core/history.vue')
      },
      {
        path: 'keyboard',
        component: () => import('../views/api/modules/core/keyboard.vue')
      },
      {
        path: 'output-renderer',
        component: () => import('../views/api/modules/core/output-renderer.vue')
      },
      {
        path: 'query',
        component: () => import('../views/api/modules/core/query.vue')
      },
      {
        path: 'registry',
        component: () => import('../views/api/modules/core/registry.vue')
      },
      {
        path: 'renderer',
        component: () => import('../views/api/modules/core/renderer.vue')
      },
      {
        path: 'scheduler',
        component: () => import('../views/api/modules/core/scheduler.vue')
      },
      {
        path: 'selection',
        component: () => import('../views/api/modules/core/selection.vue')
      },
      {
        path: 'starter',
        component: () => import('../views/api/modules/core/starter.vue')
      },
      {
        path: 'collaborate-cursor',
        component: () => import('../views/api/modules/platform-browser/collaborate-cursor.vue')
      },
      {
        path: 'dom-renderer',
        component: () => import('../views/api/modules/platform-browser/dom-renderer.vue')
      },
      {
        path: 'input',
        component: () => import('../views/api/modules/platform-browser/input.vue')
      },
      {
        path: 'output-translator',
        component: () => import('../views/api/modules/platform-browser/output-translator.vue')
      },
      {
        path: 'parser',
        component: () => import('../views/api/modules/platform-browser/parser.vue')
      },
      {
        path: 'selection-bridge',
        component: () => import('../views/api/modules/platform-browser/selection-bridge.vue')
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
  routes,
})

router.afterEach((to, from) => {
  if (to.path !== from.path) {
    document.documentElement.scrollTo({
      top: 0
    })
  }
})

export default router
