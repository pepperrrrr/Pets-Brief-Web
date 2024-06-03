<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="home">
        this is homepage
        <tabBar></tabBar>
    </div>
</template>

<script>
import tabBar from '@/components/common/tabBar.vue'
export default{
    name: "page-Home",
    components:{
        tabBar
    }
};

</script>