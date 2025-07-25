<template>
    <div class="blog">
        <a v-for="blog of blogs" :key="blog.title" :href="blog.url" target="_blank" class="card">
            <div class="background" :style="`background-image: url('${blog.img}');`"></div>
            <div class="img">
                <img :src="blog.img" alt="">
            </div>
            <div class="info">
                <div class="title">{{ blog.title }}</div>
                <div class="date">
                    <el-icon>
                        <Calendar />
                    </el-icon>
                    <span>{{ blog.date }}</span>
                </div>
            </div>
        </a>
    </div>
</template>


<script setup>
import { Calendar } from '@element-plus/icons-vue'


const blogs = [
    {
        img: '/img/blog/ingram.webp',
        title: 'Ingram -- Webcam vulnerability scanning tool',
        date: '2022-04-21',
        url: '//github.com/jorhelp/Ingram',
    },
    {
        img: '/img/blog/keyboard.webp',
        title: '我的机械键盘',
        date: '2023-01-15',
        url: '/projects/keyboard/index.html',
    },
    {
        img: '/img/blog/mass_spect.png',
        title: 'Exploring Trial-and-Error in Deep Learning: Initial Application to Isotope Detection in Mass Spectrometry',
        date: '2024-12-12',
        url: 'https://ieeexplore.ieee.org/abstract/document/10778134',
    },
    {
        img: '/img/blog/antibiotic.png',
        title: 'Comprehensive profiling of antibiotic resistance genes in diverse environments and novel function discovery',
        date: '2024-02-28',
        url: 'https://www.the-innovation.org/article/doi/10.59717/j.xinn-life.2024.100054',
    },
    {
        img: '/img/blog/binding-affinity.png',
        title: 'Prediction of protein-ligand binding affinity with deep learning',
        date: '2023-11-28',
        url: 'https://www.sciencedirect.com/science/article/pii/S2001037023004245',
    },
    {
        img: '/img/blog/eggnn.webp',
        title: 'Edge-gated graph neural network for predicting protein-ligand binding affinities',
        date: '2022-01-14',
        url: '//ieeexplore.ieee.org/abstract/document/9669846/',
    },
    {
        img: '/img/blog/peptide.webp',
        title: 'Pretraining Transformers for TCR-pMHC Binding Prediction',
        date: '2023-01-02',
        url: '//ieeexplore.ieee.org/abstract/document/9994875/',
    },
    {
        img: '/img/blog/rzmlp.webp',
        title: 'rzMLP-DTA: gMLP network with ReZero for sequence-based drug-target affinity prediction',
        date: '2022-01-14',
        url: '//ieeexplore.ieee.org/abstract/document/9669276/',
    },
    {
        img: '/img/blog/sacnn.webp',
        title: 'Structure-based protein-drug affinity prediction with spatial attention mechanisms',
        date: '2022-01-14',
        url: '//ieeexplore.ieee.org/abstract/document/9669781/',
    },
    {
        img: '/img/blog/onn4arg.webp',
        title: 'Ontology-aware deep learning for antibiotic resistance gene prediction: novel function discovery and comprehensive profiling from metagenomic data',
        date: '2021-07-30',
        url: 'https://www.biorxiv.org/content/10.1101/2021.07.30.454403v2.abstract',
    },
]
</script>


<style lang="less" scoped>
.blog {
    padding-bottom: 100px;
}

.card {
    display: block;
    border-radius: @phone-border-radius * .7;
    position: relative;
    overflow: hidden;
    transition: all .5s;
    min-height: 200px;
    margin: 4rem 0;
    cursor: pointer;
    box-shadow: 0 0 15px 6px rgba(0, 0, 0, .2);

    &:hover {
        box-shadow: 0 0 20px 4px rgba(0, 0, 0, .5);

        .img img {
            transform: scale(1.5);
        }

        .info {
            color: rgb(226, 43, 89);
        }
    }

    .background {
        z-index: -1;
        position: absolute;
        top: 60%;
        left: 0;
        right: 0;
        bottom: 0;
        filter: blur(1rem);
        background-position: center center;
        background-size: cover;
    }

    .img {
        height: 100%;
        overflow: hidden;

        img {
            transition: all .5s ease-in-out;
        }
    }

    .info {
        padding: 1rem;
        color: #000;
        transition: all .3s;
        background-color: #ffffff30;

        .title {
            font-weight: bold;
            margin: 1rem;
            text-align: justify;
        }

        .date {
            font-size: .9rem;
            margin: 1rem;
            display: flex;
            align-items: center;

            span {
                padding-left: 3px;
            }
        }
    }

}
</style>