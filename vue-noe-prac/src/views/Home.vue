<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="home">
        <Header></Header>
        <homeSwiper></homeSwiper>
    </div>
</template>

<script>
import Header from '@/components/home/Header.vue'
import homeSwiper from '@/components/home/homeSwiper.vue'
import store from '@/store/index'
export default{
    name: "page-Home",
    components:{
        Header,
        homeSwiper
    },
    data(){
        return{
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