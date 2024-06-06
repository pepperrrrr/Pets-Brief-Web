<template>
    <div class="productSection">
        <div class="featureTitle">Features of  Maine Coon</div>
        <productFeature></productFeature>  
    </div>
</template>

<script>
import productFeature from '@/components/common/productFeature.vue'
export default{
    name: 'productSection',
    components: {
        productFeature
    },
    data(){
        return {

        }
    }
}

</script>


<style lang="scss" scoped>
.productSection{
    min-height: 690px;
    width: 100%;
    background-image: url(C:\Users\peppe\Desktop\free-pro\vNodePrac\vue-noe-prac\public\featureBack.jpg);
    .featureTitle{
        color: #FFF;
        font-size: 32px;
        padding: 16px;
        font-weight: bold;
    }
}

</style>


