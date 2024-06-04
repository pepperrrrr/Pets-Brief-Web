<!-- eslint-disable vue/multi-word-component-names -->
<template>
     <header>
        <img src="/img/签到.png" alt="">
        <input type="text" placeholder="please input the name want to search">
        <img src="/img/留言.png" alt="">
    </header>
</template>

<script>

</script>

<style lang="scss" scoped>
header{
    position: fixed;
    top:0;
    left: 0;
    z-index: 999;
    height: 46px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #d81e06;
    input{
    height: 30px;
    width: 100%;
    border: 1px solid #FFF;
    border-radius: 30px;
    padding: 0 16px;
    }
    img{
        height: 100%;
    }
}

</style>