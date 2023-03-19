<template>
    <div class="phone-antenna-1 antenna-top"></div>
    <div class="phone-button-power"></div>
    <div class="phone-card-slot"></div>
    <div class="phone-antenna-1 antenna-bottom"></div>
</template>


<style lang="less" scoped>
.antenna-top {
    top: @phone-thick * .5;
}

.phone-button-power {
    width: @phone-thick * 0.3;
    height: @phone-thick * 2.2;
    background-color: #eee;
    border: 1px solid #aaa;
    border-radius: (@phone-thick / 8);
    .absolute;
    left: 50%;
    top: @phone-thick * 4.5;
    transform: translateX(-50%);
}

.phone-card-slot {
    width: @phone-thick * 0.3;
    height: @phone-thick * 2;
    background-color: #fff;
    border: 1px solid #eee;
    border-radius: (@phone-thick / 8);
    .absolute;
    left: 50%;
    bottom: @phone-thick * 4;
    transform: translateX(-50%);
    &::before {
        content: '';
        display: block;
        position: absolute;
        width: @phone-thick * 0.1;
        height: @phone-thick * 0.1;
        background-color: #aaa;
        border-radius: 50%;
        left: 50%;
        transform: translate3d(-50%, 150%, 0);
    }
}

.antenna-bottom {
    bottom: @phone-thick;
}</style>