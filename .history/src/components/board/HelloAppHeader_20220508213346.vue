<template>
  <div>
        <v-app-bar
      app
      color="primary"
      dark
    >
       <v-btn text to="/board/login">
       <span class="mr-2">Home</span>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn text to="/board/register">
       <span class="mr-2">Sign up</span>
      </v-btn>
       <span class="mr-2"> USER: {{$store.state.userid}}</span> 
        <v-btn depressed color="primary" @click='loginform()'>
       <span class="mr-2" >LOGOUT</span>
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