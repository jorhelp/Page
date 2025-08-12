<template>
    <div class="bg">
        <div class="bg__item bg__item--1"></div>
        <div class="bg__item bg__item--2"></div>
    </div>
    <div class="fg">
        <!-- 固定可见区域 -->
        <div class="front-camera">
            <img class="front-camera__audio" src="/img/audio-wave.gif" alt="">
            <img class="front-camera__airpods" src="/img/airpods-pro.png" alt="">
        </div>
        <status-bar />
        <desktop class="desktop" />
        <dock class="dock" />
        <div class="slider-bar"></div>

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

    .front-camera {
        .absolute;
        z-index: 6666;
        width: 24%;
        height: 3.5%;
        background-color: black;
        border-radius: 500px;
        left: 38%;
        top: .8%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        @media screen and (min-width: 440px) {
            top: 1.5%;
        }

        .front-camera__audio {
            margin: 0 5%;
            border-radius: 50%;
            height: 80%;
            width: auto;
            filter: invert(100%);
        }
        .front-camera__airpods {
            margin: 0 5%;
            border-radius: 50%;
            height: 80%;
            width: auto;
        }
    }

    .msg {
        left: 3%;
        transform: translateY(@phone-border-radius * .9);
    }

    .dock {
        @media screen and (max-width: 440px) {
            //transform: translateY(@phone-border-radius * -0.1);
        }
    }

    .slider-bar {
        .absolute;
        z-index: 6666;
        width: 40%;
        height: @phone-border-radius * 0.1;
        background-color: var(--status-bar-color);
        border-radius: 100px;
        left: 30%;
        bottom: @phone-border-radius * 0.07;
        @media screen and (max-width: 440px) {
            //bottom: @phone-border-radius * 0.15;
        }
    }

}
</style>