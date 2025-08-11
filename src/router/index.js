import { createRouter, createWebHistory } from "vue-router"


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
                name: 'loading',
                path: 'loading',
                component: () => import('../pages/AppLoading.vue')
            },
            {
                name: 'image',
                path: 'image',
                component: () => import('../pages/Image.vue')
            },
            {
                name: 'setting',
                path: 'setting',
                component: () => import('../pages/Setting.vue')
            },
            {
                name: 'wechat',
                path: 'wechat',
                component: () => import('../pages/WeChat.vue')
            },
            {
                name: 'zhifubao',
                path: 'zhifubao',
                component: () => import('../pages/ZhiFuBao.vue')
            },
            {
                name: 'blog',
                path: 'blog',
                component: () => import('../pages/Blog.vue')
            },
            {
                name: 'calculator',
                path: 'calculator',
                component: () => import('../pages/Calculator.vue')
            },
        ]
    }
]

const router = createRouter({
    // history: createWebHashHistory(),
    history: createWebHistory(),
    routes
})


export default router