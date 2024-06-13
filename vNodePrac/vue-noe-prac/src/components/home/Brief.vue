<template>
    <h1 class="brief">
        <div class="subTitle">{{ BriefData.subTitle }}</div>
        <div class="title">{{ BriefData.title }}</div>
        <div class="description">{{ BriefData.description }}</div>
    </h1>
</template>

<script>

export default{
    data(){
        return {
            briefData:{}
        }
    },
    props: {
        BriefData:{
            type: Object,
            required: true
        }
    },
}


</script>

<style lang="scss" scoped>
.brief{
    background-color: #171717;
    min-width: 50px;
    padding: 32px 0 16px 16px;
    color: rgb(255, 255, 255);
    .subTitle{
        font-size: 12px;
    }
    .title{
       font-size: 36px; 
       margin: 16px 0;
    }
    .description{
        font-size: 14px;
        text-transform: uppercase;
    }
}

</style>