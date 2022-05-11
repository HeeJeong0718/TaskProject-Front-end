<template>
  <v-app>
    <v-card  class="mt-10 ml-5 mr-5">
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
  <!--<div>
      <h2>로그인하기</h2>
      <form>
         <div>
             <label for="userid">userId</label>
             <input type="text" placeholder="userId" ref="userid" v-model="userid" autofocus>
         </div>
         <div>
             <label for="userpass">password</label>
             <input type="text" placeholder="password" ref="userpass"  v-model="userpass">
         </div>
      </form>
    <v-btn depressed color="primary" @click='loginform()'>login</v-btn>
  </div>
  -->
</template>

<script>
export default {
    data(){
        return{
            userid : '', 
            username : '',
            userpass : '',
            joindate  : ''
        }
    },
    methods:{
         loginform :function(){
        if(this.userid == "" || this.userpass==""){
          alert("아이디와 비밀번호를 입력하세요");
            this.$refs.userid.focus();
            return;
        }else{
               this.$http.post('http://localhost:8081/testlogin',{userid :this.userid , userpass : this.userpass },{
            method : 'POST',
            body : JSON.stringify({userid : this.userid}),
           headers : {
         'Content-Type' : 'application/json',
         'Accept' : '*/*'
           } 
        }).then(response => {
          return response;
      }).then(response => {
          this.$session.set('setUserId' , this.userid);
          this.$store.commit('setUserId' , this.userid);
          alert("로그인 되었습니다");
          //this.$session.set('setUserId' , this.userid);
        console.log("rs" + JSON.stringify(response));
        this.$router.push({
            name : 'List'
        })
      })
     }
       //const baseURL = 'http://localhost:8080/testregister';
  
    },
    }
}
</script>

<style>

</style>
