<template>
    <div>
        <div class="newlogin-banner">
            <el-image class="newlogin-banner-image" 
            :style="imageStyle" :src="image"></el-image>
        </div>
        <div class="newlogin-box">
            <div class="newlogin-box-title">
                <span>登录</span>
            </div>
            <el-row class="newlogin-box-content">
                <el-col :span="12">
                    <div class="newlogin-box-content-yanzheng">
                        <el-input ref="yanzhengma" size="large"
                        placeholder="登录前请先验证，输入验证码"
                        v-model="yanzheng">
                        <el-button slot="append" type="success"
                        style="margin-right:0px;font-weight:bolder;
                        background-color:rgba(127,127,127,0.5)"
                        @click="changeyangzhengma" size="large"
                        title="点击切换">{{yanzhengma}}</el-button>
                        <el-button slot="append" type="success"
                        style="background-color:green"
                        @click="_yanzheng"
                        size="large">点击验证</el-button>
                        </el-input>
                    </div>
                </el-col>
                <el-col :span="12">
                    <div class="newlogin-box-content-login">
                        <el-input v-model="uname" name="uname"
                        placeholder="用户名或者邮箱" size="large"
                        clearable="" autofocus
                        ref="uname"
                        :disabled="unameDisabled"></el-input>
                        <el-input v-model="upwd"
                        name="upwd" show-password size="large"
                        placeholder="输入密码"
                        ref="upwd"
                        :disabled="upwdDisabled"></el-input>
                        <div class="newlogin-box-content-login-loginbutton">
                            <el-button @click="login"
                            type="success"
                            :disabled="loginDisabled">登录</el-button>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            loginUrl:"http://localhost:8080/userManager/login",
            image:require("../assets/image/index/login1.png"),
            imageStyle:{width:"980px"},
            uname:"",
            upwd:"",
            countdown:3,
            yanzheng:"",
            yanzhengma:"",
            unameDisabled:true,
            upwdDisabled:true,
            loginDisabled:true
        }
    },
    mounted(){
        let yanzhengma="";
        let num=[0,1,2,3,4,5,6,,7,8,9];
        let letter=["A","B","C","D","E","F",
        "G","H","I","J","K","L","M","N",
        "O","P","Q","R","S","T","U","V",
        "W","X","Y","Z"]
        for(let i=0;i<4;i++){
            yanzhengma+=Math.random()<0.5?Math.floor(Math.random()*10).toString():
            letter[Math.floor(Math.random()*26)];
        }
        this.yanzhengma=yanzhengma;
    },
    methods:{
        _yanzheng(){
            if(this.yanzheng.toLowerCase()==this.yanzhengma.toLowerCase()){
                this.unameDisabled=false;
                this.upwdDisabled=false;
                this.loginDisabled=false;
                this.yanzheng=""
                this.$refs.yanzhengma.$refs.input.placeholder="验证码通过"
            }
            else{
                this.yanzheng=""
                this.$refs.yanzhengma.$refs.input.placeholder="验证码错误"
            }
        },
        changeyangzhengma(){
            let yanzhengma="";
            let num=[0,1,2,3,4,5,6,,7,8,9];
            let letter=["A","B","C","D","E","F",
                "G","H","I","J","K","L","M","N",
                "O","P","Q","R","S","T","U","V",
                "W","X","Y","Z"]
            for(let i=0;i<4;i++){
                yanzhengma+=Math.random()<0.5?Math.floor(Math.random()*10).toString():
                letter[Math.floor(Math.random()*26)];
            }
            this.yanzhengma=yanzhengma;
        },
        login(){
            let validateUname=/^[\w]+$/i
            .test(this.uname);
            let validateUpwd=/^[\w]+$/i
            .test(this.upwd);
            if(!validateUname){
                this.$refs.uname.$refs.input.style.border="1px red solid";
                this.$refs.uname.$refs.input.placeholder="用户名不能为空"
            }
            else{
                this.$refs.uname.$refs.input.style.border=""
            }
            if(!validateUpwd){
                this.$refs.upwd.$refs.input.style.border="1px red solid";
                this.$refs.upwd.$refs.input.placeholder="密码不能为空"
            }
            else{
                this.$refs.upwd.$refs.input.style.border=""
            }
            if(validateUname&&validateUpwd){
                this.axios.post(this.loginUrl,this.qs.stringify({
                    uname:this.uname,
                    upwd:this.upwd
                }))
                .then(res=>{
                    if(res.data.code==1){
                        this.$message({
                            dangerouslyUseHTMLString:true,
                            message:res.data.msg+", <strong>"+this.countdown+"</storng>s 后将跳转···",
                            center:true,
                            type:"success",
                            offset:100,
                            onClose:(instance)=>{
                                console.log(res);
                                sessionStorage.setItem("isLogin", true);
                                sessionStorage.setItem("user",this.uname);
                                location.href="/";
                            }
                        })
                    }
                    else{
                        this.$message.error(res.data.msg);
                    }
                })
                .catch(err=>{console.log(err)});
            }
            
        }
    }
}
</script>
<style>
.newlogin-banner{
    background-color: #00a0d8;
    height: 86px;
    text-align: center;
    margin-bottom: 20px;
}
.newlogin-box{
    width: 980px;
    margin: auto;
}
.newlogin-box-title{
    text-align: center;
    font-size: 40px;
    border-bottom: 1px dashed black;
}
.newlogin-box-content>.el-col{
    height: 460px;
}
.newlogin-box-content>.el-col:first-child{
    border-right: 1px dashed black;
}
.newlogin-box-content-login{
    width: 300px;
    margin: auto;
    margin-top: 20px;
    height: 200px;
}
.newlogin-box-content-login div{
    margin: 15px 0;
}
.newlogin-box-content-login div .el-input__inner{
    background-color: rgb(38, 68, 38);
    color: white;
}
.newlogin-box-content-login-loginbutton{
    text-align: center;
}
.newlogin-box-content-yanzheng{
    width: 400px;
    margin:auto;
    margin-top: 50px;
}
</style>