import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Weather from '../views/Weather.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Weather',
    component: Weather
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
