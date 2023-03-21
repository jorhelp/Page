<template>
    <div class="app__content__container">
        <el-button @click="handleClose" type="danger" :icon="Close" size="small" circle />
        <el-scrollbar height="100%" min-size="100">
            <div class="app__content">
                <router-view></router-view>
            </div>
        </el-scrollbar>
    </div>
</template>


<script setup>
import { Close } from '@element-plus/icons-vue'
import useAppStore from '../store/japp'
import { useRouter } from 'vue-router'


const appStore = useAppStore()
const router = useRouter()

function handleClose() {
    // 关闭 app 盒子
    appStore.toggleAppContent(false)
    // 颜色变回去
    document.querySelector(':root').classList.remove('invert')
    // 路由退回去
    router.back()
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
    color: #000;
    background-color: #fff;

    .el-button {
        .absolute;
        top: @phone-border-radius;
        right: 5%;
        z-index: 66;
        width: @phone-border-radius * .5;
        height: @phone-border-radius * .5;
        font-size: @phone-border-radius * .4;
    }

    .app__content {
        padding-top: @phone-border-radius;
        padding-left: @phone-border-radius * .5;
        padding-right: @phone-border-radius * .5;
        box-sizing: border-box;
        height: 100%;
    }
}
</style>