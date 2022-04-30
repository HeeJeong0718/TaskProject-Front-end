<template>
       <div style ="margin:30px">
        <div align="right">
            <button type="button" class="btn btn-outline-info btn-sm" >Confirm</button>&nbsp;
            <button type="button" class="btn btn-outline-secondary btn-sm" @click='toBack()' >Cancel</button> 
        </div>
         <div class="mb-3" align="left">
            <label for="exampleFormControlInput1" class="form-label">Name</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" :disabled="this.editMode" v-model="name" >
        </div>
        <div class="mb-3" align="left">
            <label for="exampleFormControlInput1" class="form-label">Title</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" v-model= "title">
        </div>
        <div class="mb-3" align="left">
            <label for="exampleFormControlTextarea1" class="form-label">Content</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model= "content"></textarea>
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