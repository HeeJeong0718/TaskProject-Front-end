import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //userid로 로그인했을때
    userid : '',
    username :''
  },
  getters: {
    isLogin(state){
      return state.userid !== ''
    }
  },
  mutations: { //변화
    setUserId(state , userid){
      state.userid = userid;
    },
    setUserName(state , username){
      state.username = username;
      console.log("usernaem" + username);
    },
    clearUser(state){ //userid를 초기화 시켜서 로그아웃하게 만든다
      state.userid ="";
    }
  },
  actions: {
  },
  modules: {
  }
})