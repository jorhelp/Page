<template>
    <div style="display: none;" id="aplayer"></div>
    <div class="music-container">
        <div class="background" :style="`background-image: url(${audio_list[0].cover})`"></div>
        <div class="cover">
            <img :src="audio_list[0].cover" alt="">
        </div>

        <div class="btns">
            <div class="play-btn" @click="audio_store.ap.play"></div>
        </div>
    </div>
</template>


<style lang="less" scoped>
@keyframes rotate {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}

.music-container {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;

    .background {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        filter: blur(2rem);
        background-position: center center;
        background-size: cover;
        z-index: -1;
    }

    .cover {
        @cover-width: calc(var(--phone-width) * 0.76);
        width: @cover-width;
        height: @cover-width;
        overflow: hidden;
        border-radius: 50%;
        margin-left: auto;
        margin-right: auto;
        margin-top: 40%;
        padding: 3.2rem;
        box-sizing: border-box;
        background: repeating-radial-gradient(circle at center,
                #000 2%,
                #111 10%,
                #222 0%;
            );
        animation: rotate 30s linear infinite;

        img {
            display: block;
            border-radius: 50%;
        }

    }

    .btns {
        .play-btn {
            width: 4rem;
            height: 4rem;
            background-color: #fff;
            margin-left: auto;
            margin-right: auto;
            margin-top: 1rem;
        }
    }

}
</style>


<script setup>
import 'aplayer/dist/APlayer.min.css'
import APlayer from 'aplayer'
import { onMounted } from 'vue'
import useAudioStore from '../store/jaudio'


const audio_store = useAudioStore()
const audio_list = [{
    name: '晴天',
    artist: '周杰伦',
    url: '/audio/sunday.mp3',
    cover: '/audio/sunday.webp',
    lrc: "/audio/sunday.lrc"
}]

onMounted(() => {
    // 此处防止每次打开当前路由都要重新加载一遍播放器
    if (!audio_store.is_ap_created) {
        const ap = new APlayer({
            container: document.getElementById("aplayer"),
            autoplay: true,
            loop: 'all',
            audio: audio_list
        })
        audio_store.set_ap(ap)
    }
    console.log(audio_store.ap)
})

</script>