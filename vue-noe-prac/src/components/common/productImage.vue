<template>
    <div class="imageSwier">
        <swiper-container
        :slides-per-view="1.2"
        :space-between="16"
        :slides-offset-before="16"
        :slides-offset-after="16"
        class="swiperContainer"
        @swiperprogress="onPrpgress" 
        @swiperslidechange="onSlideChange">
            <swiper-slide v-for="(item,index) in imageList" :key="index">
                <div class="featureContainer">
                    <div class="featureTitle">{{ item.title }}</div>
                    <div class="featureImage">
                        <img :src="item.imageUrl" alt="">
                    </div>
                    <div class="featureDesc">{{ item.description }}</div>
                </div>
            </swiper-slide>
        </swiper-container>
    </div>
</template>


<script>
import { register } from 'swiper/element/bundle'

register()

export default {
    name: 'productImage',
    props: {
        imageList:{
            type: Array,
            required: true
        }
    },
    data(){
        return{
        }
    },

    methods: {
        onPrpgress(e){
            const [swiper, progress] = e.detail;
            console.log(progress, this.imageList)
        },
        onSlideChange(e){
            console.log('slide change')
        }
    }
}

</script>


<style lang="scss" scoped>
.imageSwier{
    .swiperContainer{
        width: 100%;
        .featureContainer{
            background-color: #FFF;
            min-height: 300px;
            border-radius: 12px;
            padding: 20px 16px;
            .featureImage{
                display: flex;
                justify-content: center;
                align-content: center;
                height: 163px;
                margin: 16px 0;
                img{
                    height: 100%;
                }
            }
            .featureTitle{
                font-weight: bold;
                font-size: 20px;
                color: #171717;
            }
            .featureDesc{
                font-size: 16px;
                color: #4e444e;
                word-wrap: break-word;
            }
        }
    }
}
</style>