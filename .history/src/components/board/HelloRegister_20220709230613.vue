<template>
<v-container>
  <v-app>
       <v-card  class="mt-10 ml-5 mr-5">
      <v-card-title>
        <h1>Register</h1>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field label="userid"  ref="userid" v-model="userid" prepend-icon="mdi-account-circle"></v-text-field>
          <v-text-field label="userpass"  ref="userpass" v-model="userpass"  prepend-icon="mdi-lock"></v-text-field>
          <v-text-field label="username" v-model="username" prepend-icon="mdi-account-circle"></v-text-field>
          
       </v-form>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn color="info" @click='insertform()'>SING UP</v-btn>
      </v-card-actions>
    </v-card>
  </v-app>
 </v-container>
</template>

<script>
export default {
   data(){
       return {
           userid :'',
           userpass :'',
           username :'',
           department2:'',
           dep_id :'',
           //department :'',
           leader: [],
           department : [[{}]],
           //departments : [this.DEP_ID],
           //dep_id : [ 'D1' , 'D2','D3'],
           dep_nm : [ '개발부' , '생산부','운영부'],
           department_nm : '', 
           department_id : '', 
       }
   },
   mounted(){
     this.getDepart();
   
  },
   
   methods:{
    insertform :function(){
       this.$http.post('http://localhost:8081/taskregister',{userid :this.userid , userpass : this.userpass , username : this.username ,department_nm : this.department_nm, department_id : this.department_id },{
            method : 'POST',
            body : JSON.stringify({userid : this.userid}),
           headers : {
         'Content-Type' : 'application/json',
         'Accept' : '*/*'
           } 
        }).then(response => {
          return response;
      }).then(response => {
          if(this.userid == "" || this.userpass==""){
          alert("아이디와 비밀번호를 입력하세요");
            this.$refs.userid.focus();
            return;
        }else{
          alert("회원가입이 완료되었습니다");
        console.log("rs" + JSON.stringify(response));
        this.$router.push({
            name : 'login'
        })
        }  
      })
    },
       getDepart :function(){
       this.$http.post('http://localhost:8080/departlist',{},{
            method : 'POST',
            body : JSON.stringify({userid : this.userid}),
           headers : {
         'Content-Type' : 'application/json',
         'Accept' : '*/*'
           } 
        }).then(response => {
          return response;
      }).then(response => {
        this.leader = JSON.stringify(response.data.list);
         console.log("rs" + JSON.stringify(response.data.list));
          console.log("leader" + this.leader);
     
      })
    },
   }
}
</script>

<style>

</style>