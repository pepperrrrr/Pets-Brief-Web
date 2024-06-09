<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="home">
        <Header></Header>
        <Brief :BriefData="briefData"></Brief>
        <headTab :tabData="tabList"></headTab>
        <productSection :sectionList="sectionList"></productSection>
        <tabBar></tabBar>
    </div>
</template>

<script>
import Header from '@/components/home/Header.vue'
import Brief from '@/components/home/Brief.vue'
import productSection from '@/components/home/productSection.vue'
import headTab from '@/components/home/headerTab.vue'
import tabBar from '@/components/common/tabBar.vue'
import store from '@/store/index'
export default{
    name: "page-Home",
    components:{
        tabBar,
        Header,
        headTab,
        productSection,
        Brief
    },
    data(){
        return{
            briefData:{},
            tabList:[],
            sectionList:[]
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