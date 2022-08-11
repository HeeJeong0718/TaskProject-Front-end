<template>
   <v-container>
       <div style ="margin:30px">
        <div align="right">
           <v-btn depressed color="primary" @click='toBack()' >뒤로가기</v-btn>
            <v-btn depressed color="error"  @click='write()'>작성</v-btn>
        </div>
          <div class="mb-3" align="left">
            <label for="exampleFormControlInput1" class="form-label">UserID</label>
             <v-text-field type="text" id="exampleFormControlInput1" v-model=$store.state.userid />  
        </div>
          <div class="mb-3" align="left">
            <label for="exampleFormControlInput1" class="form-label">username</label>
            <v-text-field type="text" id="exampleFormControlInput1" v-model="username"/>  
        </div>
         <div class="mb-3" align="left">
            <label for="exampleFormControlInput1"     class="form-label">Titel</label>
             <v-text-field type="text" id="exampleFormControlInput1" v-model="title"/>  
        </div>
         <div class="mb-3" align="left">
            <label for="exampleFormControlInput1" class="form-label">CONTENT</label>
            <v-textarea type="text" id="exampleFormControlInput1" v-model="content"/>
        </div>
    </div>
    </v-container>
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
             if(this.$store.state.loginlevel=="1"){
            this.$router.push({
            name : 'adminList'
         
        })
        }else{
           this.$router.push({
            name : 'List'
        })
        }
     },
        write:function(){
        this.$http.post('/boardInsert',{ userid : this.userid , username : this.username, title :this.title, content : this.content}, { //파라미터릂 여기에 줘야함 ->스프링 컨트롤러에 있는 vo랑똑같은이름써저야한다!!!
            method : 'POST',
            body : JSON.stringify({}),
            headers : {
              'Content-Type' : 'application/json',
              'Accept' : '*/*'
           }
        }).then(response => {
         console.log("rs1" + JSON.stringify(response));
         alert("작성되었습니다!!");
              if(this.$store.state.loginlevel=="1"){
            this.$router.push({
            name : 'adminList'
         
        })
        }else{
           this.$router.push({
            name : 'List'
        })
        }
      
         })
        },
    getmodify:function(){ 
     
         this.$http.post('http://localhost:8080/boardDetail',{empno:this.$route.query.empno} ,{
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
 
}
</script>

<style>

</style>