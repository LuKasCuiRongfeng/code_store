<template>
    <div>
        <div class="video-container">
            <h1>弹幕测试</h1>
            <video src="../assets/video/tianxingjiuge.mp4"
            controls id="video"></video>
            <div class="video-barrage-view">
                <canvas id="canvas"
                width="768"
                height="350"
                ref="canvas"></canvas>
            </div>
            <div class="video-barrage-input">
                <el-select
                v-model="barrageObj.fontSize"
                size="mini"
                style="width:75px"
                id="selectFontSize">
                    <el-option v-for="(item,i) in fontSizeOptions"
                    :key="i"
                    :value="item.value"
                    :label="item.label"></el-option>
                </el-select>
                <el-color-picker
                v-model="barrageObj.color"
                style="vertical-align:bottom;"
                @active-change="colorChange"
                id="pickColor"></el-color-picker>
                <input type="text" v-model="barrageObj.barrage"
                style="font-size:24px;vertical-align:bottom;
                border-radius:5%"
                placeholder="说点什么吧"
                @keyup="sendBarrage">
                <el-button type="success"
                @click="send">发送</el-button>
            </div>
        </div>
    </div>
</template>
<script>
import test from '../assets/js/test.js'
import BarragePlugin from '../assets/js/barrage.js'
let barragePlugin,currentTime,video,canvas;
let barrageTotalBox=[];
document.body.onload=function(){
    canvas=document.getElementById("canvas");
    video=document.getElementById("video");
    barragePlugin=new BarragePlugin(canvas);
    barragePlugin.init();
    console.log(barragePlugin);
    barragePlugin.launch();
    video.addEventListener("timeupdate",function(){
        console.log(video.paused);
        currentTime=Math.floor(video.currentTime);
        //console.log(currentTime);
        barragePlugin.timeUpdate(currentTime,barrageTotalBox,video.paused);
        //console.log(barrageTotalBox);
        //barragePlugin.launch();
    })
    video.addEventListener("seeked",function(){
        barragePlugin.seeked();
    })
}
/*document.body.onbeforeunload=function(){
    fetch("http://localhost:8080/video/tianxingjiuge",{
        method:"post",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(barrageTotalBox)
    })
    .then(res=>res.json())
    .then(res=>{
        console.log(res)
    })
    .catch(err=>{console.log(err)});
}*/
export default {
    data(){
        return{
            fontSizeOptions:[
                {value:"12px",label:"小"},
                {value:"bold 12px",label:"小粗"},
                {value:"18px",label:"标准"},
                {value:"bold 18px",label:"标准粗"},
                {value:"25px",label:"较大"},
                {value:"bold 25px",label:"较大粗"},
                {value:"30px",label:"大"},
                {value:"bold 30px",label:"大粗"},
            ],
            barrageObj:{barrage:"",color:"#ffffff",fontSize:"18px",currentTime:0},
            barrageBox:[]
        }
    },
    created(){
        console.log("testCreated",barrageTotalBox);
        this.axios.get("http://localhost:8080/video/getbarrage")
        .then(res=>{
            barrageTotalBox=res.data;
        })
        .catch(err=>{console.log(err)});
    },
    mounted(){
        console.log("testMounted",barrageTotalBox);
    },
    methods:{
        colorChange(e){
            this.barrageObj.color=e;
        },
        send(){
            let currentTime=Math.floor(video.currentTime);
            this.barrageObj.currentTime=currentTime;
            this.barrageBox.push(
                {
                    barrage:this.barrageObj.barrage,
                    color:this.barrageObj.color,
                    fontSize:this.barrageObj.fontSize,
                    currentTime:this.barrageObj.currentTime
                }
            );
            barrageTotalBox.push({
                barrage:this.barrageObj.barrage,
                color:this.barrageObj.color,
                fontSize:this.barrageObj.fontSize,
                currentTime:this.barrageObj.currentTime
            })
            //barragePlugin.add(this.barrageObj);
        },
        sendBarrage(e){
            if(e.keyCode==13){
                let currentTime=Math.floor(video.currentTime);
                this.barrageObj.currentTime=currentTime;
                this.barrageBox.push(
                    {
                        barrage:this.barrageObj.barrage,
                        color:this.barrageObj.color,
                        fontSize:this.barrageObj.fontSize,
                        currentTime:this.barrageObj.currentTime
                    }
                );
                barrageTotalBox.push({
                    barrage:this.barrageObj.barrage,
                    color:this.barrageObj.color,
                    fontSize:this.barrageObj.fontSize,
                    currentTime:this.barrageObj.currentTime
                })
                //barragePlugin.add(this.barrageObj);
            }
        }
    },
    watch:{
       
    },
    beforeDestroy(){
        this.axios.post("http://localhost:8080/video/tianxingjiuge",
            this.qs.stringify({
            barrage:JSON.stringify(this.barrageBox)
            }))
            .then(res=>{console.log(res)})
            .catch(err=>{})
    }
}
</script>
<style>
.video-container{
    width: 768px;
    margin: auto;
    text-align: center;
    position: relative;
}
.video-barrage-input{
    line-height: 32px;
}
.video-barrage-view{
    position: absolute;
    top:0;left: 0;
}
</style>