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
                   <th>AUTH_ID</th>
                   <th>RANK_ID</th>
                   <th>INSERT_DATE</th>
               </tr>
           </thead>
           <tbody>
              <tr :key="i" v-for="(todo, i) in todos"  @click="fnView(i)">
                   <td>{{todo.ID}}</td>
                   <td>{{todo.NAME}}</td>
                   <td>{{todo.TEL}}</td>
                   <td>{{todo.EMAIL}}</td>
                   <td>{{todo.AUTH_ID}}</td>
                   <td>{{todo.RANK_ID}}</td>
                   <td>{{todo.INSERT_DATE}}</td>
               </tr>
           </tbody>
       </table>
    </div>
</template>
 


<script>
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
         'Accept' : '
           } 
        }).then(response => {
         return response.json();         
      }).then(res => {
          this.todos = res.list;
          console.log("rs" + JSON.stringify(res.list));
         
      })  
    
      
    },*/
    getList:function(){
      axios.post('http://localhost:8080/test2',{
            method : 'POST',
            body : JSON.stringify({name : ''}),
           headers : {
         'Content-Type' : 'application/json',
         'Accept' : '*/*'
           } 
        }).then(response => {
         return response.json();         
      }).then(res => {
          this.todos = res.list;
          console.log("rs" + JSON.stringify(res.list));
         
      })   
    },


    fnView:function(i){
      alert("id" + i);
      this.$router.push({
          name:'detail',
          params : { contentId :i}
          }); //상세페이지 이동
         
    }
    
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
