<template>
    <div class="dock">
        <template v-for="app of appStore.apps" :key="app.id">
            <j-app v-if="app.position === appStore.position.dock" :app="app" name-hide />
        </template>
    </div>
</template>


<script setup>
import JApp from './JApp.vue'
import useAppStore from '../store/japp'

const appStore = useAppStore()
</script>


<style lang="less" scoped>
.dock {
    margin: 0 .9em .8em;
    border-radius: calc(var(--app-width) / 3);
    background-color: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(1em);
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>