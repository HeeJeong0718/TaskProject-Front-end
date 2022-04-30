<template>
  <div>
      <h1>회원가입</h1>
      <form>
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
      <button type="button" class="btn btn-outline-secondary btn-sm" @click='insertform()' >수정</button>		
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
   methods:{
    insertform :function(){
        alert("!!!!");
       //const baseURL = 'http://localhost:8080/testregister';
       this.$http.post('http://localhost:8081/testregister',{userid :this.userid , userpass : this.userpass , username : this.username},{
            method : 'POST',
            body : JSON.stringify({userid : this.userid}),
           headers : {
         'Content-Type' : 'application/json',
         'Accept' : '*/*'
           } 
        }).then(response => {
          return response;
      }).then(response => {
         console.log("rs" + JSON.stringify(response.userid));
      })
    },
   }
}
</script>

<style>

</style>