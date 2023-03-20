<template>
    <div class="phone">
        <div class="absolute phone__screen">
            <phone-screen></phone-screen>
        </div>
        <div v-if="isPC" class="absolute phone__back">
            <phone-back></phone-back>
        </div>
        <div v-if="isPC" class="absolute phone__side phone__side--left">
            <phone-side-left></phone-side-left>
        </div>
        <div v-if="isPC" class="absolute phone__side phone__side--right">
            <phone-side-right></phone-side-right>
        </div>
        <div v-if="isPC" class="absolute phone__side phone__side--top">
            <phone-side-top></phone-side-top>
        </div>
        <div v-if="isPC" class="absolute phone__side phone__side--bottom">
            <phone-side-bottom></phone-side-bottom>
        </div>
    </div>
</template>


<script setup>
import PhoneSideLeft from './components/PhoneSideLeft.vue'
import PhoneSideRight from './components/PhoneSideRight.vue'
import PhoneSideTop from './components/PhoneSideTop.vue'
import PhoneSideBottom from './components/PhoneSideBottom.vue'
import PhoneBack from './components/PhoneBack.vue'
import PhoneScreen from './components/PhoneScreen.vue'
import { onMounted, computed } from 'vue'
import { Drag, isMobile, drawArc } from './utils'


const isPC = computed(() => !isMobile())
console.log(isPC.value)


onMounted(() => {
    // padding
    if (isPC.value) {
        const commonOption = {
            $father: document.querySelector('.phone'),
            radius: 'var(--phone-border-radius)',
            height: 'var(--phone-thick)',
            color: '#fefefe',
            count: 50,
            deg: 90,
        }
        drawArc({
            ...commonOption,
            classList: ['absolute', 'phone__padding--1']
        })
        drawArc({
            ...commonOption,
            classList: ['absolute', 'phone__padding--2']
        })
        drawArc({
            ...commonOption,
            classList: ['absolute', 'phone__padding--3']
        })
        drawArc({
            ...commonOption,
            classList: ['absolute', 'phone__padding--4']
        })

        // 支持 3d 拖拽
        const appDrag = new Drag('#app', 'body')

        // show yourself
        const previousTransition = appDrag.$target.style.transition
        const delay = 2
        appDrag.$target.style.transition = `all ${delay}s`
        appDrag.rotate(-2000, -1000)
        setTimeout(() => appDrag.rotate(2000, -1000), 1000 * delay * 1)
        setTimeout(() => appDrag.rotate(3000, 1800), 1000 * delay * 2)
        setTimeout(() => appDrag.rotate(4000, 200), 1000 * delay * 3)
        setTimeout(() => appDrag.rotate(6000, 0), 1000 * delay * 4)
        setTimeout(() => appDrag.$target.style.transition = previousTransition, 1000 * delay * 5)

        setTimeout(() => appDrag.run(), 1000 * delay * 5)  // 这里不是6，因为立即拖拽，不是延时后拖拽
    }
})
</script>


<style lang="less">
.phone {
    width: 100vw;
    height: 100vh;
    transform-style: preserve-3d;

    .phone__screen,
    .phone__back {
        height: 100%;
        width: 100%;
        box-sizing: border-box;
        border-radius: 0;
        border: none;
        z-index: -666;
    }

    @media screen and (min-width: 440px) {
        width: @phone-width;
        height: @phone-height;

        .phone__screen,
        .phone__back {
            overflow: hidden;
            border-radius: @phone-border-radius;
        }

        .phone__screen {
            border: @phone-border-screen;
            // filter: brightness(1);
        }

        .phone__back {
            border: @phone-border-back;
            background-color: #f8f8f8;
        }
    }

    .phone__back {
        transform: translateZ(@phone-thick * -1);
    }

    .phone__side {
        transform-origin: 0 0;
    }

    .phone__side--top,
    .phone__side--bottom {
        height: @phone-thick;
        width: @phone-width - @phone-border-radius * 1.9;
        background-image: linear-gradient(to right,
                #fff,
                #F5F5F5,
                #fff);
    }

    .phone__side--left,
    .phone__side--right {
        width: @phone-thick;
        height: @phone-height - @phone-border-radius * 1.9;
        background-image: linear-gradient(#fff,
                #F5F5F5,
                #fff);
    }

    .phone__side--top {
        transform: rotateX(-90deg) translate3d(@phone-border-radius * 0.95, 0, 0);
    }

    .phone__side--bottom {
        transform: rotateX(-90deg) translate3d(@phone-border-radius, 0, @phone-height);
    }

    .phone__side--left {
        transform: rotateY(90deg) translate3d(0, @phone-border-radius, 0);
    }

    .phone__side--right {
        transform: rotateY(90deg) translate3d(0, @phone-border-radius, @phone-width);
    }

    .phone__padding--1 {
        transform: rotateY(90deg) rotateX(-90deg) translateY(@phone-border-radius * -1);
    }

    .phone__padding--2 {
        transform: translateX(@phone-width - @phone-border-radius) rotateY(-90deg) rotateX(-90deg) translateX(@phone-thick * -1);
    }

    .phone__padding--3 {
        transform: translateY(@phone-height - @phone-border-radius) rotateY(90deg);
    }

    .phone__padding--4 {
        transform: translate3d(@phone-width, @phone-height - @phone-border-radius, @phone-thick * -1) rotateY(-90deg);
    }
}
</style>