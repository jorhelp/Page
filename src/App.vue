<template>
    <phone />
</template>


<script setup>
import Phone from './components/Phone.vue'
import { Drag, isMobile } from './utils'
import { onMounted, computed } from 'vue'
import useAppStore from './store/japp'
import useBarStore from './store/bar'


const isPC = computed(() => !isMobile())
const appStore = useAppStore()
const barStore = useBarStore()

onMounted(() => {
    const app1 = appStore.apps.find(app => app.name === '设置')
    if (isPC.value) {
        // 支持 3d 拖拽
        const appDrag = new Drag('#app', 'body')

        // show yourself
        const previousTransition = appDrag.$target.style.transition
        const delay = 2
        appDrag.$target.style.transition = `all ${delay}s`
        appDrag.rotate(-3000, -500)
        setTimeout(() => appDrag.rotate(3000, 500), 1000 * delay * 1)
        setTimeout(() => appDrag.$target.style.transition = previousTransition, 1000 * delay * 2)

        setTimeout(() => appDrag.run(), 1000 * delay * 2)  // 这里不是6，因为立即拖拽，不是延时后拖拽
        // msg
        setTimeout(() => {
            appStore.setMsgApp(app1)
            app1.msg.push('拖动空白区域可旋转机身')
        }, 1000 * delay * 1)
    } else {
        appStore.setMsgApp(app1)
        app1.msg.push('您已更新到 JOS 18.0!')
    }
    // statusBar
    setInterval(() => {
        if (barStore.battery > 0) barStore.setBattery(--barStore.battery)
        barStore.setCellular(Math.floor(Math.random() * 5))
    }, 3000)
})
</script>