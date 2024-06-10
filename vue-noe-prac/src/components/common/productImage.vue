<template>
    <div class="imageSwier">
        <swiper-container
        :slides-per-view="1.4"
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
                    <div class="pricePart" v-if="item?.averagePrice">
                        <div class="priceText">Average Price</div>
                        <div class="featurePrice">{{ priceSymbol }} {{ item?.averagePrice}}</div>
                    </div>
                    <div class="featureButtom">
                        <button class="detailButton">Detail</button>
                        <button class="likeButton">Like</button>
                    </div>
                </div>
            </swiper-slide>
        </swiper-container>
    </div>
</template>


<script>
import { register } from 'swiper/element/bundle'
import skeleton from '@/components/common/skeleton.vue'
import store from '@/store/index'

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
            loading: true,
            priceSymbol: ''
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
    },
    mounted(){
        this.priceSymbol = store.state.map.priceSymbol;
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
                align-items: center;
                height: 163px;
                margin: 16px 0;
            }
            .featureTitle{
                font-weight: bold;
                font-size: 20px;
                color: #171717;
            }
            .pricePart{
                .priceText{
                    font-size: 16px;
                    color: black;
                    margin-bottom: 8px;
                }
                .featurePrice{
                    font-size: 20px;
                    font-weight: bold;
                }

            }
            .featureButtom{
                margin-top: 16px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                button{
                    height: 48px;
                    border: 2px solid #a4a2a2;
                    background-color: #FFF;
                    color: #171717;
                    border-radius: 100px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 16px;
                    padding: 16px;
                }
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