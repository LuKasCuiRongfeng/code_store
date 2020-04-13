<template>
    <div class="container">
        <img  class="navImage" ref="navImage" id="navImage"
        src="../assets/image/index/nav-img.png" alt="img">
        <div class="navMask"></div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            
        }
    },
    mounted(){

    }
}
</script>
<style scoped>
.navImage{
    position: relative;
    height: 160px;
    left: 50%;
    transform: translateX(-50%)
}
.navMask{
    position: absolute;
    top:0;
    z-index: 1;
    height:40px;
    width: 100%;
    background: rgba(204, 204, 219, 0.6)
}
</style>