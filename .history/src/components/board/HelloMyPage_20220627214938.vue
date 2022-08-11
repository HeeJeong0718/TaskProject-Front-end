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
          <v-text-field label="userpass"   prepend-icon="mdi-lock"></v-text-field>
          
          
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
        userDetail :{},
        USERID :'',
        username: '',
        dep : '',
    }
   },
  created(){
     this.getMypage();
  },
    mounted(){
           console.log("ID::" + JSON.stringify( this.$route.params.contentId));
          const USERID = this.$route.params.contentId;
             
        //this.$http.post(`${baseURL}`,{
         this.$http.post('http://localhost:8080/Mypage' ,{userid:USERID},{
            method : 'POST',
            body : JSON.stringify({ id : 2}),
           headers : {
         'Content-Type' : 'application/json',
         'Accept' : '*/*'
           }   
        }).then(response => {
           return response
       }).then(response => {
       this.userDetail = response.data.list;
       console.log("title" + JSON.stringify(response.data.list));
        // console.log("rs" + JSON.stringify(response.data.list));
      })
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
        this.username = this.myinfo.username;
      
      })
    },
   }
}
</script>

<style>

</style>