<template>
    <div>
        <fieldset>
            <legend></legend>
            <label for="uname">用户名：</label>
            <input type="text" v-model="uname"
            placeholder="请输入用户名" name="uname"
            autofocus>
            <br>
            <label for="upwd">密码：</label>
            <input type="password" v-model="upwd"
            placeholder="请输入密码" name="upwd">
            <br>
            <button @click="login">登录</button>
        </fieldset>        
    </div>
</template>
<script>
import { mapMutations} from 'vuex'
export default {
    data(){
        return{
            url:"http://localhost:8080/userManager/login",
            uname:"",
            upwd:"",
            //userToken:""
        }
    },
    methods:{
        //...mapMutations(["changeLogin"]),
        login(e){
            e.preventDefault();
            this.axios.post(this.url,this.qs.stringify({
                uname:this.uname,
                upwd:this.upwd
            }))
            .then(res=>{
                if(res.data.code==1){
                    alert(res.data.msg);
                    console.log(res);
                    sessionStorage.setItem("isLogin", true);
                    location.href="/";
                }else{
                    alert(res.data.msg);
                }
            })
            .catch(err=>{console.log(err)})
        }
    }
}
</script>