<template>
 <v-container>
    <div id="board" v-if="$store.state.userid">
      <div>
        <v-text-field type="text" v-model="searchKeyword" placeholder="제목검색"/>
      </div>
       <!-- <table>
           <thead >
               <tr>
                   <th>ID</th>
                   <th>Level</th>
                   <th>username</th>
                   <th>TITLE</th>
                   <th>CONTENT</th>
                  
               </tr>
           </thead>
           <tbody> 
              <tr :key="i" v-for="(board, i) in boards"  @click="fnView(board.TITLE)">
                <td>{{board.USERID}}</td>
                <td>{{board.LOGINLEVEL}}</td>
                <td>{{board.USERNAME}}</td>
                <td>{{board.TITLE}}</td>
                <td>{{board.CONTENT}}</td>
                
               </tr>
           </tbody>
        -  <tbody v-else>
             <tr :key="i" v-for="(board, i) in searchboards"  @click="fnView(board.TITLE)">
                 <td>{{board.USERID}}33</td>
                 <td>{{board.USERNAME}}</td>
                 <td>{{board.TITLE}}</td>
                 <td>{{board.CONTENT}}</td>
               </tr>
           </tbody> 
       </table>-->

          <v-data-table :headers="headers" :items="boards" item-key="title" :search="searchKeyword">
          <template slot="item" slot-scope="props">
            <tr  @click="fnView(props.item.SEQ)">
                   <td>{{ props.item.USERID}}</td>
                   <td>{{ props.item.TITLE}}</td>
                  <td>{{ props.item.CONTENT}}</td>
                   <td>{{props.item.INSERT_DATE}}</td>
                   <td>{{props.item.DUE_DATE}}</td>
              </tr>
          </template>
         </v-data-table>
       
       <table v-if="this.boards =='null'">
         <thead>
           <th>테이블없다</th>
         </thead>
       </table>
       
    </div>
 </v-container>
    
    
</template>
 


<script>
//import HelloSearch from '@/components/board/HelloSearch.vue'
//import axios from "axios";
export default {
     data() {
    return {
          boards: [],
          searchboards :'' ,
          userid : '',
          searchKeyword : '',
          searchname : '',
          searchid : '',
          searchtitle : '',
          searchcontent : '',
          loginlevel : '2',
           headers :[
            { text : "ID" , align:"left", sortable : false, value :"USERID"},
            { text : "TITLE" , align:"left", sortable : true, value :"TITLE"},
            { text : "CONTENT" , align:"left", sortable : true, value :"CONTENT"},
            { text : "INSERT_DATE" , align:"left", sortable : false, value :"INSERT_DATE"},
             { text : "DUE_DATE" , align:"left", sortable : true, value :"DUE_DATE"},
          ]
       }
    },
  created(){
    this.getList()
  },
   methods:{
    getList :function(){
     // const baseURL = 'http://localhost:8080/test2';
       this.$http.post('http://localhost:8080/adminDetail',{userid:this.$store.state.userid , loginlevel:'2'},{
            method : 'POST',
            body : JSON.stringify({userid : this.userid}),
           headers : {
         'Content-Type' : 'application/json',
         'Accept' : '*/*'
           } 
        }).then(response => {
          return response;
      }).then(response => {
        this.boards = response.data.list;
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
