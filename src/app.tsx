import { Navigator, RouterOutlet } from '@viewfly/router'
import { withScopedCSS } from '@viewfly/scoped-css'
import { inject, onUnmounted } from '@viewfly/core'

import './assets/doc.scss'
import css from './app.scoped.scss'
import { Home } from './pages/home/home'
import { Header } from './components/header/header'
import { Footer } from './components/footer/footer'

export function App() {
  const navigator = inject(Navigator)
  const sub = navigator.onUrlChanged.subscribe(() => {
    document.body.scrollTop = document.documentElement.scrollTop = 0
  })
  onUnmounted(() => {
    sub.unsubscribe()
  })
  return withScopedCSS(css, () => {
    return (
      <main>
        <Header/>
        <div class="page">
          <RouterOutlet config={[
            {
              name: '',
              component: Home
            },
            {
              name: 'guide',
              asyncComponent: () => import('./pages/guide/guide').then(m => m.Guide)
            },
            {
              name: 'api',
              asyncComponent: () => import('./pages/api/api').then(m => m.Api)
            },
            {
              name: 'playground',
              asyncComponent: () => import('./pages/collab/collab').then(m => m.Collab)
            }
          ]}/>
        </div>
        <Footer/>
      </main>
    )
  })
}
