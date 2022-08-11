<template>
  <div>
    <v-navigation-drawer app v-model="drawer" clipped>
      Navigation Lists
      </v-navigation-drawer>
    <v-app-bar app color="primary" dark  v-if="isUserlogin">
        <v-app-bar-nav-icon  @click="drawer =! drawer"></v-app-bar-nav-icon>
       <v-btn text to="/main">
       <span class="mr-2">Home</span>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn depressed color="primary" @click='UserList($store.state.mem_id)'>
       <span class="mr-2">  User : {{$store.state.mem_id}} </span> 
       <span class="mr-2">  Level : {{$store.state.loginlevel}}</span> 
       </v-btn>
        <v-btn depressed color="primary" @click='logoutUser()'>
       <span class="mr-2" >LOGOUT</span>
      </v-btn> 
      </v-app-bar>
     <v-app-bar app color="primary" dark  v-else>
       <v-btn text to="/board/login">
       <span class="mr-2">Home</span>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn text to="/board/register">
       <span class="mr-2">Sign up</span>
      </v-btn>
      </v-app-bar>
  </div>
</template>

<script>
export default {
  data(){
    return{
      drawer : null
    }
  },
  computed:{
		isUserlogin(){
			return this.$store.getters.isLogin;
		}
	},
    methods:{
		logoutUser(){
			alert("로그아웃합니다");
			this.$store.commit('clearUser');
			//현재주소와 이동할 주소를 비교해서 실행
			if(this.$route.path!=='/') this.$router.push('/')
			
			
		},
    UserList(userid){
      alert("userid" + userid);
      if(this.$store.state.loginlevel =="1"){
            this.$router.push({
            name : 'adminList'
         
        })
        }else{
           this.$router.push({
            name : 'MyPage',
            param : { contentId : `$store.state.userid`}
        })
        }
  }
 }
}
</script>

<style>

</style>