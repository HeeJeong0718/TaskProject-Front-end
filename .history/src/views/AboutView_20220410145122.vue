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
      const baseURL = '';
       this.$http.post('/testDetail' , {id:2},{
            method : 'POST',
            body : JSON.stringify({id :""}),
           headers : {
         'Content-Type' : 'application/json',
         'Accept' : '*/*'
           } 
        }).then(response => {
         console.log("rs1" + JSON.stringify(response));
      })
    },
    
   
  }
}
</script>

<style>

</style>
