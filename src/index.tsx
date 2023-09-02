import 'reflect-metadata'
import { createApp } from '@viewfly/platform-browser'
import { RootRouter } from '@viewfly/router'
import { App } from './app'
import 'normalize.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './scss/index.scss'

createApp(<RootRouter><App/></RootRouter>).mount(document.body!)
