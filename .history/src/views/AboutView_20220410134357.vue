<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
export default {
   data(){
     return{

     }
   },
  created(){
   this.getList();
  },
  methods:{
     getList :function(){
      const baseURL = 'http://localhost:8080/testDetail';
       this.$http.post(`${baseURL}`,{
            method : 'POST',
            mode :"no-cors",
            body : JSON.stringify({id : 2}),
           headers : {
         'Content-Type' : 'application/json',
         'Accept' : '*/*'
           } 
        }).then(response => {
          return response;
      }).then(response => {
        this.todos = response.data.list;
         console.log("rs" + JSON.stringify(response.data.list));
      })
    },
    
   
  }
}
</script>

<style>

</style>
