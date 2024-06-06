<template>
    <div class="productFefature">
        <productImage :imageList="imageList"></productImage>
    </div>
</template>

<script>
import productImage from '@/components/common/productImage.vue'
export default {
    components:{
        productImage
    },
    data(){
        return {
            imageList:[{
                    id:1,
                    imageUrl:'/swiper1.jpg',
                    title:'HEAD',
                    description:'Maine cat head is large and round, high cheekbones, long nose bridge, slightly sunken, mouth is square, compact eyes large, oval, eye color green, golden, copper and other large base wide sharp, wide distance between the ears, ear has a dense long decorative hair, and body hair contrast'
                },{
                    id:2,
                    imageUrl:'/swiper2.jpg',
                    title:'BODY',
                    description:'The Maine cat has the characteristics of wild beauty, it is strong and strong, the male cat weighs up to 7 kilograms, the female cat is also up to 5 kilograms, the body is rectangular, the bones are strong, the muscles are developed, and the chest is broad and thick. Long tail end thin, fluffy tail hair, dark spots'
                },{
                    id:3,
                    imageUrl:'/swiper3.jpg',
                    title:'ARMS AN LEGS',
                    description:'Maine Coon cats are tall and stocky in proportion to their body length. The toes are large and round, with decorative hairs covering the coat: The body hair is long and soft, smooth and elastic, among which the tail and abdomen hair is the longest and droopy, the neck hair is long and fluffy, and the shoulder hair is the shortest hair color of about 30 kinds, among which red, brown, chocolate, silver and white are more common, and there are fashion stripes or blocky spots, among which the brown tabby cat with warm breath is the most popular.'
                },{
                    id:4,
                    imageUrl:'/swiper4.jpg',
                    title:'COAT',
                    description:'Maine Coon fur can adapt to all seasons. Head, shoulders, and legs thick, silky, short; The back, the flanks are longer, and the trousers are pronounced and hairy. Collared wool is preferred. The bottom pile is soft and delicate; The top coat is smooth, waterproof and slightly greasy. All colors are acceptable except chocolate, lavender, accent colors, as well as mustard and fawn.'
                },{
                    id:5,
                    imageUrl:'/swiper5.jpg',
                    title:'COAT COLOR',
                    description:'The main color of the Maine cat is monochrome, striped color, mixed color system, a total of about 30 coat colors. Among them, red, brown, chocolate, silver and white are more common, and there are fashionable stripes or blocky spots.'
                },{
                    id:6,
                    imageUrl:'/swiper6.jpg',
                    title:'BODY TYPE',
                    description:'The Maine Coon cat, the ragdoll cat and the Siberian cat are the largest cats, with an average weight of 5.9~8.2 kg for males and 3.6~5.4 kg for females. Medium length limbs. Very muscular. The bone structure is solid. Strong appearance, tenacious vitality. The hair is long and coarse.'
                }]
        }

    }
}

</script>

<style lang="scss" scoped>
.productFefature{
}

</style>