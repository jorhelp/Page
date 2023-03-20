import { createRouter, createWebHashHistory } from "vue-router"


const routes = [
    {
        name: 'home',
        path: '/',
        component: () => import('../pages/Default.vue')
    },
    {
        name: 'app-contents',
        path: '/app-contents',
        children: [
            {
                name: 'default',
                path: 'default',
                component: () => import('../pages/Default.vue')
            },
            {
                name: 'setting',
                path: 'setting',
                component: () => import('../pages/Setting.vue')
            },
        ]
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})


export default router