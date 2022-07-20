<template>
  <v-app class="container">
    <v-card  class="hero">
      <v-card-title>
        <h1>LOGIN</h1>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field label="Username" ref="userid"  v-model="userid"  prepend-icon="mdi-account-circle"/>
           <v-text-field label="Password"  ref="userpass" v-model="userpass"  prepend-icon="mdi-lock"  append-icon="mdi-eye-off"/>
        </v-form>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn color="info" @click='loginform()'>Login</v-btn>
        </v-card-actions>
      
    </v-card>

  </v-app>

</template>

<script>
import { mapActions, mapGetters  } from "vuex";
export default {
    data(){
        return{
            userid : '', 
            username : '',
            userpass : '',
            joindate  : '',
            token :'',
            loginlevel : '',
            user : ''
        }
    },
    computed:{
       ...mapGetters(['getToken', 'getUserId' ,'getSession'])

    },
    methods:{
        ...mapActions(["loginSession", "logoutSession"]),
         loginform :function(){
        if(this.userid == "" || this.userpass==""){
          alert("아이디와 비밀번호를 입력하세요");
            this.$refs.userid.focus();
            return;
        }else{
   this.$http.post('http://localhost:8080/login',{userid :this.userid , userpass : this.userpass ,loginlevel : this.loginlevel  },{
            method : 'POST',
            body : JSON.stringify({userid : this.userid}),
           headers : {
         'Content-Type' : 'application/json',
         'Accept' : '*/*'
           } 
        }).then(response => {
          return response;
      }).then(response => {
        this.loginSession(this.userid);
          console.log("dat" + this.userid);
          this.$store.commit('setSession' , this.userid);
          alert("로그인 되었습니다");
          this.userid =  this.$store.commit('setSession' , this.userid);
          console.log("rs" + JSON.stringify(response));
         this.user = response.data.list.USERID;
         this.loginlevel = response.data.list.LOGINLEVEL;
         this.$store.commit('setUserLevel' , this.loginlevel);
        if(this.$store.state.loginlevel=="1"){
            this.$router.push({
            name : 'adminList'
         
        })
        }else{
           this.$router.push({
            name : 'List'
        })
        }
      })
     }   
    },
    }
  
   
}
</script>

<style>
.container {
  width : 1500px;
}
  .hero {
    height: 90vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
</style>
