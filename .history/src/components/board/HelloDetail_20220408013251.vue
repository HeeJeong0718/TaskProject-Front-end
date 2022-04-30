<template>
	<div>
		<h1>게시판 상세보기</h1>

		<div class="AddWrap">
			<form>
				<table class="tbAdd">
					<colgroup>
						<col width="15%" />
						<col width="*" />
					</colgroup>
					<tr>
						<th>제목</th>
					     {{data}}
                         
					</tr>
					<tr>
						<th>내용</th>
					
					</tr>
				</table>
			</form>
		</div>

		<div class="btnWrap">
			<a href="javascript:;" @click="fnList" class="btn">목록</a>
		</div>	
	</div>
</template>

<script>
export default {
    name : 'detail',
     data() {
         const data = this.$route.params.contentId;
         console.log("data" +data);
    return {
         data :data,
         name : data.NAME
      }
    },
	 created(){
        this.getDetail();
       
  },
  mounted(){
          console.log(this.$route.params);
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