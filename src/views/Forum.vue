<template>
    <div class="forum-box" onselectstart="return false">
        <div class="forum-box-content"></div>
        <div class="forum-box-control">
            <input type="text"
            class="forum-box-chat"
            placeholder="说点什么吧"
            @keyup="inputSend"
            v-model="chat">
            <el-button @click="send"
            type="success">发送</el-button>
        </div>
        <el-button
        @click="tiaozhuan">tiaozhuan</el-button>
        <el-button @click="refresh">刷新</el-button>
    </div>
</template>
<script>
export default {
    data(){
        return{
            chat:""
        }
    },
    beforeCreate(){
        if(!sessionStorage.getItem("isLogin")){
            this.$alert("你还未登录，请先登录","提示",{
                confirmButtonText:"确定",
                type:"warning",
                callback:action=>{
                    this.$router.replace("/newlogin");
                }
            })
        }
    },
    sockets:{
        connect:function(){
            console.log("建立连接",sessionStorage.getItem("user"));
            this.$socket.emit("user",sessionStorage.getItem("user"));
        },
        enter(data){
            let chatdiv=$(`<div>${data}</div>`);
            chatdiv.css({
                "color":"green",
                "font-weight":"bolder"
            });
            $(".forum-box-content").prepend(chatdiv);
        },
        exit(data){
            let chatdiv=$(`<div>${data}</div>`);
            chatdiv.css({
                "color":"red",
                "font-weight":"bolder"
            });
            $(".forum-box-content").prepend(chatdiv);
        },
        content(data){
            let content=data.split(":");
            let user=$(`<span>${content[0]}:</span>`)
            let saying=$(`<span>${content[1]}</span>`)
            user.css({"color":"black","font-weight":"bolder",
            "font-size":"25px"});
            saying.css({"color":"blue","font-weight":"bolder",
            "font-size":"25px"})
            let chatdiv=$(`<div></div>`);
            chatdiv.prepend(saying);
            chatdiv.prepend(user);
            $(".forum-box-content").prepend(chatdiv);
        }
    },
    inject:["reload"],
    methods:{
        refresh(){
            //this.reload();
            this.$router.replace("/forum")
        },
        tiaozhuan(){
            this.$router.push("/_forum")
        },
        send(){
            if(this.chat){
                this.$socket.emit("send",this.chat);
                this.chat="";
            }
        },
        inputSend(e){
            if(e.keyCode==13){
                if(this.chat){
                    this.$socket.emit("send",this.chat);
                    this.chat="";
                }
            }
        }
    }
}
</script>
<style>
.forum-box{
    border: 1px gray solid;
    width: 400px;
    box-shadow: 0 0 9px;
    margin: 50px;
    overflow: hidden;
    position: relative;
    background-color: rgba(157, 255, 0, 0.438)
}
.forum-box-content{
    height: 350px;
    overflow: auto;
}
.forum-box-control{
    height: 50xp;
    margin-top: 10px;
}
.forum-box-chat{
    width: 85%;
    height: 30px;
    font-size: 24px;
    background-color: rgba(238, 255, 0, 0.541);
    vertical-align: bottom;
}
.forum-box-chat .el-input__inner{
    background-color: rgba(238, 255, 0, 0.541);
    color: black;
}
</style>