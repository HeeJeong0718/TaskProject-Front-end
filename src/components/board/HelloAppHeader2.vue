<template>
  <nav>
   <v-app-bar flat app  v-if="isUserlogin">
    <v-app-bar-nav-icon class="grey--text" @click="drawer=!drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase grey--text">
      <span class="font-weight-light">Todo</span>
      <span>Ninja</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text color="grey">
        <span class="mr-2">Sign out</span> 
        <v-icon>mdi-email</v-icon>
      </v-btn>
    </v-app-bar>
    <v-app-bar flat app  v-else>
      <v-btn text to="/board/login">
        <span class="mr-2">Home</span>
       </v-btn>
       <v-spacer></v-spacer>
       <v-btn text to="/board/register">
        <span class="mr-2">Sign up</span>
       </v-btn>
      </v-app-bar>

    <v-navigation-drawer v-model="drawer" app  id="pstyle">
      <v-list dense nav>
      <v-list-item
        v-for="item in items" router :to="item.route"
        :key="item.title" link >
        <v-list-item-icon>
          <v-icon class="white--text">{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title class="white--text">{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    </v-navigation-drawer> 

  </nav>

</template>

<script>
export default {
  data(){
    return{
      drawer : false,
      items:[
        { icon :'mdi-view-dashboard', title2 : 'Dashboard', title:'업무일지', route :'/board/list'},
          {icon :'mdi-folder',title2 : 'mdi-view-folder' ,title:'새글작성', route :'/board/edit'},
            {icon :'mdi-lock',title2 : '메뉴3',title:'Dashboar3', route :'/'}
      ]
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
 #pstyle{
   background-color: #9652ff;
 }
</style>