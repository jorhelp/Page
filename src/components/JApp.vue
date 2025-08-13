<template>
    <div :id="app.id" class="app" :class="app.size" @click="handleAppClick(app)">
        <el-badge v-if="app.type == 'normal'" :value="app.msg.length === 0 ? '' : app.msg.length" :max="99">
            <div class="app-icon">
                <!-- 需特殊处理 -->
                <calendar v-if="app.name == '日历组件'" />
                <img v-else v-show="app.icon" :src="app.icon" alt="">
            </div>
        </el-badge>

        <el-carousel v-else-if="app.type == 'cascade'" class="app-icon" direction="vertical" :autoplay="true" :interval="3000">
            <el-carousel-item v-for="item in app.icon" class="app-icon" :key="item">
                <!-- 需特殊处理 -->
                <calendar v-if="app.name == '日历组件'" />
                <img v-else style="width: 100%; height: 100%;" :src="item" alt="">
            </el-carousel-item>
        </el-carousel>


        <div v-if="!nameHide" class="app-name">
            {{ app.name }}
        </div>
    </div>

</template>


<script setup>
import { toRefs } from 'vue'
import { handleAppClick } from '../mixin'
import Calendar from './Calendar.vue'


const props = defineProps({
    app: Object,
    nameHide: {
        type: Boolean,
        default: false
    }
})
const { app, nameHide } = toRefs(props)
</script>


<style lang="less" scoped>
.app {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    // overflow: hidden;

    .padding {
        background-color: #ffffff00;
        border-radius: calc(var(--app-width) * .13);
    }

    @app-name-width: 2em;

    .app-name {
        height: @app-name-width;
        font-size: .6rem;
        padding-top: .1rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    .app-icon {
        height: calc(var(--app-width) - @app-name-width * .8);
        width: calc(var(--app-width) - @app-name-width * .8);
        overflow: hidden;
        .padding
    }

    &.app--2x4 {
        grid-column: span 4;
        grid-row: span 2;

        .app-icon {
            height: calc(var(--app-width) * 2 - @app-name-width * .8);
            width: calc(var(--app-width) * 4 - @app-name-width * .8);
            border-radius: calc(var(--phone-border-radius) * .4);
        }
    }

    &.app--2x2 {
        grid-column: span 2;
        grid-row: span 2;

        .app-icon {
            height: calc(var(--app-width) * 2 - @app-name-width * .8);
            width: calc(var(--app-width) * 2 - @app-name-width * .8);
            border-radius: calc(var(--phone-border-radius) * .4);
        }
    }
}

</style>