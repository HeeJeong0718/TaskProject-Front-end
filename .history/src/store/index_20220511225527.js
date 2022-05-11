import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //userid로 로그인했을때
    userid : '', 
    token : ''
   
  },
  getters: {
    isLogin(state){
      return state.userid !== ''
    },
    getToken(state){
      return state.token
    },
    getUserId(state){
      return state.userid
    }
  },
  mutations: { //변화
    setUserId(state , userid){
      state.userid = userid;
    },
    setUserID2(state, userid){
      state.userid =  userid
      sessionStorage.setItem("data",state.userid);
      console.log("session" + sessionStorage.getItem('data'));
    },
    clearUser(state){ //userid를 초기화 시켜서 로그아웃하게 만든다
      state.userid ="";
    },
    setSession(state , n){
      state.token = n.token
      state.userid = n.userid
    }
  },
  actions: {
    setUserID2(context,userid){
       context.commit("setUserID2" , userid);
    },
    loginSession(context, data){
      sessionStorage.setItem('session', JSON.stringify(data));
      context.commit('setSession',data);
    },
    getSession(context){
      const session = sessionStorage.getItem('session')
       const data = JSON.parse(session)
       context.commit('setSession', data)  
    }
  },
  modules: {
  }
})
