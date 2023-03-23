<template>
    <div class="img-container">
        <el-image v-for="url in urls" :key="url" :src="url" lazy>
            <template #placeholder>
                <div class="loading-container">
                    <loading />
                </div>
            </template>
        </el-image>
    </div>
</template>


<script setup>
import Loading from '../components/Loading.vue'
const urls = [
    '/img/photo-wall/1.jpg',
    '/img/photo-wall/2.jpg',
    '/img/photo-wall/3.jpg',
    '/img/photo-wall/4.jpg',
    '/img/photo-wall/5.jpg',
    '/img/photo-wall/6.jpg',
    '/img/photo-wall/7.jpg',
    '/img/photo-wall/8.jpg',
    '/img/photo-wall/9.jpg',
    '/img/photo-wall/10.jpg',
    '/img/photo-wall/11.jpg',
]
</script>


<style lang="less" scoped>
.img-container {
    min-height: 100%;

    .el-image {
        display: block;
        min-height: @phone-border-radius * 3;
        margin-bottom: 1rem;
        border-radius: 1rem;
        box-shadow: 0 0 .8rem .1rem rgba(0, 0, 0, .4);

        .loading-container {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
}
</style>