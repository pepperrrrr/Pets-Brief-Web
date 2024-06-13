<template>
    <div>
        <div  class="productSection" v-for="(item,index) in sectionList" :key="index" :style="{backgroundImage:'url('+item.backgroundImg+')'}">
           <div class="featureTitle">The Star of the {{ item.name }}</div>
            <productFeature :featureData="item.imageList"></productFeature>  
        </div>
    </div>
</template>

<script>
import productFeature from '@/components/common/productFeature.vue'
export default{
    name: 'productSection',
    components: {
        productFeature
    },
    props: ['sectionList']
}

</script>


<style lang="scss" scoped>
.productSection{
    padding-bottom: 48px;
    width: 100%;
    background-color: #171717;
    .featureTitle{
        color: #FFF;
        font-size: 32px;
        padding: 16px;
        font-weight: bold;
    }
}

</style>


