<template>
    <div style="display: none;" id="aplayer"></div>
    <div class="music-container">
        <div class="background" :style="`background-image: url(${audio_list[audio_store.cur_idx].cover})`"></div>
        <div class="cover">
            <img :src="audio_list[audio_store.cur_idx].cover" alt="">
        </div>

        <div class="btns">
            <div class="last-btn" @click="audio_store.ap.skipBack">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAACFklEQVR4nO3cvU4UcRRA8UNCIIMttssD2MAbiL4B9JaU8ggIDTZobPUt1Dfwq5dC41Jio5EOggnJmknGwjC7g/txubNzfsmE9uZkApfd+Q9IkiRJkiRJkiTpdq0AB8AJ8Lv6uQ8U5HcHOAJ+At+Bp8ASSSN/AgY118fksdeBLzVzl7HTORgSeVBdT8hnAXgMXA6Zubyz0zlpCN0nl1XgTcPM5ZXOVcPAV+TxoLpbB20M3YahF6tfYU03RaaZr8k+dA94/x+BM8xcK/PQ28DZGJENfUPlSvlizMCGvqF7wPGEkQ3dsBvvABdTiGzoEbvx6ykFNvQQm8DplCMbesLd2NBBu7Ghg3ZjQwftxoYO2o0NHbQbG3qCz40NzfhDz2o3NnTQbmxoYC1gN+586O2g3bizoZeBVwmizn3o5wmCdiL0rwRBDY2h/zHJ0M8SBO1E6CXgZYKocx/6ry3Xu2bTGroHvEsQeO5Dl/wXfIRZDH3fD5Wum9XQqzN4hMDQIzwCzg0d91XWZ0PHDF345Wzs0Fs+bhA3dC9g507ntoZe9JGw2KE3fciRsKF9bJe4oX0QnVgerQjkYaFgHn8L5IHOQHNxRLlNh+4ftvnQfdNrJL6Ry13gbRtD7zcMvEc+5c6927YXoxTVK33qBv6Q/FU/G8DXmrkPSaqo/tj0q5dX9as7uaA9L6/6kf3lVZIkSZIkSZIkSXTCH+OChUVxeaQfAAAAAElFTkSuQmCC" alt="skip-to-start--v1">
            </div>
            <div class="play-btn" @click="audio_store.ap.toggle">
                <img v-if="audio_store.is_paused" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAACS0lEQVR4nO2dTWpUQRRGj0giQgQnokMd6yQuQFeRqUO3IO5AUfwZuoVsIb2BZJ43bqHNQHkDIZPXYl8JlBhEJNGqd6tufQfOvOojkD6d12kQQgghhBBCiKBsAy+BE+AL8Ba45X2oiLwA7De/As+B696Hi8TJH4b+6Qp4Clz1PmQE7AIOwJ73QXsY2pIHwK73gXsY2oANsA/c8z549KEtOQHvgZveF4g+tCVH4Blwzfsi0Ye25BJ4AlzxvlD0oS15CDzyvlQPQ9u5VygPvC/Xw9AGrIEPwG3vS0Yf2pKnKfVv0DE2o6uek94cHHpMenN00VPSm7ObXpLeKnGKnvRWmWPUpLdKXUZLeqvcoyhJb4140HrSW0N+S0l/hwaxBj1tMemtYVctJb0FcGgh6S2QC+AhlWLB3NSa9BbUqbakt+COtSS9deJH76S3zjwCHmto4ia9dewaeJcextfQlPe1hmYWzz5SoqHR0ETxlYam+C/DN8CWhqaYenlHWRUslFUJTln1phJl1duklFVv/NP506kWwEF/nKWoetyAsuoBGsqqR8Iorx5ypKxhPolrlbr0TubcWGWOtSRzbqwSp9qSOTfeA29qTebceI68qDmZc+Mx8NBCMudmzoFXLSVzbuZM5h06puTAa/1jlF+UTOb73peridwDH0ZJ5tzkGngZLZlz878Dj1GTOTf/OvAUPZlzc9mBv6dkvut98Na47CuJXe8Dt8pFBj7uMZlz8+kvA3edzLnRlynMxHYa++wn+7O+HkQIIYQQQgghaI8fYzEvohyrbJMAAAAASUVORK5CYII=" alt="play--v1">
                <img v-if="!audio_store.is_paused" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAABrElEQVR4nO3csU4CURhE4alY30EeUeEtRSr0UQz2Y0y2sAET/IvxMJPcakPynWQ3dFfquq7ruq7ruq7ruq7rru1B0l7SUdKnJF84389eJe0kLXfkGdlW0vuVGF84b+tv6Z6xN+eWKP+IW8Cese3/EOX1PIM9YzsOhB3AnrGdB8LOYM/YPHSoHmyYwzzYMId5sGEO82DDHObBhjnMgw1zmAcb5jAPNsxhHmyYwzzYMId5sGEO82DDHObBhjnMgw1zmAcb5jAPNsxhHmyYwzzYMId5sGEO82DDHObBhjnMgw1zmAcb5jAPNsxhHmyYwzzYMId5sGEO82DDHObBhjnMgw1zmAcb5jAPNsxhHmyYwzzYMId5sGEO82DDHObBhjnMgw1zmAcb5jAPNsxhHmyYwzzYMId5sGEO82DDHObBhjnMgw1zmAcb5jAPNsxhHmyYwzzYMId5sGEO82DDHObBhjnME3X92QfYg73Q7xjmGdtuIOwJ7Bnbsl6cemvUSdIG7Bnd9sa4k6THO/CMbllvqT388od0lvSyfp6bO/J0Xdd1Xdd1Xdd1Xdfpv+8L78sAgmFBNlIAAAAASUVORK5CYII=" alt="pause--v1">
            </div>
            <div class="next-btn" @click="audio_store.ap.skipForward">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAABZElEQVR4nO2aPUrEUBRGDwqKjWKrW3AH9oroItyBW7AzlpZuQJvZgrMJp1ZBZwSnFKYR8onwCpGAyeS9l0zuPXCbNIcPQr68H3Acx3Ecx3EcJxenwBswBc6zWWEDuAZmwV2EZ8l5BfRr7oGdDN7ij1fhWXJUMS/AYWLvrML7TkeBBXwBl8B6Zm9y9M+Mgf2M3s4DC5gDZ5m8vQgsoARuga3E3t4EVpgJcJDQ27vAAhbARSJvLwMrzAjYjeztdWC16OyVDawlO3ulA2uJzh5EYDXo7MEEVujsG2DTSmDV6OxBBhbwCRxbCizg2VrgJ2uv9JGVwBMrH63SUi3NLf14jIG9lt7kKOLiYS2CNzlqOaaWhyMrGwALS1s8j1Y28coa3RrDmxzVmA9LG/EPDbo1hjc5ititMbzJUcRubcK0wvtzMJ/9QPwO2O7oQPwqg5eTELqLKw9F8Ga98uA4juM4juM4DnwDF//megqOG90AAAAASUVORK5CYII=" alt="end--v1">
            </div>
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
        margin-top: 50%;
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
        .last-btn,
        .next-btn {
            @width: 3rem;
            position: absolute;
            bottom: calc(6.6rem);
            width: @width;
            height: @width;
        }

        .last-btn {
            left: 20%;
        }
        .next-btn {
            right: 20%;
        }

        .play-btn {
            position: absolute;
            bottom: 6rem;
            left: 50%;
            width: 4rem;
            height: 4rem;
            transform: translateX(-50%);
        }
    }

}
</style>


<script setup>
import 'aplayer/dist/APlayer.min.css'
import APlayer from 'aplayer'
import { onMounted, ref } from 'vue'
import useAudioStore from '../store/jaudio'


const audio_store = useAudioStore()
const audio_list = [
    {
        name: '晴天',
        artist: '周杰伦',
        url: '/audio/sunday.mp3',
        cover: '/audio/sunday.webp',
        lrc: "/audio/sunday.lrc"
    },
    {
        name: '七里香',
        artist: '周杰伦',
        url: '/audio/qlx.mp3',
        cover: '/audio/qlx.webp',
        lrc: "/audio/qlx.lrc"
    },
    {
        name: '夜曲',
        artist: '周杰伦',
        url: '/audio/yq.mp3',
        cover: '/audio/yq.webp',
        lrc: "/audio/yq.lrc"
    },
]
const cur_idx = ref(0)


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
        ap.on('play', () => {
            audio_store.set_pause(false)
        })
        ap.on('pause', () => {
            audio_store.set_pause(true)
        })
        ap.on('listswitch', (obj) => {
            audio_store.set_cur_idx(obj.index)
        })
    }
    console.log(audio_store.ap.list)
})

</script>