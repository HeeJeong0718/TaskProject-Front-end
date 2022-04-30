<template>
  <div>
      <h1>회원가입</h1>
      <form @submit.prevent="submitform">
          <div>
              <label for="userid">ID</label>
              <input type="text" placeholder="userid" v-model="userid">
          </div>
           <div>
              <label for="userpass">Password</label>
              <input type="text" placeholder="userpass" v-model="userpass">
          </div>
           <div>
              <label for="username">USERNAEM</label>
              <input type="text" placeholder="username" v-model="username">
          </div>
      </form>
      <button type="submit">회원가입하기</button>
  </div>
</template>

<script>
export default {
   data(){
       return {
           userid :'',
           userpass :'',
           username :''
       }
   },
   method:{
    submitform :function(){
      const baseURL = 'http://localhost:8080/testregister';
       this.$http.post(`${baseURL}`,{userid :this.USERID , userpass : this.USERPASS , username : this.USERNAME},{
            method : 'POST',
            body : JSON.stringify({name : ''}),
           headers : {
         'Content-Type' : 'application/json',
         'Accept' : '*/*'
           } 
        }).then(response => {
          return response;
      }).then(response => {
         console.log("rs" + JSON.stringify(response.data.list));
      })
    },
   }
}
</script>

<style>

</style>