<template>
    <div class="bottomBar" @click="triggerDialog()">
        <div class="stickyBar"></div>
        <div class="bottomContent">
            <div class="bottomText"><b>Filter to refine your search</b></div>
            <div class="bottomIcon">
                <img src="/img/petsLove.png" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default{
    data( ){
        return{
            routeList:[{
                    title: 'Home',
                    path: '/Home',
                    active: '/img/首页-置灰.png',
                    selected: '/img/首页.png',
                    },{
                        title: 'List',
                        path: '/List',
                        active: '/img/分享-置灰.png',
                        selected: '/img/分享.png',
                    },{
                        title: 'Cart',
                        path: '/Cart',
                        active: '/img/消息-置灰.png',
                        selected: '/img/消息.png',
                    },{
                        title: 'Mine',
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
        },
        triggerDialog(){

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
    width: 100%;
    background-color: #FFF;
    border: 1px solid #0000001A;
    border-radius: 12px 12px 0px 0px;
    box-shadow: 0px -3px 10px 0px rgba(0,0,0,0.3);
    .bottomContent{
        display: flex;
        padding: 16px 20px;
        justify-content: space-between;
        align-content: center;
        .bottomText{
            font-size: 16px;
            text-align: left;
            line-height: 1.6;
            color: #171717;
        }
        .bottomIcon{
            height: 48px;
            width: 48px;
            border: 2px solid #a4a2a2;
            border-radius: 100px;
            display: flex;
            justify-content: center;
            align-items: center;
            img{
                width: 100%; 
                height: 100%;
            }
        }
    }
    .stickyBar{
        width: 77px;
        height:10px;
        margin: 0 auto; 
        border-bottom: 4px solid #e8e8e8;
    }
}

</style>