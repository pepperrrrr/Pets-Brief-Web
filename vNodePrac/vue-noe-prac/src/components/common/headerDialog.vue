<template>
    <div class="headerDialog">
        <div class="ueserHead">
            <div class="userInfo">
                <img src="/img/user.png" alt="">
                <div class="userText">Login / Sign up</div>
            </div>
            <img src="/img/close.png" alt="" @click="closeDialog()">
        </div>
        <div class="pageList">
            <div v-for="(item, index) in pageListData" :key="index" class="listItem">
                <div>{{ item.name }}</div>
                <img src="/img/rightArrow.png" alt="" @click="jumpPage(item.path)">
            </div>
        </div>
    </div>
</template>


<script>

export default{
    data(){
        return{
            pageListData:[
                {id: 0, name: 'Home', value: 'home', path: '/home'},
                {id: 1, name: 'Cats', value: 'cats', path: '/cats'},
                {id: 2, name: 'Dogs', value: 'dogs', path: '/dogs'},
                {id: 3, name: 'Other Species', value: 'otherSpecies', path: '/otherSpecies'},
                {id: 4, name: 'User', value: 'user', path: '/user'},
                {id: 5, name: 'Favorite', value: 'favorite', path: '/favorite'}
            ]
        }
    },
    methods:{
        closeDialog(){
            this.$emit('getDialogStatus',true)
        },
        jumpPage(path){
            if(path == this.$route.path){
                this.$emit('getDialogStatus',true)
                return 
            }
            this.$router.replace(path)
        },
    }
}

</script>



<style lang="scss" scoped>
.headerDialog{
    background-color: #FFF;
    color: #171717;
    .ueserHead{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 24px;
        padding: 16px;
        border-bottom: 2px solid #ccc;
        .userInfo{
            height: 100%;
            display: flex;
            justify-content: left;
            align-items: center;
            font-size: 16px;
            img{
                margin-right: 12px;
            }
        }
    }
    .pageList{
        color: #171717;
        margin: 16px;
        font-size: 24px;
        .listItem{
            height: 48px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            img{
                height: 21px;
                width: 21px;
            }
        };
    }
}
</style>