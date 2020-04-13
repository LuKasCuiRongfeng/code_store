<template>
    <div>
        <fieldset>
            <legend>REGISTER</legend>
            <label for="uname">输入用户名：</label>
            <input id="uname" type="text" name="uname"
             placeholder="4~8位的数字、字母下划线"
             v-model="uname" ref="uname" autofocus
             @blur="nameBlur">
            <br>
            <label for="upwd">输入密码：</label>
            <input type="password" name="upwd" id="upwd"
             placeholder="6~12位数字或下划线"
             v-model="upwd" ref="upwd">
            <br>
            <label for="repwd">确认密码：</label>
            <input ref="repwd" type="password" placeholder="确认密码"
            @blur="repwdBlur" v-model="repwd">
            <br>
            <input type="radio" name="gender" v-model="gender" value="1">male
            <input type="radio" name="gender" v-model="gender" value="0">female
            <br>
            <button disabled ref="register" @click="register">注册</button>
        </fieldset>
    </div>
</template>
<script>
import { setTimeout } from 'timers';
export default {
    data(){
        return{
            url:"http://localhost:8080/userManager/register",
            uname:"",
            unameChenk:false,
            upwd:"",
            upwdCheck:false,
            repwd:"",
            repwdCheck:false,
            gender:"",
            checkButton:0
        }
    },
    methods:{
        nameBlur(){
            this.axios.post(this.url,this.qs.stringify({
                uname:this.uname
            }))
            .then(res=>{
                console.log(res)
                if(res.data.code==-1){
                    this.uname="用户名已被占用"
                    setTimeout(()=>{
                        this.uname=""
                    },1000);
                    this.unameChenk=false;
                }
                else{this.unameChenk=true;}
            })
            .catch(err=>{console.log(err)})
        },
        repwdBlur(e){
            if(e.target.value!=this.$refs.upwd.value){
                e.target.value="";
                this.repwdCheck=false;
            }
            else{this.repwdCheck=true}
        },
        register(e){
            e.preventDefault();
            this.axios.post(this.url,this.qs.stringify({
                uname:this.uname,
                upwd:this.upwd,
                gender:this.gender
            }))
            .then(res=>{
                console.log(res);
                if(res.data.code==1){
                    alert(res.data.msg);
                    //sessionStorage.setItem("unlogin",false)
                    location.href="/#/login"
                }
                else{
                    alert(res.data.msg);
                }
            })
            .catch(err=>{console.log(err)})
        }
    },
    watch:{
        uname(){
            let uname=this.uname;
            let ele=this.$refs.uname;
            let check=/^[\w+]{4,8}$/.test(uname);
            if(!check){
                ele.style.color="red";
                //this.$refs.register.disabled=true;
                this.unameChenk=false;
            }
            else{
                ele.style.color="green";
                this.unameChenk=true;
            }
        },
        upwd(){
            let upwd=this.upwd;
            let ele=this.$refs.upwd;
            let check=/^[\dA-Za-z]{6,12}$/.test(upwd);
            if(!check){
                ele.style.color="red";
                this.$refs.register.disabled=true;
                this.upwdCheck=false;
            }
            else{
                ele.style.color="green";
                this.upwdCheck=true;
            }
        }
    },
    updated(){
        //console.log(this.$refs.repwd)
        if(!this.$refs.uname.value|!this.$refs.upwd.value|
        this.$refs.repwd.value){
            this.$refs.register.disabled=true;
        }
        if(this.upwdCheck&&this.repwdCheck&&this.unameChenk){
            this.$refs.register.disabled=false;
        }
    }
}
</script>