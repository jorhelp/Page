<template>
    <div ref="$app" class="app" :class="app.size" @click="appClick()">
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
import { ref, toRefs } from 'vue'
import useAppStore from '../store/japp'
import { useRouter } from 'vue-router'


const $app = ref(null)
const appStore = useAppStore()
const props = defineProps({
    app: Object,
    nameHide: {
        type: Boolean,
        default: false
    }
})
const { app, nameHide } = toRefs(props)
const router = useRouter()

function appClick() {
    // 清除消息圆点
    app.value.msg = []
    // 设置 transform-origin (app 相对于手机边框的位置)
    const $container = document.querySelector('.app__content__container')
    const appRect = $app.value.getBoundingClientRect()
    let _x = $app.value.offsetLeft + appRect.width / 2
    let _y = $app.value.offsetTop + appRect.height / 2
    if (app.value.position === appStore.position.dock) {
        const $parent = $app.value.offsetParent
        _x += $parent.offsetLeft
        _y += $parent.offsetTop
    } else {
        const $desktop = document.querySelector('.desktop')
        _y += $desktop.offsetTop
    }
    $container.style.transformOrigin = `${_x}px ${_y}px`
    // 开启 app 盒子
    appStore.toggleAppContent(true)
    // 设置路由填充盒子
    router.push(app.value.content)
    // 颜色
    document.querySelector(':root').classList.add('invert')
}
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