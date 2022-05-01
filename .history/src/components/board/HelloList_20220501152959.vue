<template>
  
    <div id="board" v-if="$store.state.userid">
       <h2>게시판리스트 아이디가 있습니다</h2>
      <div>
        <input type="text" name="" id="" v-model="searchKeyword">
        <button @click="fnsearch()">검색</button>
      </div>
      <button @click="fnWrite($store.state.userid)">write</button> 
      <span>vuex 에서 가져온 username : {{$store.state.userid}} </span> 
       <table>
           <thead>
               <tr>
                   <th>ID</th>
                   <th>username</th>
                   <th>TITLE</th>
                   <th>CONTENT</th>
                  
               </tr>
           </thead>
           <tbody>
              <tr :key="i" v-for="(board, i) in boards"  @click="fnView(board.TITLE)">
                <td>{{board.USERID}}</td>
                <td>{{board.USERNAME}}</td>
                   <td>{{board.TITLE}}</td>
                   <td>{{board.CONTENT}}</td>
               </tr>
           </tbody>
       </table>
    </div>
    <p v-else>테이블이 없습니다</p>
    
</template>
 


<script>
//import HelloSearch from '@/components/board/HelloSearch.vue'
//import axios from "axios";
export default {
     data() {
    return {
          boards: [],
          searchboards : [],
          userid : '',
          searchKeyword : ''
       }
    },
  created(){
    this.getList();
  },
   methods:{
    /*getList:function(){
        fetch('http://localhost:8080/test2',{
            method : 'POST',
            body : JSON.stringify({name : ''}),
           headers : {
         'Content-Type' : 'application/json',
         'Accept' : 
           } 
        }).then(response => {
         return response.json();         
      }).then(res => {
          this.todos = res.list;
          console.log("rs" + JSON.stringify(res.list));
         
      })  
    
      
    },*/
    getList :function(){
     // const baseURL = 'http://localhost:8080/test2';
       this.$http.post('http://localhost:8080/testAll',{
            method : 'POST',
            body : JSON.stringify({userid : ''}),
           headers : {
         'Content-Type' : 'application/json',
         'Accept' : '*/*'
           } 
        }).then(response => {
          return response;
      }).then(response => {
        this.boards = response.data.list;
         console.log("rs" + JSON.stringify(response.data.list));
      })
    },
    fnsearch(){
      alert("!!!!");
       this.$http.post('http://localhost:8080/testSearch',{content :this.searchKeyword},{
            method : 'POST',
            body : JSON.stringify({searchKeyword : this.searchKeyword}),
           headers : {
         'Content-Type' : 'application/json',
         'Accept' : '*/*'
           } 
        }).then(response => {
          return response;
      }).then(response => {
        this.boards = response.data;
         console.log("rs" + JSON.stringify(response));
      })
    },
     fnWrite(){
       this.$router.push({
         name : "edit",
         query : {
           userid : this.$store.state.userid
           
         }
        });
          console.log("userid" + this.$store.state.userid);
     },

     fnView(TITLE){
       alert("TITLE ::" + TITLE);
       this.$router.push({
         name : "detail",
          params : { contentId :TITLE}
          });
    
     }
     
              
     /*
     fnView:function(ID){
      alert("id" + ID);
      this.$router.push(`detail/${ID}`);
     this.$router.push({ 
          name:'detail',
          params : { contentId :ID}
          });
      /*this.$router.push({
          name:'detail',
          params : { contentId :i}
          }); //상세페이지 이동*/
         
    
    
   }
}

</script> 
<style scoped>
table {
    border-collapse: collapse;
    width:100%
}
td, th {
    border :1px solid #dddddd;
    text-align: left;
    padding: 10px;
}
</style>
