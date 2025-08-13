<template>
    <div class="status">
        <div class="time">{{ timeString }}</div>
        <div class="msg-icon">
            <div v-for="app of appStore.appWithMsg" :key="app.id" class="app-with-msg">
                <img :src="app.icon" alt="">
            </div>
        </div>
        <div class="cellular">
            <div v-for="idx of 4" class="cellular-item" :key="idx" ref="cellularItems"></div>
        </div>
        <div class="wifi">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-wifi"></use>
            </svg>
        </div>
        <div class="battery">
            <div class="battery-body">
                <div ref="batteryPadding" class="battery-padding"></div>
            </div>
            <div class="battery-head"></div>
        </div>
    </div>
</template>


<script setup>
import { getTime } from '../utils'
import { onMounted, ref } from 'vue'
import useBarStore from '../store/bar'
import useAppStore from '../store/japp'


const timeString = ref(getTime())
const cellularItems = ref([])
const batteryPadding = ref(null)
const barStore = useBarStore()
const appStore = useAppStore()

function renderCellular() {
    cellularItems.value.forEach(($dom, idx) => {
        if ((idx + 1) <= barStore.cellular)
            $dom.classList.add('active')
        else $dom.classList.remove('active')
    })
}

function renderBattery() {
    const $dom = batteryPadding.value
    $dom.style.width = `${barStore.battery}%`
    if (barStore.battery > 97) $dom.classList.add('full')
    else $dom.classList.remove('full')
    if (barStore.battery < 35) $dom.classList.add('low')
    else $dom.classList.remove('low')
}

onMounted(() => {
    setInterval(() => timeString.value = getTime(), 1000)
    setInterval(() => {
        renderCellular()
        renderBattery()
    }, 1000)
})
</script>


<style lang="less" scoped>
.status {
    padding: 0 @phone-border-radius * .7;
    display: flex;
    align-items: center;
    z-index: 666;

    *+* {
        margin-left: 1%;
    }

    .time {
        font-weight: bold;
        font-size: 1rem;
    }

    .msg-icon {
        @height: @phone-border-radius * .35;
        flex-grow: 1;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        overflow: hidden;
        .app-with-msg {
            height: @height;
            width: @height;
            background-color: #fff;
            border-radius: 30%;  // 隐藏白角
            overflow: hidden;
            img {
                display: block;
            }
        }
    }

    .cellular {
        height: 26%;
        display: flex;
        align-items: flex-end;
        @width: @phone-border-radius * .1;

        .cellular-item {
            width: @width;
            background-color: #eee;
            border-radius: @width;

            &+.cellular-item {
                margin-left: @width * .3;
            }

            &.active {
                background-color: var(--status-bar-color);
            }

            &:nth-child(1) {
                height: 40%;
            }

            &:nth-child(2) {
                height: 65%;
            }

            &:nth-child(3) {
                height: 85%;
            }

            &:nth-child(4) {
                height: 110%;
            }
        }
    }

    .wifi {
        @height: @phone-border-radius * .45;
        height: @height;
        width: @height;
        display: flex;
        align-items: center;

        .icon {
            height: 100%;
            width: 100%;
        }
    }

    .battery {
        display: flex;
        justify-content: center;
        align-items: center;

        .battery-body {
            @height: @phone-border-radius * .3;
            width: @height * 1.8;
            height: @height;
            border-radius: @phone-border-radius * .07;
            overflow: hidden;
            background-color: #eee;


            .battery-padding {
                height: 100%;
                width: 100%;
                background-color: var(--status-bar-color);

                &.low {
                    background-color: #f00;
                }

                &.charge {
                    background-color: #0f0;
                }
            }
        }

        .battery-head {
            @height: @phone-border-radius * .11;
            width: @height * .36;
            height: @height;
            margin-left: @height * .3;
            background-color: #aaa;
            border-radius: 0 (@phone-border-radius * .08) (@phone-border-radius * .08) 0;
        }
    }
}
</style>