<template>
<v-container>
  <v-app>
       <v-card  class="mt-10 ml-5 mr-5">
      <v-card-title>
        <h1>Register</h1>
      </v-card-title>
      <v-card-text>
        <v-form>
         <v-text-field label="userid"  ref="mem_id" v-model="mem_id" prepend-icon="mdi-account-circle"></v-text-field>
          <v-text-field label="userpass"  ref="mem_pwd" v-model="mem_pwd"  prepend-icon="mdi-lock"></v-text-field>
          <v-text-field label="username" v-model="mem_nm"  prepend-icon="mdi-account-circle"></v-text-field>
         <!--return object사용시 객체상태로 들어오기때문에 json에서받을수없다 return-object삭제 *mem_dp_nm이string이니까!!--> 
        <v-select :items="departlist" v-model="DEP_ID" item-text="DEP_ID" item-value="DEP_ID" > 
       </v-select>
       <v-select :items="departlist" v-model="DEP_NM" item-text="DEP_NM" item-value="DEP_NM" >
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
        this.departlist = response.data.list;
      console.log("response.data.list::" + JSON.stringify(response.data.list));
     
      })
    },
   }
}
</script>

<style>

</style>