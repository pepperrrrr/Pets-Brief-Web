<!-- eslint-disable vue/multi-word-component-names -->
<template>
     <header>
        <div class="header">
            <div class="iconHeader">
                <img src="/img/列表.png" alt="">
                <img src="/img/猫狗.png" alt="">
                <img src="/img/购物车.png" alt="">
            </div>
            <div class="inputHeader">
                <input type="text" placeholder="please input the name">
            </div>
        </div>
    </header>
</template>

<script>

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
}

</style>