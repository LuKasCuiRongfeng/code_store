<template>
    <div>
        <h1>WELCOME TO USERCENTER</h1>
        <h1>{{data}}</h1>
    </div>
</template>
<script>
export default {
   
    data(){
        return{
           data:"" 
        }
    },
    created(){
        this.axios.get("http://localhost:8080/userManager/isLogin")
        .then(res=>{
            if(res.data.code!==1){
                alert("请先登录");
                location.href="/#/login"
            }
            this.data=res.data;
        })
        .catch(err=>{console.log(err)});
    }
}
</script>