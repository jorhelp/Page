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
        ]
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})


export default router