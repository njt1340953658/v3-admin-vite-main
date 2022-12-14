import { createApp } from 'vue'
import type { Directive } from 'vue'
import store from './store'
import router from './router'
import '@/router/RouterLogic'
import App from './App.vue'

import ElementPlus from 'element-plus'
import loadSvg from '@/components/icons'
import * as directives from '@/directives'

import 'normalize.css'
import '@/styles/index.scss'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'

const app = createApp(App)

app.use(ElementPlus)

app.use(loadSvg)

Object.keys(directives).forEach((key) => {
  app.directive(key, (directives as { [key: string]: Directive })[key])
})

app.use(store).use(router).mount('#app')
