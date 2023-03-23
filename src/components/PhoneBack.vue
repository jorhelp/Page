<template>
    <div class="camera-module">
        <div class="camera camera-1"></div>
        <div class="camera camera-2"></div>
        <div class="camera camera-3"></div>
        <div class="flashlight"></div>
        <div class="speaker"></div>
        <div class="big-hole"></div>
    </div>
    <div class="logo">
        <img src="/img/jor-logo@200x200.png" alt="logo" class="logo-img">
        <h1> jPhone </h1>
    </div>
</template>


<style lang="less" scoped>
.camera-module {
    @width: @phone-width * .4;
    .absolute;
    right: @phone-width * .05;
    top: @phone-width * .05;
    width: @width * .95;
    height: @width;

    .camera {
        .absolute;
        width: @width * .47;
        height: @width * .47;
        border-radius: 50%;
        box-sizing: border-box;
        background-color: #000;
        border: @width * .04 solid #ccc;
        box-shadow: 0 0 @width * 0.06 1px rgba(0, 0, 0, .6);

        &.camera-1 {
            right: 0;
            top: 0;
        }

        &.camera-2 {
            right: 0;
            bottom: 0;
        }

        &.camera-3 {
            left: 0;
            top: 50%;
            transform: translateY(-50%);
        }

        &::before {
            .absolute;
            left: 50%;
            top: 50%;
            transform: translate3d(-50%, -50%, 0);
            content: '';
            width: 20%;
            height: 20%;
            border-radius: 50%;
            background-image: radial-gradient(rgba(255, 255, 255, .3),
                    rgba(0, 0, 228, .3),
                    rgba(0, 0, 228, .5));
        }

        &::after {
            .absolute;
            left: 55%;
            top: 55%;
            content: '';
            width: 8%;
            height: 10%;
            border-radius: 50%;
            background-color: #fff;
            filter: blur(1px);
        }
    }

    .flashlight {
        .absolute;
        left: 50%;
        transform: translateX(-150%);
        width: @width * .2;
        height: @width * .2;
        border-radius: 50%;
        box-sizing: border-box;
        border: 2px solid #ccc;
        background-image: radial-gradient(#f0ecc5,
                #b6b37f);
    }

    .speaker {
        .absolute;
        left: 5%;
        bottom: @width * .2;
        width: @width * .08;
        height: @width * .08;
        background-color: #555;
        border-radius: 50%;
    }

    .big-hole {
        .absolute;
        left: 10%;
        bottom: 0;
        width: @width * .2;
        height: @width * .2;
        border-radius: 50%;
        background-color: #333;
    }
}

.logo {
    .absolute;
    left: 50%;
    top: 50%;
    transform: translate3d(-50%, -50%, 0) rotateY(180deg);
    text-align: center;
    color: #fff;

    h1 {
        display: block;
        margin: 0;
    }

    .logo-img {
        width: @phone-width * .25;
        height: @phone-width * .25;
    }
}
</style>