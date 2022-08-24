<template>
<v-container>
  <v-app>
       <v-card  class="mt-10 ml-5 mr-5">
      <v-card-title>
        <h1>MyPage</h1>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field label="USERID"  v-model="$store.state.mem_id" prepend-icon="mdi-account-circle"></v-text-field>
          <v-text-field label="userpass" v-model="myinfo.MEM_PWD"  prepend-icon="mdi-lock"></v-text-field>
          <v-text-field label="username" v-model="myinfo.MEM_NM"  prepend-icon="mdi-account-circle"></v-text-field>
          <v-select :items="departlist" v-model="myinfo.MEM_DP_ID" prepend-icon="mdi-folder" item-text="DEP_ID" item-value="DEP_ID" > 
          </v-select>
          <v-select :items="departlist" v-model="myinfo.MEM_DP_NM"  prepend-icon="mdi-folder" item-text="DEP_NM" item-value="DEP_NM" > 
          </v-select>
          
        </v-form>
      </v-card-text>
      <v-divider></v-divider>
      
      <v-card-actions>
        <v-btn depressed color="primary" @click='modify()'>수정</v-btn>
         <v-btn depressed @click='goback()' >back</v-btn>
      </v-card-actions>
    </v-card>
  </v-app>
 </v-container>
</template>
<script>
import axios from "axios";
export default {
   data(){
    return {
        myinfo :{},
        USERID :'',
        username: '',
        department : '',
        dep : '',
        DEP_ID : '', 
        departlist :[{}],
           
    }
   },
  created(){
     this.getMypage();
   
  },
  mounted(){
     this.getDepart();
   
  },
   methods:{
      getMypage :function(){
       this.$http.post('http://localhost:8080/Mypage',{mem_id:this.$store.state.mem_id},{
            method : 'POST',
            body : JSON.stringify({userid : this.userid}),
           headers : {
         'Content-Type' : 'application/json',
         'Accept' : '*/*'
           } 
        }).then(response => {
          return response;
      }).then(response => {
        this.myinfo = response.data.list;
        console.log("myinfo::" + JSON.stringify(response.data.list));
       
      
      })
    },
    getDepart :function(){
      axios.get('http://localhost:8080/departlist',{
        headers : {
         'Content-Type' : 'application/json',
         'Accept' : '*/*'
           }  
         })
      .then(response =>{
      this.departlist = response.data.list;
      })
      .catch(error =>{
      console.log(error);
      })
    },


   modify:function(){
            this.$http.post('http://localhost:8080/MypageUpdate',{mem_id:this.$store.state.mem_id , mem_nm :this.myinfo.MEM_NM, mem_pwd:this.myinfo.MEM_PWD, mem_dp_id :this.myinfo.MEM_DP_ID, mem_dp_nm : this.myinfo.MEM_DP_NM},{ //해당 userdetial.empno를 가져온다!!
            method : 'POST',
            body : JSON.stringify({ username :this.myinfo.USERNAME}),
           headers : {
         'Content-Type' : 'application/json',
         'Accept' : '*/*'
           }   
        }).then(response => {
           return response
       }).then(response => {
        this.myinfo = response.data.list; 
         console.log("rs22" + JSON.stringify(response.data.list));
         alert("수정되었습니다");
         this.getMypage();
      })
     },
       goback(){
        if(this.$store.state.loginlevel =="1"){
            this.$router.push({
            name : 'adminList'
         
        })
        }else{
           this.$router.push({
            name : 'List'
        })
        }
     },

   }
}
</script>

<style>

</style>