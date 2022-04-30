<template>
       <div style ="margin:30px">
        <div align="right">
            <button type="button" class="btn btn-outline-info btn-sm" >Confirm</button>&nbsp;
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

     }
 },
 methods:{
     toBack(){
         this.$router.push({
             name : "List"
         })
     }
 }
}
</script>

<style>

</style>