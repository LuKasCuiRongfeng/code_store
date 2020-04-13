<template>
    <div>
        <div class="newreg-banner">
            <el-image :src="image"></el-image>
        </div>
        <div class="newreg-box">
            <div class="newreg-banner-title"><span>注册</span></div>
            <div class="newreg-reg-box">
                <el-input class="newreg-reg-box-info"
                placeholder="4~8位数字、字母或下划线"
                v-model="uname"
                name="uname"
                clearable=""
                size="large"
                autofocus=""
                @blur="onUnameBlur"
                ref="uname"></el-input>
                <el-input class="newreg-reg-box-info"
                placeholder="6~10位数字、字母或下划线"
                v-model="upwd"
                name="uname"
                show-password
                size="large"
                ref="upwd"></el-input>
                <el-input class="newreg-reg-box-info"
                placeholder="确认密码"
                v-model="confirmUpwd"
                show-password
                size="large"
                @blur="onConfirmUpwdBlur"
                ref="confirmUpwd"></el-input>
                <el-radio-group v-model="radio"
                text-color="#fff000"
                class="newreg-reg-box-radio">
                    <el-radio border :label="0">女</el-radio>
                    <el-radio border :label="1">男</el-radio>
                </el-radio-group>
                <div class="new-reg-box-button">
                    <el-button type="success"
                    @click="reg">注册</el-button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            regUrl:"http://localhost:8080/userManager/register",
            image:require("../assets/image/index/login1.png"),
            uname:"",
            upwd:"",
            confirmUpwd:"",
            radio:0
        }
    },
    methods:{
        onUnameBlur(){
            this.axios.post(this.regUrl,this.qs.stringify({
                uname:this.uname
            }))
            .then(res=>{
                if(res.data.code==-1){
                    this.$refs.uname.$refs.input.style.border="1px red solid";
                    this.$refs.uname.$refs.input.value="";
                    this.$refs.uname.$refs.input.placeholder="用户名已被占用，请更换"
                    return false;
                }
                else{
                    this.$refs.uname.$refs.input.style.border="";
                    return true;
                }
            })
            .catch(err=>{console.log(err)});
        },
        onConfirmUpwdBlur(){
            if(this.confirmUpwd!=this.upwd){
                this.$refs.upwd.$refs.input.style.border="1px red solid";
                this.$refs.confirmUpwd.$refs.input.style.border="1px red solid";
                this.confirmUpwd="";
                this.$refs.confirmUpwd.$refs.input.placeholder="两次输入密码不同"
                return false;
            }
            else{
                this.$refs.upwd.$refs.input.style.border="";
                this.$refs.confirmUpwd.$refs.input.style.border="";
                return true;
            }
        },
        reg(){
            let validateUname=/^[\w]{4,8}$/.test(this.uname);
            let validateUpwd=/^[\w]{6,10}$/.test(this.upwd);
            if(!validateUname){
                this.uname="";
                this.$refs.uname.$refs.input.style.border="1px red solid";
            }
            else{
                this.$refs.uname.$refs.input.style.border="";
            }
            if(!validateUpwd){
                this.upwd="";
                this.$refs.upwd.$refs.input.style.border="1px red solid";
            }
            else{
                this.$refs.upwd.$refs.input.style.border="";
            }
            if(validateUname&&validateUpwd){
                new Promise(resolve=>{
                    let checkUpwd=this.onConfirmUpwdBlur();
                    resolve(checkUpwd);
                })
                .then((res)=>{
                    if(res){
                        this.axios.post(this.regUrl,this.qs.stringify({
                            uname:this.uname,
                            upwd:this.upwd,
                            gender:this.radio
                        }))
                        .then(res=>{
                            console.log(res)
                        })
                        .catch(err=>{console.log(err)});
                    }
                })
                .catch(err=>{console.log(err)});
            }
        }
    }
}
</script>
<style>
.newreg-banner{
    background-color: #00a0d8;
    height: 86px;
    text-align: center;
    margin-bottom: 20px;
}
.newreg-box{
    width: 980px;
    margin: auto;
}
.newreg-banner-title{
    text-align: center;
    font-size: 40px;
    border-bottom: 1px dashed gray;
    font-weight: bolder;
}
.newreg-reg-box{
    width: 400px;
    margin: auto;
}
.newreg-reg-box-info .el-input__inner{
    margin: 15px 0;
    background-color: rgb(38, 68, 38);
    color: white;
}
.new-reg-box-button{
    text-align: center;
    margin-top: 10px;
}
</style>