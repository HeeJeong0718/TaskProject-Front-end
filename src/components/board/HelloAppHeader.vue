<template>
  <div>
    <v-app-bar app color="primary" dark  v-if="isUserlogin">
       <v-btn text to="/board/login">
       <span class="mr-2">Home</span>
      </v-btn>
      <v-spacer></v-spacer>
       <span class="mr-2"> USER: {{$store.state.userid}}</span> 
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
			
			
		}
  }
}
</script>

<style>

</style>