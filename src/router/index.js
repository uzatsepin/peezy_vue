import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '@/store/store.js'

const checkAuth = (to, from, next) => {
    const userStore = useUserStore()

    if (!userStore.isAuth) {
        next({ name: 'auth' })
    } else {
        next()
    }
}

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('@/views/HomeView.vue')
        },
        {
            path: '/auth',
            name: 'auth',
            component: () => import('@/views/AuthView.vue'),
        },
        {
            path: '/admin',
            name: 'admin',
            component: () => import('@/views/AdminView.vue'),
            beforeEnter: checkAuth
        }
    ]
})

export default router
