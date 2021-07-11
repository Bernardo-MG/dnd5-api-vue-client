import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Index from '../views/Index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'index',
    component: Index
  },
  {
    path: '/classes',
    name: 'classes',
    component: () => import(/* webpackChunkName: "index" */ '../views/Classes.vue')
  },
  {
    path: '/classes/:name',
    name: 'class_info',
    component: () => import(/* webpackChunkName: "index" */ '../views/ClassData.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
