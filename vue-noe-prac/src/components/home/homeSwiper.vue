<template>
    <div class="homeSwiper">
        <div @click="prevSlide" class="carousel-prev-icon-left"></div>
        <div class="swiperSlides">
            <div v-for="(item,index) in homeSwiperList" :key="index" :style="{backgroundImage:'url('+item.img+')',left: index * 100 + '%', 'transform': dynamicstyle}" class="slidesItem">
                <div class="title">{{ item.title }}</div>
            </div>
        </div>
        <div @click="nextSlide" class="carousel-prev-icon-right"></div>
    </div>
</template>



<script>
export default{
    data(){
        return{
            homeSwiperList:[
                {id: 0, title: 'Stay Active', subTitle:'', img:'/homeSwiper/swiper3.jpg'},
                {id: 1, title: 'Enrich Life', subTitle:'', img:'/homeSwiper/swiper4.jpg'},
                {id: 2, title: 'Improve Mental Health', subTitle:'', img:'/homeSwiper/swiper5.jpg'},
                {id: 3, title: 'Sleep Better', subTitle:'', img:'/homeSwiper/swiper1.jpg'},
                {id: 4, title: 'Boost Happiness', subTitle:'', img:'/homeSwiper/swiper2.jpg'},
                {id: 5, title: 'Help Improve the Quality of Life of Cancer Patients', subTitle:'', img:'/homeSwiper/swiper6.jpg'},
            ],
            dynamicstyle:'',
            currentSlide: 0,
            interval: Object,
        }
    },
    mounted() {
    // 自动播放动画
        this.startSlideshow()
    },
    methods:{
        nextSlide() {
        // 每次指针加一
            this.currentSlide = (this.currentSlide + 1) % this.homeSwiperList.length
            this.setStyle();
        },
        prevSlide() {
        // 每次减一，为负数时循环
            this.currentSlide = (this.currentSlide - 1 + this.homeSwiperList.length) % this.homeSwiperList.length;
            this.setStyle();
        },
        // 图片动画
        setStyle() {
            this.dynamicstyle = `translatex(-${this.currentSlide*100}%)`
        },
        // 定时器
        startSlideshow() {
            this.interval = setInterval(() => {
                this.currentSlide = (this.currentSlide + 1) % this.homeSwiperList.length;
                this.setStyle();
            }, 3000)
        },
        stopSlideshow() {
            clearInterval(this.interval)
        }
    }
}

</script>



<style lang="scss" scoped>
.homeSwiper{
    position: relative;
    .swiperSlides{
        position: relative;
        min-height: 300px;
        overflow: hidden;
        .slidesItem{
            width: 100%;
            position: absolute;
            margin: 0;
            padding: 0;
            top: 0;
            left: 0;
            height: 100%;
            transition: 0.5s transform ease-in-out;
            background-size: cover;
            display: flex;
            align-items: center;
            justify-content: center;
            .title{
                width: 60%;
                text-align: center;
                font-size: 32px;
                line-height: 40px;
                color: #FFF;
                overflow: hidden;
                letter-spacing: -0.96px;
                font-weight: bolder;
            }
        }
    }
}
.carousel-prev-icon-left {
  position: absolute;
  left: 10px;
  margin-bottom: 50%;
  top: 0;
  height: 100%;
  width: 40px;
  border: none;
  background-image: url('/public/img/左箭头.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  z-index: 999;
}
.carousel-prev-icon-right {
  position: absolute;
  right: 10px;
  margin-top: -50%;
  bottom: 0;
  height: 100%;
  width: 40px;
  border: none;
  background-image: url('/public/img/右箭头.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  z-index: 999;
}
</style>