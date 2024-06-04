<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="home">
        <Header></Header>
        这是首页内容
        <tabBar></tabBar>
    </div>
</template>

<script>
import Header from '@/components/home/Header.vue'
import tabBar from '@/components/common/tabBar.vue'
export default{
    name: "page-Home",
    components:{
        tabBar,
        Header
    }
};

</script>