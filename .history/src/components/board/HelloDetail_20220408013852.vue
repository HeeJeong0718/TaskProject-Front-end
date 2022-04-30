<template>
	<div>
		<h1>게시판 상세보기</h1>

		
	</div>
</template>

<script>
export default {
    
     data() {
         const data = this.$route.params.contentId;
         console.log("data" +data);
    return {
         data :data,
         name : data.NAME,
         userDetail :{}
      }
    },
	 created(){
        this.getDetail();
       
  },
  mounted(){
          console.log(this.$route.params);
           const baseURL = 'http://localhost:8081/board/detail/0';
       this.$http.post(`${baseURL}`,{
            method : 'POST',
            body : JSON.stringify({name : ''}),
           headers : {
         'Content-Type' : 'application/json',
         'Accept' : '*/*'
           } 
        }).then(response => {
          return response;
      }).then(response => {
        this.userDetail = response.data.list;
         console.log("rs" + JSON.stringify(response.data.list));
      })
    },
    methods:{
    
    getDetail:function(){
       
        fetch('http://localhost:8080/testDetail',{
            method : 'POST',
            body : JSON.stringify({name : '조희정'}),
           headers : {
         'Content-Type' : 'application/json',
         'Accept' : '*/*'
           } 
        }).then(response => {
         return response.json();         
      }).then(res => {
          this.subject = res.list;
          //this.NAME = this.subject.NAME
          //var NAME = this.subject.NAME;
          console.log("rs" + JSON.stringify(res.list));
         console.log("rsthis" + JSON.stringify( this.data ));
           console.log("NAME" + JSON.stringify( this.subject.NAME ));
      })  
    
      
    }
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