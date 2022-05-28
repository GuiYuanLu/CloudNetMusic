import {
  createRouter,
  createWebHistory
} from 'vue-router'
import Home from '../views/Home.vue'

const routes = [{
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/itemMusic',
    name: 'ItemMusic',
    component: () => import('../views/ItemMusic')
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router