<template>
    <div class="homeSuggest">
        <div class="suggestPet" v-for="(item, index) in suggestPets" :key="index">
            <div class="itemImage">
                <img :src="item.imageLink" alt="">
            </div>
            <div class="itemText">
                <div class="itemTile">{{ item.title }}</div>
                <div class="itemDesc">{{ item.desc }}</div>
                <div class="itemButton">Learn More</div>
            </div>
        </div>
    </div>
</template>



<script>


export default{
    data(){
        return {
            suggestPets: [
                {id:0, title: 'Siberian Husky', desc: 'Beautiful appearance level and majestic posture', imageLink: '/suggestIPets/Husky.jpg'},
                {id:1, title: 'Samoyed', desc: 'The whole body is white, elegant and cute, and the hair is very thick', imageLink: '/suggestIPets/Samoyed.jpg'},
                {id:2, title: 'Ragdoll', desc: 'One of the heaviest cats with large round eyes, thick hair, and a soft, fleshy body', imageLink: '/suggestIPets/Ragdoll.jpg'},
                {id:3, title: 'Poodle', desc: 'Smart and sensible, very able to read people, adaptability is very good', imageLink: '/suggestIPets/Poodle.jpg'},
                {id:4, title: 'Corgy', desc: 'Very alert and gentle', imageLink: '/suggestIPets/Corgy.jpg'},
                {id:5, title: 'Miniature Pig', desc: 'Short stature slightly black back Adult about 14 kg', imageLink: '/suggestIPets/Pig.jpg'},
                {id:6, title: 'Golden Retriever', desc: 'big, but super docile', imageLink: '/suggestIPets/Golden.jpg'},
                {id:7, title: 'Hamster', desc: 'It looks like a mouse, but its body is short and thick, its outer body is covered with dense hair, and its tail is slightly shorter', imageLink: '/suggestIPets/Hamster.jpg'},
                {id:8, title: 'Lop', desc: 'Long ears tend to hang down and tend to be clingy', imageLink: '/suggestIPets/Lop.jpg'},
                {id:9, title: 'Chinchilla', desc: 'The head is big and round, the body is small, the personality is gentle, the voice is sharp and soft', imageLink: '/suggestIPets/Chinchilla.jpg'},
            ]
        }
    }
}


</script>


<style lang="scss" scoped>
.homeSuggest{
    padding: 16px;
    background-color: #F5F5F5;
    .suggestPet{
        border-radius: 12px;
        background-color: #FFF;
        margin: 32px 0;
        .itemImage{
            width: 100%;
            max-height: 300px;
            img{
                width: 100%;
            }
        }
        .itemText{
            padding: 16px;
            color: #171717;
            .itemTile{
                font-size: 32px;
                line-height: 40px;
                font-weight: bold;
                letter-spacing: -0.96px;
                color: #000;
            }
            .itemDesc{
                font-size: 16px;
                line-height: 24px;
                margin: 16px 0;
            }
            .itemButton{
                padding: 11px 40px 14px 40px;
                border: 2px solid #a4a2a2;
                border-radius: 100px;
            }
        }

    }
}

</style>