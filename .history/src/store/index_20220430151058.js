import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //userid로 로그인했을때
    userid : ''
  },
  getters: {
    isLogin(state){
      return state.userid !== ''
    }
  },
  mutations: { //변화
    setUserId(state , userid){
      state.userid = userid;
    }
  },
  actions: {
  },
  modules: {
  }
})
