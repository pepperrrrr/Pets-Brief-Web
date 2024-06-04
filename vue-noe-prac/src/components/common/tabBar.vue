<template>
    <div class="bottomBar">
        <div v-for="(item,index) in routeList" :key="index" class="bottomItem" @click="changeStatus(item.path,item.status)">
            <div :class="$route.path == item.path ? 'selected' : 'unselected'">{{ item.title }}</div>
            <div class="bottomImage">
                <img :src="$route.path == item.path ? item.selected : item.active" alt="">
            </div>
    </div>
    </div>
</template>

<script>
export default{
    data( ){
        return{
            routeList:[{
                    title: 'homePage',
                    path: '/Home',
                    active: '/img/首页-置灰.png',
                    selected: '/img/首页.png',
                    },{
                        title: 'listPage',
                        path: '/List',
                        active: '/img/分享-置灰.png',
                        selected: '/img/分享.png',
                    },{
                        title: 'cartPage',
                        path: '/Cart',
                        active: '/img/消息-置灰.png',
                        selected: '/img/消息.png',
                    },{
                        title: 'minePage',
                        path: '/Mine',
                        active: '/img/个人中心-置灰.png',
                        selected: '/img/个人中心.png',
                    }]
        }
    },
    methods: {
        changeStatus(path){
            if(path == this.$route.path) return 
            this.$router.replace(path)
        }
    }
}

</script>

<style lang="scss" scoped>

.bottomBar{
    position: fixed;
    z-index: 999;
    left:0;
    bottom: 0;
    height: 60px;
    width: 100%;
    display: flex;
    background-color: #FFF;
}

.bottomItem{
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column-reverse;
    font-size: 12px;
    color:#2c2c2c;
    .bottomImage{
        height: 50%;
        margin-bottom: 6px;
         img{
            width: 100%;
            height: 100%;
        }
    }
    .selected{
    color: #d81e06;
    }

    .unselected{
        color:#2c2c2c
    }
}

</style>