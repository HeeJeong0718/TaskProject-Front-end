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
    },
    setUserID2(state, userid){
      state.userid =  sessionStorage.setItem("data",JSON.stringify(userid));
      //sessionStorage.setItem("data",JSON.stringify(userid));
    },
    clearUser(state){ //userid를 초기화 시켜서 로그아웃하게 만든다
      state.userid ="";
    }
  },
  actions: {
    setUserID2(context,userid){
       context.commit("setUserID2" , userid);
    }
  },
  modules: {
  }
})
