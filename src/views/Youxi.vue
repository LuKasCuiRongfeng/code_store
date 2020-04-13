<template>
    <div class="youxi-tanchishe"
    @click="controlDirection">
        <canvas id="backgroundImageCanvas"
        height="500" width="500"></canvas>
        <canvas id="drawCanvas" ref="drawCanvas"
        height="500" width="500"
        @click="test"></canvas>
    </div>
</template>
<script>
import Tanchishe from '../assets/js/tanchishe.js'
const tanchishe=new Tanchishe();
const canvas=document.getElementById("drawCanvas");
let direction=3;
document.onkeyup=function(e){
    //console.log(e);
    direction=e.keyCode-36;
}
document.onload=function(){
    //console.log(canvas);
}
export default {
    data(){
        return{
            canvas:null,
            direction:direction
        }
    },
    mounted(){
        tanchishe.init(this.$refs.drawCanvas);
        //console.log(this.$refs.drawCanvas);
        tanchishe.draw();
    },
    methods:{
        controlDirection(e){
            //console.log(this.direction);
        },
        test(e){
            //console.log(e);
        }
    },
    updated(){
        //console.log(this.direction);
    }
}
</script>
<style scoped>
.youxi-tanchishe{
    position: relative;
    text-align: center;
    width: 500px;
    height: 500px;
    margin: auto;
}
#drawCanvas{
    position: absolute;
    top: 0;
    left: 0;
    background: green;
}
</style>