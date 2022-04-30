<template>
       <div style ="margin:30px">
        <div align="right">
            <button type="button" class="btn btn-outline-info btn-sm"  @click='write()'>Confirm</button>&nbsp;
            <button type="button" class="btn btn-outline-secondary btn-sm" @click='toBack()' >Cancel</button> 
        </div>
         <div class="mb-3" align="left">
            <label for="exampleFormControlInput1" class="form-label">EMPNO</label>
            <input type="text" class="form-control" id="exampleFormControlInput1" v-model="ENAME">
        </div>
         <div class="mb-3" align="left">
            <label for="exampleFormControlInput1" class="form-label">ENAME</label>
            <input type="text" class="form-control" id="exampleFormControlInput1"  >
        </div>
         <div class="mb-3" align="left">
            <label for="exampleFormControlInput1" class="form-label">HIRE_DATE</label>
            <input type="text" class="form-control" id="exampleFormControlInput1"  >
        </div>
       
    </div>
</template>

<script>
export default {
 data(){
     return{
           EMPNO :'',
           ENAME :'', 
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
       this.$http.post('/testinsert',{ENAME:ENAME}, { //파라미터릂 여기에 줘야함 
            method : 'POST',
            body : JSON.stringify({
               
                ENAME:this.ENAME 
               
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