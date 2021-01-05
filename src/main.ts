import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import mitt from 'mitt'

declare global {
  interface Window {eventBus: any}
}

window.eventBus = mitt()

import '@/assets/css/tailwind.css'

createApp(App)
  .use(router)
  .mount('#app')
