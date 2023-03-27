<template>
    <div v-if="appStore.isMsgShow" @click="handleMsgClick" class="msg-box">
        <div class="app-icon">
            <img :src="appStore.msgApp.icon" alt="">
        </div>
        <div class="app-info">
            <div class="app-title">{{ appStore.msgApp.name }}</div>
            <div class="app-msg">{{ appStore.msgApp.msg.at(-1) }}</div>
        </div>
    </div>
</template>


<script setup>
import useAppStore from '../store/japp'
import { handleMsgClick } from '../mixin'


const appStore = useAppStore()
</script>


<style lang="less" scoped>
.msg-box {
    @height: @phone-border-radius * 1.5;
    @padding: @height * .15;
    .absolute;
    z-index: 666;
    width: 94%;
    height: @height;
    overflow: hidden;

    color: #fff;
    background-color: rgba(123, 123, 123, 0.9);
    backdrop-filter: blur(3px);
    border-radius: @height * .25;

    box-sizing: border-box;
    padding: @padding;

    .app-icon {
        height: @height - @padding * 2;
        width: @height - @padding * 2;
        float: left;
        margin-right: @padding;

        img {
            height: 100%;
            object-fit: contain;
        }
    }

    .app-info {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: flex-start;

        .app-title {
            font-weight: bold;
        }

        .app-msg {
            width: 100%;
            font-size: .8rem;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }
}
</style>