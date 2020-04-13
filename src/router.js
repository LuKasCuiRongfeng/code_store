import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import login from './views/Login.vue'
import reg from './views/Reg.vue'
import usercenter from './views/UserCenter.vue'
import index from './views/Index.vue'
import donghua from './views/donghua.vue'
import newlogin from './views/NewLogin.vue'
import newreg from './views/NewReg.vue'
import barrage from './views/VideoBarrage.vue'
import forum from './views/Forum.vue'
import _forum from './views/_Forum.vue'
import youxi from './views/Youxi.vue'

Vue.use(Router)

const router= new Router({
  routes: [
    {path:"/youxi",name:"youxi",component:youxi},
    {path:"/_forum",name:"_forum",component:_forum},
    {path:"/forum",name:"forum",component:forum},
    {path:"/videobarrage",name:"videobarrage",component:barrage},
    {path:"/newreg",name:"newreg",component:newreg},
    {path:"/newlogin",name:"newlogin",component:newlogin},
    {path:"/donghua",name:"donghua",component:donghua},
    {path:"/",name:"index",component:index},
    {path:"/usercenter",name:"usercenter",component:usercenter},
    {path:'/login',name:"login",component:login},
    {path:'/register',name:"reg",component:reg},
    {
      path: '/home',
      name: 'home',
      component: Home
    }
  ]
})
/*
router.beforeEach((to,from,next)=>{//使用导航守卫，注册一个全局前置守卫
  if(to.path==="/login"){
    next();
  }
  else{
    let token=localStorage.getItem("Authorization");
    if(token==="null"||token===""){
      next("/login");
    }
    else{
      next();
    }
  }
})
*/
export default router;
