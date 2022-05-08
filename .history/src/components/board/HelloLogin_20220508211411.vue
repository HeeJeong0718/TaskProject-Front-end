<template>
  <div>
      <h2>로그인하기</h2>
      <form>
         <div>
             <label for="userid">userId</label>
             <input type="text" placeholder="userId" v-model="userid">
         </div>
         <div>
             <label for="userpass">password</label>
             <input type="text" placeholder="password"  v-model="userpass">
         </div>
      </form>
    <v-btn depressed color="primary" @click='loginform()'>login</v-btn>
  </div>
</template>

<script>
export default {
    data(){
        return{
            userid : '', 
            username : '',
            userpass : '',
            joindate  : ''
        }
    },
    methods:{
         loginform :function(){
        if(this.userid == null){
          alert("아이디를 입력하세요");
        }else{
               this.$http.post('http://localhost:8081/testlogin',{userid :this.userid , userpass : this.userpass },{
            method : 'POST',
            body : JSON.stringify({userid : this.userid}),
           headers : {
         'Content-Type' : 'application/json',
         'Accept' : '*/*'
           } 
        }).then(response => {
          return response;
      }).then(response => {
          this.$store.commit('setUserId' , this.userid);
          alert("로그인 되었습니다");
        console.log("rs" + JSON.stringify(response));
        this.$router.push({
            name : 'List'
        })
      })
     }
       //const baseURL = 'http://localhost:8080/testregister';
  
    },
    }
}
</script>

<style>

</style>
