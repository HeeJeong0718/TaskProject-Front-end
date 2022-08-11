import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState("mem_id")],
  state: {
    //userid로 로그인했을때
    mem_id : '', 
    token : '',
    loginlevel : ''
   
  },
  getters: {
    getLogin(state) {
      return typeof state.token === 'string' && state.token !== ''
    },
    isLogin(state){
      return state.mem_id !== ''
    },
    getToken(state){
      return state.token
    },
    getUserId(state){
      return state.mem_id
    }
  },
  mutations: { //변화
    setUserId(state , mem_id){
      state.mem_id = mem_id;
    },
    setUserLevel(state , loginlevel){
      state.loginlevel = loginlevel;
      console.log("loginlevel" + state.loginlevel);
    },

    setUserID2(state, mem_id){
      state.mem_id =  mem_id
      sessionStorage.setItem("data",state.mem_id);
      console.log("session" + sessionStorage.getItem('data'));
    },
    clearUser(state){ //userid를 초기화 시켜서 로그아웃하게 만든다
      state.mem_id ="";
    },
    setSession(state , mem_id){
      //state.token = n.token
      state.mem_id = mem_id
    },
    logoutSession(state){
      sessionStorage.clear()
      state.userid =''
    }
  },
  actions: {
    setUserID2(context,mem_id){
       context.commit("setUserID2" , mem_id);
    },
    setUserLevel(context,loginlevel){
      context.commit("setUserLevel" , loginlevel);
   },
    loginSession(context, data){
      sessionStorage.setItem('session', JSON.stringify(data));
      context.commit('setSession',data);
    },
    getSession(context){
      const session = sessionStorage.getItem('session')
      if (session && typeof session === 'string' && session !== '') {
        const data = JSON.parse(session)
        context.commit('setSession', data)
      }
    },
    logoutSession(context){
      context.commit('logoutSession')
    }
  },
  modules: {
  }
})
