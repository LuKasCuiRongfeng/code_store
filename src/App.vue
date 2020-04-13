<template>
  <div id="app">

    <app-head/>

    <div id="nav">
      <router-link to="/forum">forum ||</router-link>
      <router-link to="/videobarrage">video test ||</router-link>
      <router-link to="/">
        <i class="el-icon-school"
        style="font-size:24px"></i><sup>HOME ||</sup>
      </router-link>
      <router-link to="/newlogin" v-show="!isLogin">登录 ||</router-link>
      <router-link to="/newreg" v-show="!isLogin">注册 ||</router-link>
      <router-link to="/usercenter" v-show="isLogin">
      <i class="el-icon-user"
        style="font-size:24px"></i><sup>欢迎{{usercenter}} ||</sup></router-link>
      <el-button type="text" size="large" v-show="isLogin"
      @click="exitButton" style="font-size:20px"> 退出</el-button>
    </div>

    <div class="app-search">
      <el-input type="text"
       placeholder="探索大千世界"
       v-model="search" maxlength="20" 
       show-word-limit>
        <el-button slot="append" >
          <i class="el-icon-search" style="font-size:23px;color:green"></i>
        </el-button>
      </el-input>
    </div>

    <app-navbar/>
    <transition name="custom-classes-transition"
    enter-active-class="animated bounceInDown"
    leave-active-class="animated rollOut"
    :duration="{enter:2000,leave:500}">
      <router-view v-if="isRouterAlive"/>
    </transition>
    <app-foot/>
    
  </div>
</template>

<script>
import head from "./components/Header.vue"
import foot from "./components/Footer.vue"
import appNavbar from './components/AppNavbar.vue'
export default {
  provide(){
    return{
      reload:this.reload
    }
  },
  data(){
    return{
      isLogin: false,
      usercenter: sessionStorage.getItem("user"),
      isRouterAlive:true,
      search: ""
    }
  },
 created() {
   if(sessionStorage.getItem("isLogin")) {
     this.isLogin = true
   }else {
     this.isLogin = false
   }
 },
  methods:{
    reload(){
      this.isRouterAlive=false;
      this.$nextTick(()=>{
        this.isRouterAlive=true;
      })
    },
    exitButton(){
      this.$confirm("确定退出？",
      "退出？",{
        confirmButtonText:"退出",
        cancelButtonText:"取消",
        type:"warning"
      })
      .then(_=>{
        this.axios.get("http://localhost:8080/userManager/exit")
        .then(res=>{
          if(res.data.code==1){
            this.$message({
              type:"success",
              message:"退出成功"
            });
            location.href="/";
            sessionStorage.setItem("isLogin", false);
            sessionStorage.clear("user");
          }
          else{
            this.$message({
              type:"error",
              message:"退出失败"
            });
          }
        })
      })
      .catch(err=>{
        console.log(err);
      })
    }
  },
  //头部和尾部子组件
  components:{
    "app-head":head,
    "app-foot":foot,
    "app-navbar":appNavbar
  }
}
</script>

<style>
@import "./assets/css/index.css";
.fade-enter-active, .fade-leave-active{
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to{
  opacity: 0;
}
.slide-fade-leave-active, .slide-fade-enter-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(500px);
  opacity: 0;
}
.slide-fade-enter{
  transform: translateX(-500px);
  opacity: 0;
}
.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
