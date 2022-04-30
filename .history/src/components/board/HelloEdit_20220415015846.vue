<template>
       <div style ="margin:30px">
        <div align="right">
            
           
             <button type="button" class="btn btn-outline-info btn-sm" v-if="editMode == editMode"  @click='write()'>수정</button>
            <button type="button" class="btn btn-outline-secondary btn-sm" @click='toBack()' >뒤로가기</button> 
        </div>
         <div class="mb-3" align="left">
            <label for="exampleFormControlInput1" class="form-label">EMPNO</label>
            <input type="text" class="form-control" v-if="modifyDetail.EMPNO"  id="exampleFormControlInput1" v-model="modifyDetail.EMPNO" >
              <input type="text" class="form-control" v-if="!modifyDetail.EMPNO"  id="exampleFormControlInput1" v-model="empno">
        </div>
         <div class="mb-3" align="left">
            <label for="exampleFormControlInput1" class="form-label">ENAME</label>
            <input type="text" class="form-control" v-if="modifyDetail.ENAME" id="exampleFormControlInput1" v-model="modifyDetail.ENAME" >
              <input type="text" class="form-control" v-if="!modifyDetail.ENAME" id="exampleFormControlInput1"  v-model="ename">
        </div>
         <div class="mb-3" align="left">
            <label for="exampleFormControlInput1" class="form-label">CONTENT</label>
            <textarea name="content" id="content"  v-if="modifyDetail.CONTENT" cols="30" rows="10" v-model="modifyDetail.CONTENT" ></textarea>
              <textarea name="content" id="content"  v-if="!modifyDetail.CONTENT" cols="30" rows="10"  v-model="content">></textarea>
        </div>
       
    </div>
</template>

<script>

export default {
 data(){
     return{
           ename :'',
           empno :'',
            content :'',
           
          modifyDetail :{}
     }
 },

 mounted(){
   this.getmodify();
 },
  
 methods:{
     toBack(){
         this.$router.push({
             name : "List"
         })
     },
      write :function(){
        if(this.editMode){
            alert("editmide" +this.editMode);
      this.$http.post('/testupdate',{ empno : this.modifyDetail.EMPNO , ename : this.modifyDetail.ENAME , content :this.modifyDetail.CONTENT}, { //파라미터릂 여기에 줘야함 ->스프링 컨트롤러에 있는 vo랑똑같은이름써저야한다!!!
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


        }else{
      this.$http.post('/testinsert',{ empno : this.empno , ename : this.ename , content :this.content}, { //파라미터릂 여기에 줘야함 ->스프링 컨트롤러에 있는 vo랑똑같은이름써저야한다!!!
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
        }
       
    },     

    getmodify:function(){ 
     
         this.$http.post('http://localhost:8080/testDetail',{empno:this.$route.query.empno} ,{
            method : 'POST',
            body : JSON.stringify({ id : 2}),
           headers : {
         'Content-Type' : 'application/json',
         'Accept' : '*/*'
           }   
        }).then(response => {
           return response
       }).then(response => {
       this.modifyDetail = response.data.list;
       console.log("rs22" + JSON.stringify(this.userDetail));
        // console.log("rs" + JSON.stringify(response.data.list));
      })
    }
 },
  created(){
        this.editMode = this.$route.params.contentId? true: false;       
        console.log("eidit" + this.editMode);
        if(this.editMode){
            this.name = this.$route.query.name;
            this.title = this.$route.query.title;
            this.content = this.$route.query.content; 
        }  
    }
}
</script>

<style>

</style>