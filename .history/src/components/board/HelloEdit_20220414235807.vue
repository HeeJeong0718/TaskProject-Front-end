<template>
       <div style ="margin:30px">
        <div align="right">
            <button type="button" class="btn btn-outline-info btn-sm"  @click='write()'>Confirm</button>&nbsp;
            <button type="button" class="btn btn-outline-secondary btn-sm" @click='toBack()' >Cancel</button> 
        </div>
         <div class="mb-3" align="left">
            <label for="exampleFormControlInput1" class="form-label">EMPNO</label>
            <input type="text" class="form-control" id="exampleFormControlInput1" >
        </div>
         <div class="mb-3" align="left">
            <label for="exampleFormControlInput1" class="form-label">ENAME</label>
            <input type="text" class="form-control" id="exampleFormControlInput1" v-model="ename">
        </div>
         <div class="mb-3" align="left">
            <label for="exampleFormControlInput1" class="form-label">CONTENT</label>
            <textarea name="content" id="content" cols="30" rows="10" v-model="content"></textarea>
        </div>
       
    </div>
</template>

<script>
import func from 'vue-editor-bridge';
export default {
 data(){
     return{
           ename :'',
            content :'',
         
          newList :{}
     }
 },
 created(){
    this.getmodify();
    /*this.editMode = this.$route.query.name ? true : false;
    if(this.editMode){
        this.ename = this.$router.query.name;
    }*/
    
 },
 methods:{
     toBack(){
         this.$router.push({
             name : "List"
         })
     },
      write :function(){
      const baseURL = '';    
       this.$http.post('/testinsert',{ename:this.ename , content : this.content}, { //파라미터릂 여기에 줘야함 ->스프링 컨트롤러에 있는 vo랑똑같은이름써저야한다!!!
            method : 'POST',
            body : JSON.stringify({
               
               ename:this.ename
               
            }),
           headers : {
         'Content-Type' : 'application/json',
         'Accept' : '*/*'
           } 
        }).then(response => {
         console.log("rs1" + JSON.stringify(response));
         alert("작성되었습니다!!");
          this.$router.push({
             name : "List"
         })
      
      })
    },
    getmodify:function(){
         this.$http.post('http://localhost:8080/testDetail' ,{
            method : 'POST',
            body : JSON.stringify({ id : 2}),
           headers : {
         'Content-Type' : 'application/json',
         'Accept' : '*/*'
           }   
        }).then(response => {
           return response
       }).then(response => {
       this.userDetail = response.data.list;
       console.log("rs22" + JSON.stringify(this.userDetail));
        // console.log("rs" + JSON.stringify(response.data.list));
      })
    }
 }
}
</script>

<style>

</style>