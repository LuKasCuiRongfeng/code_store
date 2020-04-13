import ElementUI from 'element-ui'
import local from 'element-ui/lib/locale/lang/en'
import Vue from 'vue'
import axios from 'axios'
import qs from 'qs'
import App from './App.vue'
import router from './router'
import store from './store'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/animate.css'

import socketio from 'vue-socket.io'

axios.defaults.headers['Content-Type']="application/x-www-form-urlencoded;charset=UTF-8"
//允许发送cookie,一旦允许发送cookie，后端跨域不能是太宽泛的*，否则不能使用cookie
axios.defaults.withCredentials=true
//添加请求拦截器，在请求头中加token
/*
axios.interceptors.request.use(
  config=>{
    if(localStorage.getItem("Authorization")){
      config.headers.Authorization=localStorage.getItem("Authorization");
    }
    return config;
  },
  error=>{
    return Promise.reject(error);
  }
)
*/
//全局配置组局  zIndex控制弹框的z-index local国际化牛逼
Vue.use(ElementUI,{size:"small",zIndex:3000,local})
Vue.use(new socketio({
  debug:false,
  connection:"ws://localhost:8888"
}))

Vue.config.productionTip = false
Vue.prototype.axios=axios
Vue.prototype.qs=qs
//防止内存溢出
//let router=Router();
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
