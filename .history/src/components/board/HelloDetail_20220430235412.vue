<template>
	<div >
		<h1>게시판 상세보기</h1>
    <div style ="margin:30px">
       
         <div class="mb-3" align="left">
            <label for="exampleFormControlInput1" class="form-label">USERID</label>
            <input type="text" class="form-control" id="exampleFormControlInput1"  v-model="userDetail.USERID">
        </div>
         <div class="mb-3" align="left">
            <label for="exampleFormControlInput1" class="form-label">USERNAME</label>
            <input type="text" class="form-control"   id="exampleFormControlInput1" v-model="userDetail.USERNAME">
        </div>
        <div class="mb-3" align="left">
            <label for="exampleFormControlInput1" class="form-label">TITLE</label>
            <input type="text" class="form-control"   id="exampleFormControlInput1" v-model="userDetail.TITLE">
        </div>

         <div class="mb-3" align="left">
            <label for="exampleFormControlInput1" class="form-label">CONTENT</label>
            <textarea name="content" id="content" cols="30" rows="10"  v-model="userDetail.CONTENT"></textarea>
        </div>
    </div>
         <button type="button" class="btn btn-outline-secondary btn-sm" @click='modify()' >수정</button>		
        <button type="button" class="btn btn-outline-secondary btn-sm" @click='del()' >삭제</button>		
        <button type="button" class="btn btn-outline-secondary btn-sm" @click='goback()' >back</button>		
	</div>
</template>

<script>
export default {
    
     data() {
         const data = this.$route.params.contentId;
         console.log("data" +data);  
    return {
        // data :data,
        // name : data.NAME,
          userid :'',
          username : '',
          title : '',
          content: null,
          empno : this.EMPNO,
          currentTutorial: null,
          userDetail:{}
         
      
      }
    },
	
  mounted(){
           console.log("ID::" + JSON.stringify( this.$route.params.contentId));
          const title = this.$route.params.contentId;
             
        //this.$http.post(`${baseURL}`,{
         this.$http.post('http://localhost:8080/testDetail' ,{title:title},{
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
       console.log("title" + JSON.stringify(response.data.list));
        // console.log("rs" + JSON.stringify(response.data.list));
      })
    },
    methods:{
     
       del:function(){
          
            this.$http.post('http://localhost:8080/testdelete',{ title :this.userDetail.TITLE},{ //해당 userdetial.empno를 가져온다!!
            method : 'POST',
            body : JSON.stringify({ title :this.userDetail.TITLE}),
           headers : {
         'Content-Type' : 'application/json',
         'Accept' : '*/*'
           }   
        }).then(response => {
           return response
       }).then(response => {
        alert("삭제하시겠습니까?");
          this.$router.push({
             name : "List"
         })
        console.log("rs22" + JSON.stringify(response));
        // console.log("rs" + JSON.stringify(response.data.list));
      })
       }
     ,
         modify:function(){
            this.$router.push({
              name:'edit',
              query : { 
                  empno : this.userDetail.EMPNO
              }
            })
            console.log("empno" + this.userDetail.EMPNO);
          },
      
      
         goback(){
         this.$router.push({
             name : "List"
         })
     },
      
    }
}
</script>

<style scoped>
	.tbAdd{border-top:1px solid #888;}
	.tbAdd th, .tbAdd td{border-bottom:1px solid #eee; padding:5px 0; }
	.tbAdd td{padding:10px 10px; box-sizing:border-box; text-align:left;}
	.tbAdd td.txt_cont{height:300px; vertical-align:top;}
	.btnWrap{text-align:center; margin:20px 0 0 0;}
	.btnWrap a{margin:0 10px;}
	.btnAdd {background:#43b984}
	.btnDelete{background:#f00;}
</style>