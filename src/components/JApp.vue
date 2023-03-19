<template>
    <div class="app">
        <el-badge :value="badgeValue" :max="99">
            <div class="app-icon">
                <slot name="app-icon"></slot>
            </div>
        </el-badge>
        <div class="app-name">
            <slot name="app-name"></slot>
        </div>
    </div>
</template>


<script setup>
import { computed } from 'vue'


const props = defineProps({
    msg: Array,
})
const badgeValue = computed(() => {
    return props.msg.length === 0 ? '' : props.msg.length
})
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