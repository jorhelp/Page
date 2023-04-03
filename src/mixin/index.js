import router from '../router'
import useAppStore from "../store/japp"


export function handleAppClick(app) {
    const appStore = useAppStore()
    const $app = document.getElementById(app.id)
    const $container = document.querySelector('.app__content__container')
    // 清除消息圆点
    app.msg = []
    // 是否去掉 msg 通知
    if (appStore.msgApp !== null && appStore.msgApp.id === app.id) {
        appStore.setMsgApp(null)
    }
    // 设置 transform-origin (app 相对于手机边框的位置)
    const appRect = $app.getBoundingClientRect()
    let _x = $app.offsetLeft + appRect.width / 2
    let _y = $app.offsetTop + appRect.height / 2
    if (app.position === appStore.position.dock) {
        const $parent = $app.offsetParent
        _x += $parent.offsetLeft
        _y += $parent.offsetTop
    } else {
        const $desktop = document.querySelector('.desktop')
        _y += $desktop.offsetTop
    }
    $container.style.transformOrigin = `${_x}px ${_y}px`
    // 开启 app 盒子
    appStore.toggleAppContent(true)
    // 颜色
    document.querySelector(':root').classList.add('invert')
    // 设置路由填充盒子 (先放个加载页面，等盒子完全撑开再放内容页面)
    router.replace({ name: 'loading' })
    setTimeout(() => router.replace(app.content), 500)
}

export function handleCloseClick() {
    const appStore = useAppStore()
    // 关闭 app 盒子
    appStore.toggleAppContent(false)
    // 颜色变回去
    document.querySelector(':root').classList.remove('invert')
    // 路由退回去
    setTimeout(() => {
        router.replace('/')
    }, 500)
}

export function handleMsgClick() {
    const appStore = useAppStore()
    handleAppClick(appStore.msgApp)
    appStore.setMsgApp(null)
}