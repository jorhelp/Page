<template>
    <div class="app__content__container">
        <el-button @click="handleCloseClick" type="danger" :icon="Close" size="small" circle />
        <el-scrollbar height="100%" :min-size="100">
            <div class="app__content">
                <router-view></router-view>
            </div>
        </el-scrollbar>
    </div>
</template>


<script setup>
import { Close } from '@element-plus/icons-vue'
import { handleCloseClick } from '../mixin'
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
    //border-radius: @phone-border-radius * 0.8;

    .el-button {
        .absolute;
        top: @phone-border-radius;
        right: 5%;
        z-index: 66;
        width: @phone-border-radius * .5;
        height: @phone-border-radius * .5;
        font-size: @phone-border-radius * .4;
        border-radius: 50%;
    }

    .app__content {
        padding-top: @phone-border-radius;
        padding-left: @phone-border-radius * .3;
        padding-right: @phone-border-radius * .3;
        box-sizing: border-box;
        height: 100%;
    }
}
</style>