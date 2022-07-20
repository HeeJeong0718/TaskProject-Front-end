<template>
   <v-container>
    <div id="board" v-if="$store.state.mem_id">
         <v-text-field v-model="start_date" ></v-text-field>
          <v-text-field v-model="end_date"></v-text-field>
      <div>
      <!--  <v-text-field type="text" v-model="searchKeyword" placeholder="제목검색" v-on:keyup.enter="fnsearch"/>
        <v-btn class="ma-2" depressed color="primary" @click="fnsearch()">검색</v-btn>-->
      <v-text-field v-model="searchKeyword" append-icon="mdi-magnify" label="Search" single-line hide-details></v-text-field>
     
      </div>
    
       <!--<table v-if="this.boards !='null'">
           <thead >
               <tr>
                   <th>ID</th>
                   <th>username</th>
                   <th>TITLE</th>
                   <th>CONTENT</th>
                   <th>INSERT_DATE</th>
                  
               </tr>
           </thead>
           <tbody v-if="!searchKeyword"> 
              <tr :key="i" v-for="(board, i) in boards"  @click="fnView(board.TITLE)">
                 <td>{{board.USERID}}</td>
                 <td>{{board.USERNAME}}</td>
                 <td>{{board.TITLE}}</td>
                 <td>{{board.CONTENT}}</td>
                 <td>{{board.INSERT_DATE}}</td>
               </tr>
           </tbody>
           <tbody v-else>
             <tr :key="i" v-for="(board, i) in searchboards"  @click="fnView(board.TITLE)">
                 <td>{{board.USERID}}</td>
                 <td>{{board.USERNAME}}</td>
                 <td>{{board.TITLE}}</td>
                 <td>{{board.CONTENT}}</td>
                 <td>{{board.INSERT_DATE}}</td>
               </tr>
           </tbody>
       </table>-->
        
         <v-data-table :headers="headers" :items="boards" item-key="title" :search="searchKeyword">
          <template slot="item" slot-scope="props">
            <tr  @click="fnView(props.item.B_NO)">
               <td>{{ props.item.B_NO}}</td>
                   <td>{{ props.item.MEM_ID}}</td>
                   <td>{{ props.item.B_TITLE}}</td>
                  <td>{{ props.item.B_CONTENT}}</td>
                   <td>{{props.item.INSERT_DATE}}</td>
                   <td>{{props.item.DUE_DATE}}</td> 
              </tr>
          </template>
         </v-data-table>
       <v-btn depressed color="primary" @click="fnWrite($store.state.mem_id)">글 작성</v-btn>
    </div>
    
    </v-container>
    
</template>
 


<script>
//import HelloSearch from '@/components/board/HelloSearch.vue'
//import axios from "axios";

export default {
     data() {
    return {
         start_date : '',
         end_date :'',
          boards: [],
          searchboards :'' ,
          userid : '',
          searchKeyword : '',
          searchname : '',
          searchid : '',
          searchtitle : '',
          searchcontent : '',
          searchdate : '',
          loginlevel : '',
          headers :[
             { text : "NO" , align:"left", sortable : false, value :"NO"},
            { text : "ID" , align:"left", sortable : false, value :"B_ID"},
            { text : "TITLE" , align:"left", sortable : true, value :"B_TITLE"},
            { text : "CONTENT" , align:"left", sortable : true, value :"B_CONTENT"},
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
       this.$http.post('http://localhost:8080/taskall',{mem_id:this.$store.state.mem_id, loginlevel : this.$store.state.loginlevel},{
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
         console.log("rs" + JSON.stringify(response.data.list));
         console.log("this.boards" + JSON.stringify(this.boards));
      })
    },
    fnsearch(){
      alert("!!!!");
       this.$http.post('http://localhost:8080/boardSearch',{title :this.searchKeyword},{
            method : 'POST',
            body : JSON.stringify({searchKeyword : this.searchKeyword}),
           headers : {
         'Content-Type' : 'application/json',
         'Accept' : '*/*'
           } 
        }).then(response => {
          return response;
      }).then(response => {
           console.log("response" + JSON.stringify(response));
            console.log("response TITLE" + JSON.stringify(response.data.list.DUE_DATE));
            this.searchboards = response.data.list;
            this.searchname = response.data.list.USERNAME;
            this.searchid = response.data.list.USERID;
            this.searchtitle = response.data.list.TITLE;
            console.log("this.searchtitle" + this.title);
            this.searchcontent = response.data.list.CONTENT;
            this.searchdate = response.data.list.INSERT_DATE;
      })
    },
     fnWrite(){
       this.$router.push({
         name : "edit",
         query : {
           mem_id : this.$store.state.mem_id
           
         }
        });
          console.log("mem_id" + this.$store.state.mem_id);
     },

     fnView(B_NO){
       alert("B_NO ::" + B_NO);
       this.$router.push({
         name : "detail",
          params : { contentId :B_NO}
          });
    
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
