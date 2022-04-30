<template>
	<div >
		<h1>게시판 상세보기</h1>
      <p>{{userDetail.EMPNO}}</p>
       <p>{{userDetail.ENAME}}</p>
       <p>{{userDetail.CONTENT}}</p>
        <p>{{userDetail.HIRE_DATE}}</p>
         <button type="button" class="btn btn-outline-secondary btn-sm" >수정</button>		
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
         userDetail :{},
         empno : this.EMPNO,
          currentTutorial: null,
         
      
      }
    },
	 created(){
        //his.getDetail();
       
  },
  mounted(){
        
       
           console.log("ID::" + JSON.stringify( this.$route.params.contentId));
          const empno = this.$route.params.contentId;
             
        //this.$http.post(`${baseURL}`,{
         this.$http.post('http://localhost:8080/testDetail' ,{empno:empno},{
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
    },
    methods:{
     
       del:function(){
          
            this.$http.post('http://localhost:8080/testdelete',{ empno :this.userDetail.EMPNO},{ //해당 userdetial.empno를 가져온다!!
            method : 'POST',
            body : JSON.stringify({ empno :this.userDetail.EMPNO}),
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
         /* edit:function(){
          
            this.$http.post('http://localhost:8080/testedit',{ empno :this.userDetail.EMPNO},{ //해당 userdetial.empno를 가져온다!!
            method : 'POST',
            body : JSON.stringify({ empno :this.userDetail.EMPNO}),
           headers : {
         'Content-Type' : 'application/json',
         'Accept' : 
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
       },*/
         toBack(){
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