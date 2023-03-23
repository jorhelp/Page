import { defineStore } from 'pinia'
import { nanoid } from 'nanoid'


const POSITION = {
    b1: 'body1',
    b2: 'body2',
    b3: 'body3',
    b4: 'body4',
    b5: 'body5',
    dock: 'dock',
}
const iconBaseUrl = '/img/'

class JApp {
    constructor(options) {
        this.id = nanoid(6)
        this.name = options.name || ''
        this.icon = options.icon
        this.size = options.size || ''
        this.msg = options.msg || []
        this.position = options.position
        this.content = options.content || {name: 'default'}
    }
}

const apps = [
    new JApp({
        name: 'FaceTime通话',
        icon: iconBaseUrl + 'facetime-192x192-1575950.png',
        position: POSITION.b1
    }),
    new JApp({
        name: '照片',
        icon: iconBaseUrl + 'photos-128x128-2365244.png',
        position: POSITION.b1,
        msg: ['test'],
        content: {name: 'image'}
    }),
    new JApp({
        name: '相机',
        icon: iconBaseUrl + 'camera-192x192-2365232.png',
        position: POSITION.b1
    }),
    new JApp({
        name: '邮件',
        icon: iconBaseUrl + 'mail-192x192-2365225.png',
        position: POSITION.b1
    }),
    new JApp({
        name: '小组件',
        icon: iconBaseUrl + 'photo-2.gif',
        size: 'app--2x2',
        position: POSITION.b1
    }),
    new JApp({
        name: '天气',
        icon: iconBaseUrl + 'weather-192x192-2365236.png',
        position: POSITION.b1
    }),
    new JApp({
        name: '提醒事项',
        icon: iconBaseUrl + 'reminders-192x192-2365242.png',
        position: POSITION.b1
    }),
    new JApp({
        name: '备忘录',
        icon: iconBaseUrl + 'notes-192x192-2365245.png',
        position: POSITION.b1
    }),
    new JApp({
        name: '股票',
        icon: iconBaseUrl + 'stocks-192x192-2365239.png',
        position: POSITION.b1
    }),
    new JApp({
        name: '阅读',
        icon: iconBaseUrl + 'books-192x192-2365234.png',
        position: POSITION.b1
    }),
    new JApp({
        name: 'AppStore',
        icon: iconBaseUrl + 'app-store-192x192-2365235.png',
        position: POSITION.b1
    }),
    new JApp({
        name: '小组件',
        icon: iconBaseUrl + 'photo-3.gif',
        size: 'app--2x2',
        position: POSITION.b1
    }),
    new JApp({
        name: '博客',
        icon: iconBaseUrl + 'podcasts-192x192-2365243.png',
        position: POSITION.b1,
    }),
    new JApp({
        name: '健康',
        icon: iconBaseUrl + 'health-192x192-2365228.png',
        position: POSITION.b1
    }),

    // b2
    new JApp({
        name: 'QQ',
        icon: iconBaseUrl + 'qq.png',
        position: POSITION.b2
    }),
    new JApp({
        name: 'AppleTV',
        icon: iconBaseUrl + 'apple-tv-128x128-1575940.png',
        position: POSITION.b2
    }),
    new JApp({
        name: '文件',
        icon: iconBaseUrl + 'files-128x128-2365229.png',
        position: POSITION.b2
    }),
    new JApp({
        name: '查找',
        icon: iconBaseUrl + 'find-my-128x128-1575949.png',
        position: POSITION.b2
    }),
    new JApp({
        name: '家庭',
        icon: iconBaseUrl + 'home-128x128-2365227.png',
        position: POSITION.b2
    }),
    new JApp({
        name: '快捷指令',
        icon: iconBaseUrl + 'my-shortcuts-128x128-1575945.png',
        position: POSITION.b2
    }),
    new JApp({
        name: 'Safari',
        icon: iconBaseUrl + 'safari-128x128-2365241.png',
        position: POSITION.b2
    }),
    new JApp({
        name: '钱包',
        icon: iconBaseUrl + 'wallet-128x128-2365237.png',
        position: POSITION.b2
    }),
    new JApp({
        name: '小组件',
        icon: iconBaseUrl + 'photo-1.gif',
        size: 'app--2x4',
        position: POSITION.b2
    }),

    // dock
    new JApp({
        name: '设置',
        icon: iconBaseUrl + 'settings-192x192-2365240.png',
        position: POSITION.dock,
        msg: ['test'],
        content: {name: 'setting'}
    }),
    new JApp({
        name: '微信',
        icon: iconBaseUrl + 'wechat.png',
        position: POSITION.dock,
        msg: ['hi'],
        content: {name: 'wechat'}
    }),
    new JApp({
        name: '支付宝',
        icon: iconBaseUrl + 'zhifubao.png',
        position: POSITION.dock,
        msg: ['hello'],
        content: {name: 'zhifubao'}
    }),
    new JApp({
        name: '音乐',
        icon: iconBaseUrl + 'apple-music-128x128-2365226.png',
        position: POSITION.dock
    }),
]

const useAppStore = defineStore('app', {
    state: () => ({
        position: POSITION,
        apps,
        isAppContentShow: false,
    }),
    actions: {
        toggleAppContent(val = undefined) {
            if (val) this.isAppContentShow = val
            else this.isAppContentShow = !this.isAppContentShow
        },
    },
    getters: {
        appWithMsg: state => state.apps.filter(app => app.msg.length !== 0)
    }
})


export default useAppStore