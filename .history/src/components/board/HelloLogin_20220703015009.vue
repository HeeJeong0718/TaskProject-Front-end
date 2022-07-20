<template>
  <v-app class="container">
    <v-card  class="hero">
      <v-card-title>
        <h1>LOGIN</h1>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field label="Username" ref="mem_id"  v-model="mem_id"  prepend-icon="mdi-account-circle"/>
           <v-text-field label="Password"  ref="mem_pwd" v-model="mem_pwd"  prepend-icon="mdi-lock"  append-icon="mdi-eye-off"/>
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
            mem_id : '', 
            mem_pwd : '',
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
        if(this.mem_id == "" || this.mem_pwd==""){
          alert("아이디와 비밀번호를 입력하세요");
            this.$refs.mem_id.focus();
            return;
        }else{
   this.$http.post('http://localhost:8080/login',{mem_id :this.mem_id , mem_pwd : this.mem_pwd ,loginlevel : this.loginlevel  },{
            method : 'POST',
            body : JSON.stringify({userid : this.userid}),
           headers : {
         'Content-Type' : 'application/json',
         'Accept' : '*/*'
           } 
        }).then(response => {
          return response;
      }).then(response => {
        this.loginSession(this.mem_id);
          console.log("dat" + this.mem_id);
          this.$store.commit('setSession' , this.mem_id);
          alert("로그인 되었습니다");
          this.mem_id =  this.$store.commit('setSession' , this.userid);
          console.log("rs" + JSON.stringify(response));
         this.user = response.data.list.MEM_ID;
         this.loginlevel = response.data.list.LOGINLEVEL;
         this.$store.commit('setUserLevel' , this.loginlevel);
        if(this.$store.state.loginlevel=="1"){
            this.$router.push({
            name : 'adminList'
         
        })
        }else{
           this.$router.push({
            //name : 'List'
            name : 'main'
        })
        }
      })
     }   
    },
    }
  
   
}
</script>

<style>
.hero {
    max-width:400px;
    margin:40px auto;
    margin-top:100px;
    padding: 40px;
}
  
</style>
