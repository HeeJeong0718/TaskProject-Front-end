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
        <v-select :items="test2" v-model="DEP_ID" item-text="DEP_NM" item-value="DEP_NM" return-object>
       
        </v-select>
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
           //leaderlist:[],
           test1 :[
            {"DEP_ID":"D1","DEP_NM":"개발부","DEP_NO":"1","INSERT_DATE":"2022-07-07"}
            ,{"DEP_ID":"D2","DEP_NM":"사업부","DEP_NO":"2","INSERT_DATE":"2022-07-08"}
           ],
         
       
       }
   },
   mounted(){
     this.getDepart();
   
  },
   
   methods:{
    getText:function(){
        (item) => `${item.dep_id}`
    },
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
        this.test2 = JSON.parse(response.data.list);
      console.log("response.data.list" + JSON.stringify(response.data.list));
        console.log("leader" +  JSON.stringify(this.leaderlist));
         console.log("leader2" + this.leader2);
     
     
      })
    },
   }
}
</script>

<style>

</style>