<template>
    <div class="container">
        <div class="wechat-pay-img">
            <img src="/img/wechat-pay.png" alt="">
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
    '/img/wechat-supporter/a.jpg',
    '/img/wechat-supporter/b.jpg',
    '/img/wechat-supporter/c.jpg',
    '/img/wechat-supporter/d.jpg',
    '/img/wechat-supporter/e.jpg',
    '/img/wechat-supporter/f.jpg',
    '/img/wechat-supporter/g.jpg',
    '/img/wechat-supporter/h.jpg',
    '/img/wechat-supporter/i.jpg',
    '/img/wechat-supporter/j.jpg',
    '/img/wechat-supporter/k.jpg',
    '/img/wechat-supporter/l.jpg',
    '/img/wechat-supporter/m.jpg',
    '/img/wechat-supporter/1.jpg',
    '/img/wechat-supporter/2.jpg',
    '/img/wechat-supporter/3.jpg',
    '/img/wechat-supporter/4.jpg',
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