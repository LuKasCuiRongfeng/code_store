import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //存储token
    //Authorization:localStorage.getItem("Authorization")?
    //localStorage.getItem("Authorization"):""
    loginState:false
  },
  mutations: {
    //修改token，并把token存入localStorage
    //changeLogin(state, user){
      //state.Authorization=user.Authorization;
      //localStorage.setItem("Authorization",user.Authorization);
    //}
    changeState(state,newState){
      state.loginState=newState;
    }
  },
  actions: {

  }
})
