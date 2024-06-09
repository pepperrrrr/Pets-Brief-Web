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
                <skeleton v-if="loading"></skeleton>
                <div v-else class="featureContainer">
                    <div class="featureTitle">{{ item.title }}</div>
                    <div class="featureNation">{{ item.nation }}</div>
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
import skeleton from '@/components/common/skeleton.vue'

register()

export default {
    name: 'productImage',
    components:{
        skeleton
    },
    props: {
        imageList:{
            type: Array,
            required: true
        }
    },
    data(){
        return {
            loading: true
        }
    },

    methods: {
        onPrpgress(e){
            const [swiper, progress] = e.detail;
        },
        onSlideChange(e){
            console.log('slide change')
        }
    },
    created(){
        this.$nextTick(()=>{
            this.loading = false;
        })
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
            .featureNation{
                margin: 16px 0;
                font-size: 16px;
                color: #4e444e;
                font-weight: bold;
            }
        }
    }
}
</style>