<template>
  <nav>
    <v-app-bar flat app   v-if="isUserlogin">
      <v-app-bar-nav-icon class="grey--text" @click="drawer=!drawer"></v-app-bar-nav-icon>
     <v-btn text color="grey"  text to="/board/list">
      <span class="font-weight-light">Home</span>
    </v-btn>
    <span class="pl-3 grey--text">{{today}}</span> 
    <v-spacer></v-spacer>
    <v-btn depressed text color="grey" @click='UserList($store.state.mem_id)'>
     <span class="mr-2">  User : {{$store.state.mem_id}} </span> 
     <span class="mr-2">  Level : {{$store.state.loginlevel}}</span> 
     </v-btn>
      <v-btn depressed text color="grey" @click='logoutUser()'>
     <span class="mr-2" >LOGOUT</span>
    </v-btn> 
    </v-app-bar>
   <v-app-bar flat app  v-else>
     <v-btn text color="grey" text to="/board/login">
     <span class="font-weight-light">Home</span>
    </v-btn>
    <v-spacer></v-spacer>
    <v-btn  text color="grey" text to="/board/register">
     <span  class="font-weight-light">Sign up</span>
    </v-btn>
    </v-app-bar>

  <!--  <v-navigation-drawer app v-model="drawer">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Application
          </v-list-item-title>
          <v-list-item-subtitle>
            subtext
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list>
        <v-list-item v-for="item in items" :key="item.title" router :to="item.route">
        <v-list-item-content>
          <v-list-item-title>{{item.title}}</v-list-item-title>
        </v-list-item-content>
        </v-list-item>
      </v-list>
      </v-navigation-drawer>-->
    <v-navigation-drawer app v-model="drawer" id="pstyle">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="white--text">
            My Dashboard {{$store.state.mem_id}}
          </v-list-item-title>
          <v-list-item-subtitle class="white--text">
            현재시간 {{now}}
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list v-if="$store.state.mem_id == 'admin'"
        dense
        nav
      >
        <v-list-item 
          v-for="item in Admin"
          :key="item.title"
          router :to="item.route"
          link
        >  
          <v-list-item-icon>
            <v-icon class="white--text">{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="white--text">{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-list v-else
        dense
        nav
      >
        <v-list-item 
          v-for="item in User"
          :key="item.title"
          router :to="item.route"
          link
        >  
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
      now : "00:00:00",
      today : 'yyyyMMdd',
      drawer : false,
      User:[
        {icon :'mdi-lock',title2 : '부서',title:'Dashboard', route :'/board/dashboard'},
        {icon :'mdi-folder',title2 : 'mdi-view-folder' ,title:'새글작성', route :'/board/edit'},
        { icon :'mdi-view-dashboard', title2 : 'Dashboard', title:'업무일지', route :'/board/list'}
      ],
      Admin:[
          { icon :'mdi-view-dashboard', title2 : 'Dashboard', title:'업무일지2', route :'/board/list'},
          {icon :'mdi-folder',title2 : 'mdi-view-folder' ,title:'새글작성2', route :'/board/edit'},
          {icon :'mdi-lock',title2 : '부서',title:'부서2', route :'/admin/department'}
      ]
    }
  },
  computed:{
		isUserlogin(){
			return this.$store.getters.isLogin;
		}
	},
  mounted(){
   this.setTime();
   this.setDate();
  },
    methods:{
         //시계만들기
         setTime(){
        setInterval(() =>{
          const date = new Date()
          this.now = date.getHours() + ":" + 
          this.checkSingleDegit(date.getMinutes()) + ":" + this.checkSingleDegit(date.getSeconds());
        },1000)
      },
      checkSingleDegit(digit){
        return('0' + digit).slice(-2)
      },
      setDate(){
        const date = new Date();
        const year = date.getFullYear();
        const month = date.getMonth()+1;
        const day = date.getDate();
       const today = year + "년" + month +"월" + day +"일" ;
       this.today = today;
        console.log("today" + today);
     
      },
		logoutUser(){
			alert("로그아웃합니다");
			this.$store.commit('clearUser');
			//현재주소와 이동할 주소를 비교해서 실행
			if(this.$route.path!=='/') this.$router.push('/')
			
			
		},
    UserList(userid){
      alert("userid" + userid);
      this.$router.push({
        name :'MyPage',
        param : { contentId : `$store.state.mem_id`}
      })
   
      /*if(this.$store.state.loginlevel =="1"){
            this.$router.push({
            name : 'adminList'
         
        })
        }else{
           this.$router.push({
            name : 'MyPage',
            param : { contentId : `$store.state.userid`}
        })
        }*/
    }
 }
}
</script>

<style>
 #pstyle{
   background-color: #9652ff;
 }
</style>