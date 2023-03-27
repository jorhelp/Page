<template>
    <div :id="app.id" class="app" :class="app.size" @click="handleAppClick(app)">
        <el-badge :value="app.msg.length === 0 ? '' : app.msg.length" :max="99">
            <div class="app-icon">
                <img v-show="app.icon" :src="app.icon" alt="">
            </div>
        </el-badge>
        <div v-if="!nameHide" class="app-name">
            {{ app.name }}
        </div>
    </div>
</template>


<script setup>
import { toRefs } from 'vue'
import { handleAppClick } from '../mixin'


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
        background-color: #fff;
        border-radius: calc(var(--app-width) * .15);
    }

    @app-name-width: 2em;

    .app-name {
        height: @app-name-width;
        transform: scale(.8);
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    .app-icon {
        height: calc(var(--app-width) - @app-name-width);
        width: calc(var(--app-width) - @app-name-width);
        overflow: hidden;
        .padding
    }

    &.app--2x4 {
        grid-column: span 4;
        grid-row: span 2;

        .app-icon {
            height: calc(var(--app-width) * 2 - @app-name-width);
            width: calc(var(--app-width) * 4);
            .padding
        }
    }

    &.app--2x2 {
        grid-column: span 2;
        grid-row: span 2;

        .app-icon {
            height: calc(var(--app-width) * 2 - @app-name-width);
            width: calc(var(--app-width) * 2 - @app-name-width);
            .padding
        }
    }
}
</style>