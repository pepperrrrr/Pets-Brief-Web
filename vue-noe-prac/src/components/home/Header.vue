<!-- eslint-disable vue/multi-word-component-names -->
<template>
     <header>
        <div class="header">
            <div class="iconHeader">
                <img src="/img/list.png" alt="" @click="triggerList">
                <img src="/img/pets.png" alt="">
                <img src="/img/like.png" alt="">
            </div>
            <div class="inputHeader">
                <input type="text" placeholder="please input the name">
            </div>
        </div>
        <div class="headerDialog" :class=" !showDialog ? 'showDialog' : 'hideDialog' ">
            <headerDialog @getDialogStatus="getDialogStatus"></headerDialog>
        </div>
    </header>
</template>

<script>
import headerDialog from "@/components/common/headerDialog.vue"
export default{
    components:{
        headerDialog
    },
    data(){
        return {
            showDialog:true
        }
    },
    methods:{
        triggerList(){
            this.showDialog = false;
        },
        getDialogStatus(data){
            this.showDialog = data;
        }
    }
}
</script>

<style lang="scss" scoped>
header{
    height: 128px;
    width: 100%;
    background-color: #171717;
    .header{
        height: 100%;
        padding: 16px;
        .iconHeader{
            display: flex;
            justify-content: space-between;
            align-items: center;
            img{
                height: 24px;
                width: 24px;
            }
        }
        .inputHeader{
            padding: 16px 0;
            display: flex;
            input{
                height: 48px;
                font-size: 16px;
                border: 2px solid #2A2A2A;
                background-color: #4e444e;
                border-radius: 12px;
                flex: 1;
                padding-left: 16px;
        }
        }


    }
    .headerDialog{
        z-index: 999999;
        height: 100%;
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
    }

    .showDialog{
        visibility: visible;
        opacity: 1;
        animation: showStatus ease-in .5s forwards;
    }


    .hideDialog{
        visibility: hidden;
        opacity: 0;
        animation: hideStatus ease-in .5s forwards;
    }

    @keyframes hideStatus {
        0% {
            transform: translateX(100%);
        }
        100% {
            transform: none;
        }
    }

    @keyframes showStatus {
        0% {
            transform: translateX(-100%);
        }
        100% {
            transform: none;
        }
    }

}

</style>