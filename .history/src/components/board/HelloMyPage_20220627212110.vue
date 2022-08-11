<template>
<v-container>
  <v-app>
       <v-card  class="mt-10 ml-5 mr-5">
      <v-card-title>
        <h1>MyPage</h1>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field label="userid"  ref="userid" v-model="userid" prepend-icon="mdi-account-circle"></v-text-field>
          <v-text-field label="userpass"  ref="userpass" v-model="userpass"  prepend-icon="mdi-lock"></v-text-field>
          <v-text-field label="username" v-model="username" prepend-icon="mdi-account-circle"></v-text-field>
          <v-select :items="dep_id" label="부서ID"></v-select>
          <v-select :items="dep_nm" label="부서명"></v-select>
        </v-form>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
      
      </v-card-actions>
    </v-card>
  </v-app>
 </v-container>
</template>
<script>
export default {
   data(){
    return {
        myinfo :''
    }
   },
   created(){
      this.getMypage();
   },
   methods:{
      getMypage :function(){
       this.$http.post('http://localhost:8080/Mypage',{userid:this.$store.state.userid, loginlevel : this.$store.state.loginlevel},{
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
         console.log("rs" + JSON.stringify(response.data.list));
         console.log("this.boards" + JSON.stringify(this.boards));
      })
    },
   }
}
</script>

<style>

</style>