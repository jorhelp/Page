<template>
    <h2>设置</h2>
    <el-card shadow="always">
        <template #header>
            <div class="head">
                <img class="head-icon circle" src="/img/jorhelp.jpg" alt="">
                <span>Jorhelp</span>
            </div>
        </template>
        <div class="card-item">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-dingwei"></use>
            </svg>
            <span>Qingdao</span>
        </div>
        <a class="card-item" href="http://www.zzu.edu.cn/" target="_blank">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-xueli1"></use>
            </svg>
            <span>ZZU</span>
        </a>
        <a class="card-item" href="https://www.sdu.edu.cn/" target="_blank">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-xueli"></use>
            </svg>
            <span>SDU</span>
        </a>
        <a class="card-item" href="https://github.com/jorhelp" target="_blank">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-GitHub"></use>
            </svg>
            <span>Github</span>
        </a>
        <a class="card-item" href="https://space.bilibili.com/281130909" target="_blank">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-bilibili"></use>
            </svg>
            <span>Bilibili</span>
        </a>
        <a class="card-item" href="https://music.163.com/#/user/home?id=617922057" target="_blank">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-wangyiyunyinle"></use>
            </svg>
            <span>网易云音乐</span>
        </a>
    </el-card>

    <el-card shadow="always">
        <template #header>
            <div class="head">
                <img class="head-icon" src="/img/icon-phone-64.png" alt="">
                <span>关于本机</span>
            </div>
        </template>
        <div class="card-item">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-banben"></use>
            </svg>
            <span>JOS 1.0</span>
        </div>
        <div class="card-item">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-battery"></use>
            </svg>
            <span>剩余电量 {{ barStore.battery }}%</span>
        </div>
        <div class="card-item">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-tongzhi"></use>
            </svg>
            <span>通知数目 {{ appStore.appWithMsg.length }}</span>
        </div>
    </el-card>

    <el-card shadow="always">
        <template #header>
            <div class="head">
                <!-- <img class="head-icon" src="/img/icon-phone-64.png" alt=""> -->
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-APP"></use>
                </svg>
                <span>APP资源库</span>
            </div>
        </template>
        <template v-for="app of appStore.apps" :key="app.id">
            <div v-if="app.size === ''" class="card-item">
                <img :src="app.icon" alt="">
                <span>{{ app.name }}</span>
            </div>
        </template>
    </el-card>
</template>


<script setup>
import useAppStore from '../store/japp'
import useBarStore from '../store/bar'


const appStore = useAppStore()
const barStore = useBarStore()
</script>


<style lang="less" scoped>
.el-card {
    margin-bottom: 1rem;

    .head {
        display: flex;
        align-items: center;

        .head-icon,
        .icon {
            width: @phone-border-radius * .8;
            font-size: @phone-border-radius * .8;
            margin-right: @phone-border-radius * .2;
        }
    }

    .card-item {
        @height: @phone-border-radius * .5;
        height: @height * 1.3;
        display: flex;
        align-items: center;
        border-bottom: 1px solid #eee;

        img,
        .icon {
            height: @height;
            width: @height;
            margin-right: @height * .3;
        }

        span {
            font-size: 1rem;
        }
    }
}
</style>