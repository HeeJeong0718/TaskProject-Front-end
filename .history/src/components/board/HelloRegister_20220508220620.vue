<template>

  <v-app>
    <v-card>
      <v-card-title>
        <h1>Register</h1>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field label="userid" v-model="userid"></v-text-field>
          <v-text-field label="userpass" v-model="userpass"></v-text-field>
          <v-text-field label="username" v-model="username"></v-text-field>
        </v-form>
      </v-card-text>
    </v-card>
  </v-app>
  <!--<div>
      <h1>회원가입</h1>
      <form>
          <div>
              <label for="userid">ID</label>
              <input type="text" placeholder="userid" v-model="userid">
          </div>
           <div>
              <label for="userpass">Password</label>
              <input type="text" placeholder="userpass" v-model="userpass">
          </div>
           <div>
              <label for="username">USERNAEM</label>
              <input type="text" placeholder="username" v-model="username">
          </div>
      </form>
      <button type="button" class="btn btn-outline-secondary btn-sm" @click='insertform()' >수정</button>		
  </div>
  -->
</template>

<script>
export default {
   data(){
       return {
           userid :'',
           userpass :'',
           username :''
       }
   },
   methods:{
    insertform :function(){
       //const baseURL = 'http://localhost:8080/testregister';
       this.$http.post('http://localhost:8081/testregister',{userid :this.userid , userpass : this.userpass , username : this.username},{
            method : 'POST',
            body : JSON.stringify({userid : this.userid}),
           headers : {
         'Content-Type' : 'application/json',
         'Accept' : '*/*'
           } 
        }).then(response => {
          return response;
      }).then(response => {
          alert("회원가입이 완료되었습니다");
        console.log("rs" + JSON.stringify(response));
        this.$router.push({
            name : 'home'
        })
         
      })
    },
   }
}
</script>

<style>

</style>