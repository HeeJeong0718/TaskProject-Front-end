<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
    <HelloTest/>
    <!--<v-btn text to="/board/login">
       <span class="mr-2">Home</span>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn text to="/board/register">
       <span class="mr-2">Sign up</span>
      </v-btn>
       <span class="mr-2"> USER: {{$store.state.userid}}</span> 
       <v-btn href="javascript:;" @click="logoutUser">
       <span class="mr-2" >LOGOUT</span>
      </v-btn>-->
    </v-app-bar>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import HelloTest from '@/components/board/HelloTest.vue';
export default {
  name: 'App',
  components:{HelloTest},
  data: () => ({
    //
  }),
  methods:{
		logoutUser(){
			alert("로그아웃합니다");
			this.$store.commit('clearUser');
			//현재주소와 이동할 주소를 비교해서 실행
			if(this.$route.path!=='/') this.$router.push('/')
			
			
		}
  }
};
</script>
