<template>
    <div class="productFefature">
        <productImage :imageList="featureData"></productImage>

    </div>
</template>

<script>
import productImage from '@/components/common/productImage.vue'
export default {
    components:{
        productImage
    },
    props: ['featureData']
}

</script>

<style lang="scss" scoped>
.productFefature{
}

</style>