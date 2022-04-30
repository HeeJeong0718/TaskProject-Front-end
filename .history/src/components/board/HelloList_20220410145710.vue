<template>
    <div id="board">
       <h2>게시판리스트</h2>
       <table>
           <thead>
               <tr>
                   <th>ID</th>
                   <th>NAME</th>
                   <th>TEL</th>
                   <th>EMAIL</th>
                   <th>DEPARTMENT_ID</th>
                   <th>AUTH_ID</th>
                   <th>RANK_ID</th>
                   <th>INSERT_DATE</th>
               </tr>
           </thead>
           <tbody>
              <tr :key="i" v-for="(todo, i) in todos"  @click="fnView(todo.ID)">
                   <td>{{todo.ID}}</td>
                   <td>{{todo.NAME}}</td>
                   <td>{{todo.TEL}}</td>
                   <td>{{todo.EMAIL}}</td>
                   <td>{{todo.DEPARTMENT_ID}}</td>
                   <td>{{todo.AUTH_ID}}</td>
                   <td>{{todo.RANK_ID}}</td>
                   <td>{{todo.INSERT_DATE}}</td>
               </tr>
           </tbody>
       </table>
    </div>
</template>
 


<script>
//import axios from "axios";
export default {
     data() {
    return {
      todos: []
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
      const baseURL = 'http://localhost:8080/test2';
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
        this.todos = response.data.list;
         console.log("rs" + JSON.stringify(response.data.list));
      })
    },
    
    /*getList:function(){
      this.$http.post('http://localhost:8080/test2',{
            method : 'POST',
            body : JSON.stringify({name : ''}),
           headers : {
         'Content-Type' : 'application/json',
         'Accept' : '
           } 
        }).then(response => {
         return response.json();         
      }).then(res => {
          this.todos = res.list;
          console.log("rs" + JSON.stringify(res.list));
         
      })   
    },*/
    
     fnView(ID){
       alert("ID ::" + ID);
       this.$router.push({
         name : "detail",
          params : { contentId :ID}
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
