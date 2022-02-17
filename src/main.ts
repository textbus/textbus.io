import { createApp } from 'vue'
import { reflectiveInjectorPlugin } from '@tanbo/vue-di-plugin'
import App from './App.vue'
import router from './router'

import 'normalize.css'
import './scss/index.scss'
import './assets/icomoon/style.css'
import '@textbus/editor/bundles/textbus.min.css'

createApp(App)
  .use(router)
  .use(reflectiveInjectorPlugin)
  .mount('#app')
