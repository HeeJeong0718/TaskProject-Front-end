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
          <v-text-field label="userpass" v-model="myinfo.USERNAME"  prepend-icon="mdi-lock"></v-text-field>
          
          
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
        myinfo :{},
        USERID :'',
        username: '',
        dep : '',
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
   }
}
</script>

<style>

</style>