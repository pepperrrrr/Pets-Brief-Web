<template>
    <div class="tabBar" ref="tabBar" :class="stickyStatus ? 'stickyBar' : '' ">
        <div class="bar">
            <button v-for="(item,index) in tabBarData"  :key="index" class="barButton" @click="changeStatus(index)">
                <div class="buttonItem" :class="item.selected ? 'selectedItem' : '' ">
                    {{ item.name }}
                </div>
            </button>
        </div>
    </div>
</template>


<script>

export default {
    props:["tabData"],
    data(){
        return {
            barHeight: 0,
            tabScrollTop: 0,
            onScrollTop: 0,
            stickyStatus: false
        }
    },
    methods: {
        changeStatus(index){
            this.tabBarData.forEach((item,i) => {
                this.tabBarData[i].selected = i == index ? true : false;
            })
        },
        checkSticky(){
            this.tabScrollTop = this.$refs.tabBar.offsetTop;
            window.addEventListener('scroll', (e) => {
                this.onScrollTop = this.getScrollTop();
                if (this.onScrollTop >= this.tabScrollTop) {
                    this.stickyStatus = true;
                } else {
                    this.stickyStatus = false;
                }
            })
        },
        getScrollTop(){
            let scrollTop = 0;
            if(document.documentElement && document.documentElement.scrollTop){
                scrollTop = document.documentElement.scrollTop;
            } else if (document.body) {
                scrollTop = document.body.scrollTop;
            }
            return scrollTop;
        }
    },
    mounted(){
        this.checkSticky();
    },
    computed:{
        tabBarData(){
            return this.tabData
        }
    }
}

</script>


<style lang="scss" scoped>
.tabBar{
    height: 40px;
    width: 100%;
    background-color: #2a2a2a;
    .bar{
        height: 100%;
        width: 100%;
        overflow-x: auto;
        overflow-y: hidden;
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
        .barButton{
            flex: 1 0 auto;
            height: 100%;
            //取消button自带样式
            background: none;
            color: inherit;
            border: none;
            padding: 0 16px;
            font: inherit;
            cursor: pointer;
            outline: inherit;
            .buttonItem{
               display: flex;
               align-items: center;
               justify-content: center;
               font-size: 14px;
               font-weight: bold;
               height: calc(100% - 15px);
               color: #FFF;
            }
            .selectedItem{
                border-bottom: 2px solid  #fff;
            }
        }
    }
    .bar::-webkit-scrollbar {
        display: none !important;
    }
}

.stickyBar{
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
}

</style>