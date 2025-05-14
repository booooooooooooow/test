//路由
import {createRouter,createWebHistory}from 'vue-router'
import ProductDetail from '@/views/ProductDetail.vue'
import ZhuYe from '@/views/ZhuYe.vue'

const routes = [
  {
        path:'/',
        name: 'ZhuYe',
        component: ZhuYe,
        meta: { requiresAuth: true }
    },
    {
        path:'/product',
        name: 'ProductDetail',
        component: ProductDetail,
        meta: { requiresAuth: true }
    }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router