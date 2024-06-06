<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="home">
        <Header></Header>
        <Brief></Brief>
        <headTab></headTab>
        <productSection></productSection>
    </div>
</template>

<script>
import Header from '@/components/home/Header.vue'
import Brief from '@/components/home/Brief.vue'
import productSection from '@/components/home/productSection.vue'
import headTab from '@/components/home/headerTab.vue'
import tabBar from '@/components/common/tabBar.vue'
export default{
    name: "page-Home",
    components:{
        tabBar,
        Header,
        headTab,
        productSection,
        Brief
    }
};

</script>