<template>
    <div class="bg">
        <div class="bg__item bg__item--1"></div>
        <div class="bg__item bg__item--2"></div>
    </div>
    <div class="fg">
        <!-- 三个固定可见区域 -->
        <status-bar />
        <desktop class="desktop" />
        <dock />

        <!-- 其他动态区域 -->
        <transition name="zoom">
            <app-content v-show="appStore.isAppContentShow" />
        </transition>

        <msg class="msg" />
    </div>
</template>


<script setup>
import StatusBar from './StatusBar.vue'
import Desktop from './Desktop.vue'
import Dock from './Dock.vue'
import AppContent from './AppContent.vue'
import Msg from './Msg.vue'
import useAppStore from '../store/japp'


const appStore = useAppStore()
</script>


<style lang="less" scoped>
@keyframes phone__bg-animation1 {
    from {
        top: -15%;
        left: 10%;
        transform: rotateZ(20deg);
    }

    to {
        top: 20%;
        left: 20%;
        transform: rotateZ(100deg);
    }
}

@keyframes phone__bg-animation2 {
    from {
        top: 20%;
        left: 10%;
        transform: rotateZ(20deg);
    }

    to {
        top: 50%;
        left: 20%;
        transform: rotateZ(-100deg);
    }
}

.bg {
    .absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    background: var(--bg-color);
    overflow: hidden;

    .bg__item {
        .absolute;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        transform-origin: center center;
        filter: blur(5rem);

        &.bg__item--1 {
            background: var(--bg__item-color1);
            animation: phone__bg-animation1 5s ease-in-out alternate infinite;
        }

        &.bg__item--2 {
            background: var(--bg__item-color2);
            animation: phone__bg-animation2 8s alternate infinite;
        }
    }
}

.fg {
    .absolute;
    width: 100%;
    height: 100%;
    background: transparent;
    z-index: 6;
    display: grid;
    font-size: 1rem;
    grid-template-rows: @phone-border-radius 1fr calc(var(--app-width) * 1.2);

    .msg {
        left: 3%;
        transform: translateY(@phone-border-radius * .9);
    }
}
</style>