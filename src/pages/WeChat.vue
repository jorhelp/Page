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
    </div>
</template>


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
}
</style>