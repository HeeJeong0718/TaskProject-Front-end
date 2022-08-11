<template>
<v-container>
  <v-app>
       <v-card  class="mt-10 ml-5 mr-5">
      <v-card-title>
        <h1>MyPage</h1>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field label="USERID"  v-model="$store.state.userid" prepend-icon="mdi-account-circle"></v-text-field>
          <v-text-field label="userpass" v-model="myinfo.USERPASS"  prepend-icon="mdi-lock"></v-text-field>
          <v-text-field label="username" v-model="myinfo.USERNAME"  prepend-icon="mdi-account-circle"></v-text-field>
          <v-select :items="dep_id"  v-model ="myinfo.DEPARTMENT_ID" label="부서ID" prepend-icon="mdi-account-circle"></v-select>
          <v-select :items="dep_nm"  v-model ="myinfo.DEPARTMENT_NM" label="부서명" prepend-icon="mdi-account-circle"></v-select>
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
export default {
   data(){
    return {
        myinfo :{},
        USERID :'',
        username: '',
        department_nm: '',
        dep : '',
           dep_id : [ 'D1' , 'D2','D3'],
           dep_nm : [ '개발부' , '생산부','운영부'],
    }
   },
  created(){
     this.getMypage();
  },
   
   methods:{
      getMypage :function(){
       this.$http.post('http://localhost:8080/Mypage',{userid:this.$store.state.userid},{
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
       
      
      })
    },
   modify:function(){
            alert("!!!");
            this.$http.post('http://localhost:8080/MypageUpdate',{userid:this.$store.state.userid , username :this.myinfo.USERNAME, userpass:this.myinfo.USERPASS, department_nm : this.myinfo.DEPARTMENT_NM, department_id :this.myinfo.DEPARTMENT_ID},{ //해당 userdetial.empno를 가져온다!!
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
      })
       }
   }
}
</script>

<style>

</style>