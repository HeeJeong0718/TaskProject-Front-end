<template>
    <div style ="margin:30px">
        <div align="right">
            <button type="button" class="btn btn-outline-info btn-sm" >Modify</button>&nbsp;
            <button type="button" class="btn btn-outline-danger btn-sm" >Delete</button>&nbsp;
            <button type="button" class="btn btn-outline-secondary btn-sm" @click='toBack()' >Back</button> 
        </div>
        <div class="mb-3 row" align="left">
            <label for="staticEmail" class="col-sm-2 col-form-label">Name</label>
            <div class="col-sm-10">
            <input type="text" readonly class="form-control-plaintext"  >
            </div>
        </div>
        <div class="mb-3 row" align="left">
            <label for="staticEmail" class="col-sm-2 col-form-label">Title</label>
            <div class="col-sm-10">
            <input type="text" readonly class="form-control-plaintext" >
            </div>
        </div>
        <div class="mb-3 row" align="left">
            <label for="staticEmail" class="col-sm-2 col-form-label">Content</label>
            <div class="col-sm-10">
            <input type="text" readonly class="form-control-plaintext" >
            </div>
        </div>
        <div class="mb-3 row" align="left">
            <label for="staticEmail" class="col-sm-2 col-form-label">Last Modified</label>
            <div class="col-sm-10">
            <input type="text" readonly class="form-control-plaintext" >
            </div>
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