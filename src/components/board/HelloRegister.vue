<template>
  <div>
    <h1 class="subheading grey--text">Register</h1>  
  <v-container class="my-6">
    <v-layout row wrap>
      <v-flex xs12 md6>
        <v-card class="pa-5" height="auto">
          <div class="mt-4" align="left">
            <v-text-field label="userid"  ref="mem_id" v-model="mem_id" prepend-icon="mdi-account-circle"></v-text-field>
          </div>
        
         <div class="mt-4" align="left">
          <v-text-field label="userpass"  ref="mem_pwd" v-model="mem_pwd"  prepend-icon="mdi-lock"></v-text-field>
         </div>
         <div class="mt-4" align="left">
          <v-text-field label="username" v-model="mem_nm"  prepend-icon="mdi-account-circle"></v-text-field>
         </div>
          <div class="mb-3" align="left">
            <v-select :items="departlist" v-model="DEP_ID" item-text="DEP_ID" item-value="DEP_ID" > 
            </v-select>
          </div>
          <div class="mb-3" align="left">  
            <v-select :items="departlist" v-model="DEP_NM" item-text="DEP_NM" item-value="DEP_NM" >
           </v-select> 
          </div>
         <div class="my-5" align="left">
          <v-btn color="info" @click='insertform()'>SING UP</v-btn>
       </div>
        </v-card>
      </v-flex>
    </v-layout>
 </v-container>
</div>
</template>

<script>
  import axios from "axios";

export default {
   data(){
       return {
        mem_id :'',
        mem_pwd :'',
        mem_nm:'',
        mem_dp_nm:'',
        username:'',
        mem_dp_id :'',
        DEP_ID:'',
        DEP_NM :'',
           //leaderlist:[],
           test1 :[
            {"DEP_ID":"D1","DEP_NM":"개발부","DEP_NO":"1","INSERT_DATE":"2022-07-07"}
            ,{"DEP_ID":"D2","DEP_NM":"사업부","DEP_NO":"2","INSERT_DATE":"2022-07-08"}
    
           ],
           
           departlist :[{}],

       }
   },
   mounted(){
     this.getDepart();
   
  },
   
   methods:{
  
 insertform :function(){
       
     if(this.mem_id == ""){
       alert("아이디를 입력하세요");
       return;
     }
     if(this.mem_pwd == ""){
       alert("비밀번호를 입력하세요");
       return;
     }
       this.$http.post('http://localhost:8080/taskregister',{
        mem_id :this.mem_id , mem_pwd : this.mem_pwd , mem_nm : this.mem_nm , loginlevel : '2',
          mem_dp_id : this.DEP_ID, mem_dp_nm : this.DEP_NM},
          {
            method : 'POST',
            body : JSON.stringify({userid : this.userid}),
           headers : {
         'Content-Type' : 'application/json',
         'Accept' : '*/*'
           } 
        }).then(response => {
          return response;
      }).then(response => {
        console.log("rs" + JSON.stringify(response));
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
      axios.get('http://localhost:8080/departlist',{
          
         })
      .then(response =>{
      this.departlist = response.data.list 
      })
      .catch(error =>{
      console.log(error);
      })
    },
   }
}
</script>

<style>

</style>