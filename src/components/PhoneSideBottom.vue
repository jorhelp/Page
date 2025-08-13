<template>
    <div class="phone-antenna-2 antenna-left"></div>
    <div class="phone-speaker left">
        <div class="phone-speaker-item"></div>
        <div class="phone-speaker-item"></div>
        <div class="phone-speaker-item"></div>
    </div>
    <div class="phone-charge">
        <div class="phone-charge-item left"></div>
        <div class="phone-charge-slot"></div>
        <div class="phone-charge-item right"></div>
    </div>
    <div class="phone-speaker right">
        <div class="phone-speaker-item"></div>
        <div class="phone-speaker-item"></div>
        <div class="phone-speaker-item"></div>
        <div class="phone-speaker-item"></div>
        <div class="phone-speaker-item"></div>
    </div>
</template>


<style lang="less" scoped>
.antenna-left {
    left: @phone-thick * .5;
}

.phone-speaker {
    @item-height: @phone-thick * .2;
    .absolute;
    top: 50%;
    transform: translateY(-50%);
    height: @item-height;

    .phone-speaker-item {
        float: left;
        margin-right: @phone-thick * .1;
        width: @item-height;
        height: @item-height;
        background-color: #666;
        border-radius: 50%;
        border: 1px solid #eee;
        box-sizing: border-box;
    }

    &.left {
        width: @item-height * 8;
        left: @phone-thick;
    }

    &.right {
        width: @item-height * 10;
        right: @phone-thick * .5;

        .phone-speaker-item {
            float: right;
        }
    }
}

.phone-charge {
    .absolute;
    left: 50%;
    transform: translateX(-50%);
    height: @phone-thick;
    width: 25%;

    .phone-charge-item {
        .absolute;
        @item-width: @phone-thick * .2;
        width: @item-width;
        height: @item-width;
        background-color: #888;
        box-sizing: border-box;
        border: 1px solid #333;
        border-radius: 50%;
        top: 50%;
        transform: translateY(-50%);
        &.left {
            left: 0;
        }
        &.right {
            right: 0;
        }
    }
    .phone-charge-slot {
        .absolute;
        width: 55%;
        height: @phone-thick * .35;
        left: 50%;
        top: 50%;
        transform: translate3d(-50%, -50%, 0);
        border-radius: @phone-thick * .2;
        background-image: radial-gradient(
            #333, 
            #666,
        );
        border: 1px solid #ccc;
        box-sizing: border-box;
    }
}
</style>