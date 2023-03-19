<template>
    <swiper :slides-per-view="1" :pagination="{ clickable: true, bulletActiveClass: 'swiper-bullet-active' }"
        :modules="modules">
        <swiper-slide>
            <div class="container">
                <template v-for="app of JAppsStore.apps" :key="app.id">
                    <j-app v-if="app.position === JAppsStore.position.b1" :class="app.size" :msg="app.msg">
                        <template #app-icon>
                            <img v-show="app.icon" :src="app.icon" alt="">
                        </template>
                        <template #app-name>
                            {{ app.name }}
                        </template>
                    </j-app>
                </template>
            </div>
        </swiper-slide>

        <swiper-slide>
            <div class="container">
                <template v-for="app of JAppsStore.apps" :key="app.id">
                    <j-app v-if="app.position === JAppsStore.position.b2" :class="app.size" :msg="app.msg">
                        <template #app-icon>
                            <img :src="app.icon" alt="">
                        </template>
                        <template #app-name>
                            {{ app.name }}
                        </template>
                    </j-app>
                </template>
            </div>
        </swiper-slide>

        <swiper-slide>
            <div class="container">
                <template v-for="app of JAppsStore.apps" :key="app.id">
                    <j-app v-if="app.position === JAppsStore.position.b3" :class="app.size" :msg="app.msg">
                        <template #app-icon>
                            <img :src="app.icon" alt="">
                        </template>
                        <template #app-name>
                            {{ app.name }}
                        </template>
                    </j-app>
                </template>
            </div>
        </swiper-slide>
    </swiper>
</template>


<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import JApp from './JApp.vue'
import JApps from '../store/japp'

const JAppsStore = JApps()
const modules = [Pagination]
</script>


<style lang="less" scoped>
.swiper {
    width: 100%;
    height: 100%;
}

.container {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: var(--app-container-padding-y) var(--app-container-padding-x);
    display: grid;
    grid-template-columns: repeat(4, var(--app-width));
    grid-template-rows: repeat(auto-fill, var(--app-width));
}
</style>