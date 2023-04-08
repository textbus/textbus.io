import { createApp } from 'vue'
import { reflectiveInjectorPlugin } from '@tanbo/vue-di-plugin'
import App from './App.vue'
import router from './router'

import 'normalize.css'
import './scss/index.scss'
import './assets/icomoon/style.css'

async function start() {
  if (!(Intl as any).Segmenter) {
    const polyfill = await import('intl-segmenter-polyfill/dist/bundled');
    (Intl as any).Segmenter = await polyfill.createIntlSegmenterPolyfill()
  }
  createApp(App)
    .use(router)
    .use(reflectiveInjectorPlugin)
    .mount('#app')
}

start()
