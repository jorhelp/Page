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
const iconBaseUrl = '/img/app-icons/'
const APP_SIZE = {
    normal: '',
    _2x2: 'app--2x2',
    _2x4: 'app--2x4',
}
const APP_TYPE = {
    normal: 'normal',
    cascade: 'cascade',    // 层叠样式
}


class JApp {
    constructor(options) {
        this.id = nanoid(6)
        this.name = options.name || ''
        this.icon = options.icon
        this.size = options.size || APP_SIZE.normal
        this.msg = options.msg || []
        this.position = options.position
        this.content = options.content || {name: 'default'}
        this.type = options.type || APP_TYPE.normal
    }
}

const apps = [
    new JApp({
        name: 'FaceTime通话',
        icon: iconBaseUrl + 'facetime.svg',
        position: POSITION.b1
    }),
    new JApp({
        name: '照片',
        icon: iconBaseUrl + 'photos.svg',
        position: POSITION.b1,
        msg: ['有新的照片'],
        content: {name: 'image'}
    }),
    new JApp({
        name: '相机',
        icon: iconBaseUrl + 'camera.svg',
        position: POSITION.b1
    }),
    new JApp({
        name: '邮件',
        icon: iconBaseUrl + 'mail.svg',
        position: POSITION.b1
    }),
    new JApp({
        name: '照片组件',
        icon: [iconBaseUrl + 'photo-2.gif', iconBaseUrl + 'photo-3.gif'],
        size: APP_SIZE._2x2,
        type: APP_TYPE.cascade,
        position: POSITION.b1
    }),
    new JApp({
        name: '天气',
        icon: iconBaseUrl + 'weather.svg',
        position: POSITION.b1
    }),
    new JApp({
        name: '提醒事项',
        icon: iconBaseUrl + 'reminders.svg',
        position: POSITION.b1
    }),
    new JApp({
        name: '备忘录',
        icon: iconBaseUrl + 'notes.svg',
        position: POSITION.b1
    }),
    new JApp({
        name: '股票',
        icon: iconBaseUrl + 'stocks.svg',
        position: POSITION.b1
    }),
    new JApp({
        name: '阅读',
        icon: iconBaseUrl + 'books.svg',
        position: POSITION.b1
    }),
    new JApp({
        name: 'AppStore',
        icon: iconBaseUrl + 'app-store.svg',
        position: POSITION.b1
    }),
    new JApp({
        name: '日历组件',
        icon: null,
        size: APP_SIZE._2x2,
        position: POSITION.b1
    }),
    new JApp({
        name: '博客',
        icon: iconBaseUrl + 'podcasts.svg',
        position: POSITION.b1,
        msg: ['新的博客'],
        content: {name: 'blog'}
    }),
    new JApp({
        name: '健康',
        icon: iconBaseUrl + 'health.svg',
        position: POSITION.b1
    }),
    new JApp({
        name: '计算器',
        icon: iconBaseUrl + 'calculator.svg',
        position: POSITION.b1,
        content: {name: 'calculator'}
    }),
    new JApp({
        name: '时间',
        icon: iconBaseUrl + 'clock.svg',
        position: POSITION.b1,
    }),

    // b2
    new JApp({
        name: '运动组件',
        icon: iconBaseUrl + 'sport.webp',
        size: APP_SIZE._2x4,
        position: POSITION.b2
    }),
    new JApp({
        name: 'QQ',
        icon: iconBaseUrl + 'QQ.svg',
        position: POSITION.b2
    }),
    new JApp({
        name: 'AppleTV',
        icon: iconBaseUrl + 'apple-tv.svg',
        position: POSITION.b2
    }),
    new JApp({
        name: '文件',
        icon: iconBaseUrl + 'files.svg',
        position: POSITION.b2
    }),
    new JApp({
        name: '查找',
        icon: iconBaseUrl + 'find-my.svg',
        position: POSITION.b2
    }),
    new JApp({
        name: '家庭',
        icon: iconBaseUrl + 'home.svg',
        position: POSITION.b2
    }),
    new JApp({
        name: '快捷指令',
        icon: iconBaseUrl + 'my-shortcuts.svg',
        position: POSITION.b2
    }),
    new JApp({
        name: 'Safari',
        icon: iconBaseUrl + 'safari.svg',
        position: POSITION.b2
    }),
    new JApp({
        name: '钱包',
        icon: iconBaseUrl + 'wallet.svg',
        position: POSITION.b2
    }),
    new JApp({
        name: '联系人',
        icon: iconBaseUrl + 'contacts.svg',
        position: POSITION.b2
    }),
    new JApp({
        name: '信息',
        icon: iconBaseUrl + 'ios-message.svg',
        position: POSITION.b2
    }),
    new JApp({
        name: '测量',
        icon: iconBaseUrl + 'measure.svg',
        position: POSITION.b2
    }),
    new JApp({
        name: '翻译',
        icon: iconBaseUrl + 'translate.svg',
        position: POSITION.b2
    }),
    new JApp({
        name: '录音',
        icon: iconBaseUrl + 'voice-memos.svg',
        position: POSITION.b2
    }),

    // dock
    new JApp({
        name: '设置',
        icon: iconBaseUrl + 'settings.svg',
        position: POSITION.dock,
        msg: ['test'],
        content: {name: 'setting'}
    }),
    new JApp({
        name: '微信',
        icon: iconBaseUrl + 'wechat.svg',
        position: POSITION.dock,
        msg: ['hi'],
        content: {name: 'wechat'}
    }),
    new JApp({
        name: '支付宝',
        icon: iconBaseUrl + 'zhifubao.svg',
        position: POSITION.dock,
        msg: ['hello'],
        content: {name: 'zhifubao'}
    }),
    new JApp({
        name: '音乐',
        icon: iconBaseUrl + 'apple-music.svg',
        position: POSITION.dock
    }),
]

const useAppStore = defineStore('app', {
    state: () => ({
        position: POSITION,
        apps,
        isAppContentShow: false,
        msgApp: null,
    }),
    actions: {
        toggleAppContent(val = undefined) {
            if (val) this.isAppContentShow = val
            else this.isAppContentShow = !this.isAppContentShow
        },
        setMsgApp(app) {
            this.msgApp = app
        },
    },
    getters: {
        appWithMsg: state => state.apps.filter(app => app.msg.length !== 0),
        isMsgShow: state => state.msgApp !== null,
    }
})


export default useAppStore