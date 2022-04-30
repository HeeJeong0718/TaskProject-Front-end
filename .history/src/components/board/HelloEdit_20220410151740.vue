<template>
       <div style ="margin:30px">
        <div align="right">
            <button type="button" class="btn btn-outline-info btn-sm"  @click='write()'>Confirm</button>&nbsp;
            <button type="button" class="btn btn-outline-secondary btn-sm" @click='toBack()' >Cancel</button> 
        </div>
         <div class="mb-3" align="left">
            <label for="exampleFormControlInput1" class="form-label">id</label>
            <input type="text" class="form-control" id="exampleFormControlInput1"  >
        </div>
         <div class="mb-3" align="left">
            <label for="exampleFormControlInput1" class="form-label">Name</label>
            <input type="text" class="form-control" id="exampleFormControlInput1"  >
        </div>
         <div class="mb-3" align="left">
            <label for="exampleFormControlInput1" class="form-label">tel</label>
            <input type="text" class="form-control" id="exampleFormControlInput1"  >
        </div>
         <div class="mb-3" align="left">
            <label for="exampleFormControlInput1" class="form-label">auth_id</label>
            <input type="text" class="form-control" id="exampleFormControlInput1"  >
        </div>
        <div class="mb-3" align="left">
            <label for="exampleFormControlInput1" class="form-label">rank_id</label>
            <input type="text" class="form-control" id="exampleFormControlInput1" >
        </div>
        <div class="mb-3" align="left">
            <label for="exampleFormControlTextarea1" class="form-label">department_id</label>
          <input type="text" class="form-control" id="exampleFormControlInput1" >
        </div> 
          <div class="mb-3" align="left">
            <label for="exampleFormControlTextarea1" class="form-label">email</label>
           <input type="text" class="form-control" id="exampleFormControlInput1" >
        </div> 
    </div>
</template>

<script>
export default {
 data(){
     return{
          id :'',
          Name :'', 
          tel : '',
          auth_id : '',
          rank_id : '',
         department_id : "",
          email :'',
          newList :{}
     }
 },
 methods:{
     toBack(){
         this.$router.push({
             name : "List"
         })
     },
      write :function(){
      const baseURL = '';
       this.$http.post('/testinsert', { //파라미터릂 여기에 줘야함 
            method : 'POST',
            body : JSON.stringify({
                id:this.id ,
                Name:this.Name ,
                tel:this.tel ,
                auth_id:this.auth_id ,
                rank_id:this.rank_id ,
                department_id:this.department_id ,
                email:this.email ,
            }),
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