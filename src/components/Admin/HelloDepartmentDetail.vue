<template>
  <div>
    <h1 class="subheading grey--text">부서관리</h1>
   <v-container class="my-6">
      <v-layout row wrap>
        <v-flex xs12 md6>
          <v-card class="pa-5">
        
            <div class="mt-4" align="left">
              <v-text-field dense label="DEP_NO" v-model="depart_detail.DEP_NO"/>
          </div>
          <div class="mt-4" align="left">
            <v-text-field dense label="DEP_ID" v-model="depart_detail.DEP_ID"/>
          </div>
          
          <div class="mt-4" align="left">
             <v-text-field dense label="DEP_NM"  v-model="depart_detail.DEP_NM"/>
          </div>
          <div class="mt-4" align="left">
            <v-text-field dense label="INSERT_DATE"  v-model="depart_detail.INSERT_DATE"/>         
          </div>
        <v-btn  depressed color="primary" @click='modify()'>수정</v-btn>
        <v-btn depressed color="error" @click='del()'>삭제</v-btn>
        <v-btn depressed @click='goback()' >back</v-btn>
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
      depart_detail :'',
      department : [],
      dep_id:'',
      DEP_NO  :'',  
    }
   },

   mounted(){
          const DEP_NO = this.$route.params.contentId;
      axios.get('http://localhost:8080/depDetail',{
          params:{
            dep_no:DEP_NO
          }
         })
      .then(response =>{
      this.depart_detail = response.data.list 
      })
      .catch(error =>{
      console.log(error);
      }) 
    },
    methods:{
          
      modify:function(){
          this.$http.put('http://localhost:8080/depUpdate',{dep_no :this.depart_detail.DEP_NO, dep_id :this.depart_detail.DEP_ID, dep_nm :this.depart_detail.DEP_NM},{
          method : 'PUT',
          body : JSON.stringify({}),
         headers : {
       'Content-Type' : 'application/json',
       'Accept' : '*/*'
         }   
      }).then(response => {
         return response
     }).then(response => {
         console.log("rs22" + JSON.stringify(response));
      alert("수정하시겠습니까?");
        if(this.$store.state.loginlevel=="1"){
          this.$router.push({
          name : 'adminList'
       
      })
      }else{
         this.$router.push({
          name : 'List'
      })
      }
       console.log("rs22" + JSON.stringify(response));
    })
     }
   ,
        del:function(){
          const dep_no = this.depart_detail.DEP_NO;
          alert("dep_no" + dep_no);
          axios.delete('http://localhost:8080/depDelete/'+`${dep_no}`,{ 
          method : 'DELETE',
          body : JSON.stringify({}),
         headers : {
       'Content-Type' : 'application/json',
       'Accept' : '*/*'
         }   
      }).then(response => {
         return response
     }).then(response => {
      alert("삭제하시겠습니까?");
        if(this.$store.state.loginlevel=="1"){
          this.$router.push({
          name : 'department'
       
      })
      }
      console.log("rs22" + JSON.stringify(response));
      // console.log("rs" + JSON.stringify(response.data.list));
    })
     },
    
    
     goback(){
      if(this.$store.state.loginlevel =="1"){
          this.$router.push({
          name : 'department'
       
      })
      }
   },
    
}}

</script>

<style>

</style>