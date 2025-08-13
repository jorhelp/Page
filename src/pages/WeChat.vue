<template>
    <div class="container">
        <div class="wechat-pay-img">
            <img src="/img/wechat-pay.webp" alt="">
        </div>
        <p>
            Buy this guy a cup of coffee.
            <svg class="icon">
                <use xlink:href="#icon-natiekafei"></use>
            </svg>
        </p>

        <div class="supporter-container">
            <img v-for="img in supporters" class="supporter" :src="img" alt="">
        </div>
    </div>
</template>

<script setup>
const supporters = [
    '/img/wechat-supporter/a.webp',
    '/img/wechat-supporter/b.webp',
    '/img/wechat-supporter/c.webp',
    '/img/wechat-supporter/d.webp',
    '/img/wechat-supporter/e.webp',
    '/img/wechat-supporter/f.webp',
    '/img/wechat-supporter/g.webp',
    '/img/wechat-supporter/h.webp',
    '/img/wechat-supporter/i.webp',
    '/img/wechat-supporter/j.webp',
    '/img/wechat-supporter/k.webp',
    '/img/wechat-supporter/l.webp',
    '/img/wechat-supporter/m.webp',
    '/img/wechat-supporter/n.webp',
    '/img/wechat-supporter/o.webp',
    '/img/wechat-supporter/p.webp',
    '/img/wechat-supporter/q.webp',
]
</script>

<style lang="less" scoped>
.container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    .wechat-pay-img {
        width: 80%;
    }
    .icon {
        font-size: 1.3rem;
    }

    .supporter-container {
        width: 90%;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        
        .supporter {
            width: 4vh;
            height: 4vh;
            margin: .2vh;
            border-radius: .8vh;
        }
    }
}
</style>