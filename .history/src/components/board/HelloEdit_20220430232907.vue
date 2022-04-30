<template>
       <div style ="margin:30px">
        <div align="right">
             <!--<button type="button" class="btn btn-outline-info btn-sm" v-if="editMode == editMode"  @click='write()'>수정</button>-->
            <button type="button" class="btn btn-outline-secondary btn-sm" @click='toBack()' >뒤로가기</button> 
            <button type="button" class="btn btn-outline-info btn-sm"  @click='write()'>작성</button>
        </div>
          <div class="mb-3" align="left">
            <label for="exampleFormControlInput1" class="form-label">UserID</label>
            <input type="text" class="form-control"   id="exampleFormControlInput1" v-model=$store.state.userid>  
        </div>
          <div class="mb-3" align="left">
            <label for="exampleFormControlInput1" class="form-label">UserID</label>
            <input type="text" class="form-control"   id="exampleFormControlInput1" v-model="username">  
        </div>
         <div class="mb-3" align="left">
            <label for="exampleFormControlInput1"     class="form-label">Titel</label>
            <input type="text" class="form-control"   id="exampleFormControlInput1" v-model="title" >
            
        </div>
         <div class="mb-3" align="left">
            <label for="exampleFormControlInput1" class="form-label">CONTENT</label>
            <textarea name="content" id="" cols="30" rows="10" v-model="content"></textarea>
        </div>
    </div>
</template>

<script>

export default {
 data(){
     return{
           username :'',
           userid :this.$store.state.userid, //this붙이는거잊지말기
           title :'',
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
        write:function(){
        this.$http.post('/testinsert',{ userid : this.userid , usrename : this.username, title :this.title, content : this.content}, { //파라미터릂 여기에 줘야함 ->스프링 컨트롤러에 있는 vo랑똑같은이름써저야한다!!!
            method : 'POST',
            body : JSON.stringify({}),
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
      
     /* write :function(){
        if(this.editMode){
            alert("editmide" +this.editMode);
      this.$http.post('/testupdate',{ empno : this.modifyDetail.EMPNO , ename : this.modifyDetail.ENAME , content :this.modifyDetail.CONTENT}, { //파라미터릂 여기에 줘야함 ->스프링 컨트롤러에 있는 vo랑똑같은이름써저야한다!!!
            method : 'POST',
            body : JSON.stringify({
               
               ename:this.ename
               
            }),
           headers : {
         'Content-Type' : 'application/json',
         'Accept' : '
           } 
        }).then(response => {
         console.log("rs1" + JSON.stringify(response));
         alert("작성되었습니다!!");
          this.$router.push({
             name : "List"
         })

        })


        }else{
      this.$http.post('/testinsert',{ userid : this.userid , title :this.title, content : this.content}, { //파라미터릂 여기에 줘야함 ->스프링 컨트롤러에 있는 vo랑똑같은이름써저야한다!!!
            method : 'POST',
            body : JSON.stringify({
               
               ename:this.ename
               
            }),
           headers : {
         'Content-Type' : 'application/json',
         'Accept' : 
           } 
        }).then(response => {
         console.log("rs1" + JSON.stringify(response));
         alert("작성되었습니다!!");
          this.$router.push({
             name : "List"
         })
      
         })
        }
       
    }, */
    
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