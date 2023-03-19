<template>
    <div class="dock">
        <template v-for="app of JAppsStore.apps" :key="app.id">
            <j-app v-if="app.position === JAppsStore.position.dock" :class="app.size" :msg="app.msg">
                <template #app-icon>
                    <img v-show="app.icon" :src="app.icon" alt="">
                </template>
            </j-app>
        </template>
    </div>
</template>


<script setup>
import JApp from './JApp.vue'
import JApps from '../store/japp'

const JAppsStore = JApps()
</script>


<style lang="less" scoped>
.dock {
    margin: 0 1em 1em;
    border-radius: calc(var(--app-width) / 3);
    background-color: rgba(209, 209, 209, 0.5);
    backdrop-filter: blur(1em);
    display: flex;
    justify-content: space-between;
    align-items: center;
    .app {
        position: relative;
        top: 18%;
    }
}
</style>