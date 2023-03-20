<template>
    <div class="app__content__container">
        <el-button @click="handleClose" type="danger" :icon="Close" size="small" circle />
        <router-view></router-view>
    </div>
</template>


<script setup>
import { Close } from '@element-plus/icons-vue'
import useAppStore from '../store/japp'


const appStore = useAppStore()

function handleClose() {
    // 关闭 app 盒子
    appStore.toggleAppContent(false)
    // 颜色变回去
    document.querySelector(':root').classList.remove('invert')
}
</script>


<style lang="less" scoped>
.app__content__container {
    .absolute;
    z-index: 66;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #fff;
    color: #000;

    .el-button {
        .absolute;
        top: @phone-border-radius;
        right: 5%;
        z-index: 66;
        width: @phone-border-radius * .5;
        height: @phone-border-radius * .5;
        font-size: @phone-border-radius * .4;
    }
}
</style>