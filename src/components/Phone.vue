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
import PhoneSideLeft from './PhoneSideLeft.vue'
import PhoneSideRight from './PhoneSideRight.vue'
import PhoneSideTop from './PhoneSideTop.vue'
import PhoneSideBottom from './PhoneSideBottom.vue'
import PhoneBack from './PhoneBack.vue'
import PhoneScreen from './PhoneScreen.vue'
import { onMounted, computed } from 'vue'
import { isMobile, drawArc } from '../utils'


const isPC = computed(() => !isMobile())

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