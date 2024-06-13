<template>
    <div class="skeleton">
        <div class="skeleton-header"></div>
        <div class="skeleton-content">
            <div class="skeleton-item"></div>
            <div class="skeleton-item"></div>
            <div class="skeleton-item"></div>
        </div>
    </div>
</template>


<script>

</script>



<style lang="scss" scoped>
.skeleton{
    width: 100%;
    height: 100%;
    background: #F2F2F2;
    padding: 20px;
}


.skeleton-header{
    width:c 100%;
    height: 50px;
    background: #e0e0e0;
    margin-bottom: 20px
}


.skeleton-content{
    display: flex;
    justify-content: space-between;
}


.skeleton-item{
    width: 30%;
    height: 100px;
    background: #e0e0e0;
}
</style>