<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="home">
        <Header></Header>
        <homeSwiper></homeSwiper>
        <div class="explore">
            <div class="exploreTitle">Explore Pets</div>
            <div class="petsButton">
                <div class="petsIcon" v-for="(item,index) in exploreList" :key="index">
                    <img :src="item.iconink" alt="">
                    <div>{{ item.name }}</div>
                </div>
            </div>
        </div>
        <homeSuggest></homeSuggest>
    </div>
</template>

<script>
import Header from '@/components/home/Header.vue'
import homeSwiper from '@/components/home/homeSwiper.vue'
import homeSuggest from '@/components/home/suggestionSection.vue'
import store from '@/store/index'
export default{
    name: "page-Home",
    components:{
        Header,
        homeSwiper,
        homeSuggest
    },
    data(){
        return{
            exploreList:[
                {id:0, name:'Cats', iconink:'/img/cat.png'},
                {id:1, name:'Dogs', iconink:'/img/cat.png'},
                {id:2, name:'Others', iconink:'/img/cat.png'},
            ]
        }
    },
    mounted(){
        Promise.all([store.dispatch('getData')])
        .then(res => {
            this.briefData = res[0].data.data.briefData;
            this.tabList = res[0].data.data.tabData;
            this.sectionList = res[0].data.data.data
        })
        .catch(error => {
            console.log(error)
        })
    }
};

</script>


<style lang="scss" scoped>
.explore{
    background-color: #171717;
    color: #FFF;
    padding: 16px;
    .exploreTitle{
        font-size: 32px;
        line-height: 40px;
        font-weight: bold;
    }
    .petsButton{
        margin-top: 20px;
        display: flex;
        justify-content: space-between;
        .petsIcon{
            font-size: 12px;
            line-height: 16px;
            overflow: hidden;
            text-align: center;
            img{
                height: 38px;
                margin-bottom: 8px;
            }
        }
    }
}


</style>