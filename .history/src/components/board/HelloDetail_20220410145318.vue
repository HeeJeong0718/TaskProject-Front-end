<template>
	<div>
		<h1>게시판 상세보기</h1>
   {{userDetail.NAME}}
			<h1>222</h1>
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
         userDetail :{}
      }
    },
	 created(){
        //his.getDetail();
       
  },
  mounted(){
        
       
           console.log("ID::" + JSON.stringify( this.$route.params.contentId));
          //const id = this.$route.params.id;
             
        //this.$http.post(`${baseURL}`,{
         this.$http.post('http://localhost:8080/testDetail' ,{id:contentId},{
            method : 'POST',
            body : JSON.stringify({ id : 2}),
           headers : {
         'Content-Type' : 'application/json',
         'Accept' : '*/*'
           } 
           
        }).then(response => {
         console.log("rs22" + JSON.stringify(response));
      }).then(response => {
      // this.userDetail = response.data.list.NAME;
       // console.log("rs22" + JSON.stringify(this.userDetail));
        // console.log("rs" + JSON.stringify(response.data.list));
      })
    },
    methods:{
    
    /*getDetail:function(){
       
        fetch('http://localhost:8080/testDetail',{
            method : 'POST',
            body : JSON.stringify({name : '조희정'}),
           headers : {
         'Content-Type' : 'application/json',
         'Accept' : '
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
    
      
    }*/
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