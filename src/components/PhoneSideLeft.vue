<template>
    <div class="phone-antenna-1 antenna-top"></div>
    <div class="phone-button-mute">
        <div class="phone-button-mute-btn"></div>
    </div>
    <div class="phone-button-top"></div>
    <div class="phone-button-bottom"></div>
    <div class="phone-antenna-1 antenna-bottom"></div>
</template>


<style lang="less" scoped>
.antenna-top {
    top: @phone-thick * .5;
}
.phone-button-mute {
    .absolute;
    width: @phone-thick * 0.25;
    height: @phone-thick * 0.8;
    background-color: #ffc988;
    border-radius: (@phone-thick / 10);
    left: 50%;
    top: @phone-thick * 2;
    transform: translateX(-50%);
    .phone-button-mute-btn {
        width: 60%;
        height: 100%;
        background-color: #333;
        box-sizing: border-box;
        border: 1px solid #666;
        border-radius: inherit;
        .absolute;
        right: 0;
    }
}
.phone-button-top, .phone-button-bottom {
    width: @phone-thick * 0.3;
    height: @phone-thick * 1.5;
    background-color: #333;
    border: 1px solid #666;
    border-radius: (@phone-thick / 8);
    .absolute;
    left: 50%;
    transform: translateX(-50%);
}
.phone-button-top {
    top: @phone-thick * 3.5;
}
.phone-button-bottom {
    top: @phone-thick * 5.4;
}
.antenna-bottom {
    bottom: @phone-thick;
}
    
</style>