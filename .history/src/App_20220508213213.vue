<template>
  <v-app>
    <HelloAppHeader/>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import HelloAppHeader from '@/components/board/HelloAppHeader.vue';
export default {
  name: 'App',
  components:{HelloAppHeader},
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
