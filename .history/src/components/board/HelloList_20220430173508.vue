<template>
    <div id="board">
       <h2>게시판리스트</h2>
       <button @click="fnWrite()">write</button>
       <table>
           <thead>
               <tr>
                   <th>ID</th>
                   <th>NAME</th>
                   <th>CONTENT</th>
                   <th>HIRE_DATE</th>
                  
               </tr>
           </thead>
           <tbody>
              <tr :key="i" v-for="(todo, i) in todos"  @click="fnView(todo.EMPNO)">
                   <td>{{todo.EMPNO}}</td>
                   <td>{{todo.ENAME}}</td>
                   <td>{{todo.CONTENT}}</td>
                   <td>{{todo.HIRE_DATE}}</td>
                   
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
          todos: [],
          userid : this.userid
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
       this.$http.post('http://localhost:8080/testAll',{userid : this.userid},{
            method : 'POST',
            body : JSON.stringify({userid : ''}),
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
    
     fnWrite(){
       this.$router.push({
         name : "edit",
        });
     },

     fnView(EMPNO){
       alert("ID ::" + EMPNO);
       this.$router.push({
         name : "detail",
          params : { contentId :EMPNO}
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
