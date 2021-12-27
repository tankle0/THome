import { createRouter, RouteRecordRaw, createWebHistory } from "vue-router"
import Home from '@/views/home/index.vue'

const asyncRoutes:Array<RouteRecordRaw> = [
  {
    path:'/',
    name: 'dashboard',
    redirect:'/dashboard',
    component:Home,
    children:[
      {
        path:'dashboard',
        component: () => import("@/views/dashboard/index.vue")
      }
    ]
  },
  {
    path:'/books',
    name: 'books',
    component:Home,
    children:[
      {
        path:'',
        component: () => import("@/views/books/index.vue")
      }
    ]
  }
]

const routes:Array<RouteRecordRaw> = [
  {
    path:'/login',
    name:'login',
    component: () => import("@/views/login/index.vue")
  },
  ...asyncRoutes,
  {
    path:'/:pathMatch(.*)*',
    name:'404',
    component: () => import("@/views/404/index.vue")
  }
]

const router = createRouter({
  history:createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router