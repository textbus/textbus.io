import 'reflect-metadata'
import { createApp } from '@viewfly/platform-browser'
import { RouterModule } from '@viewfly/router'
import { App } from './app'
import 'normalize.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './scss/index.scss'

createApp(<App/>).use(new RouterModule()).mount(document.body!)
