<template>
   <div>
   <h1 class="subheading grey--text">My Dashboard</h1>
    <v-container class="my-6">    
    <div  class="pa-3">
      <h3  class="subheading grey--text">admin notice</h3>
      <div>
        <v-card-text  class="pa-3" v-for="board in boards" :key="board.B_NO" v-if="board.USE_FLAG == 'Y'">
          <v-layout class="pa-3" row wrap  style="border-left : 4px solid #546e6c;">
             <v-flex xs12 md6>
              {{board.USE_FLAG}}
               <div class="caption grey--text">{{board.B_TITLE}}</div>
               <div>{{board.B_CONTENT}}</div>
             </v-flex> 
             <v-flex xs6 sm4 md2>
               <div class="caption grey--text">Person</div>
               <div>{{board.B_ID}}</div>
             </v-flex>   
             <v-flex xs6 sm4 md2>
               <div class="caption grey--text">DUE_DATE</div>
               <div>{{board.DUE_DATE}}</div>
             </v-flex>  
             <v-flex xs6 sm4 md2>
              <div class="pa-5">
             <v-btn small text color="grey" @click="readNotice(board.B_NO)">
              <v-icon left small>mdi-pencil</v-icon>
             <span class="cation text-lowercase">확인</span>
            </v-btn>
          </div> 
          </v-flex> 
          </v-layout>
        </v-card-text>
        <v-card-text  class="pa-5" v-for="board in boards" :key="board.B_NO" v-else>
          <h3  class="subheading grey--text">No more notice</h3>
        </v-card-text>
      </div>
     </div>
    </v-container>
   </div>
</template>
 


<script>
//import HelloSearch from '@/components/board/HelloSearch.vue'
//import axios from "axios";

export default {
     data() {
    return {
      use_flag :'Y',
      checkbox: false,
      USE_FLAG : 'Y',
         start_date : '',
         menu2:'',
         delboards:[],
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
            { text : "TITLE" , align:"left", sortable : true, value :"B_TITLE"},
            { text : "CONTENT" , align:"left", sortable : true, value :"B_CONTENT"},
            { text : "ID" , align:"left", sortable : false, value :"B_ID"},
            { text : "DUE_DATE" , align:"left", sortable : true, value :"DUE_DATE"},
            { text : "INSERT_DATE" , align:"left", sortable : true, value :"INSERT_DATE"},
            { text : "STATUS" , align:"left", sortable : true, value :"STATUS"},
          ], 
          board_status :['ongoing', 'processing','done']
       }
    },
  created(){
    this.getList()
  },
   methods:{
    getList :function(){
       this.$http.post('http://localhost:8080/adminNotice',{},{
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
        console.log("this.boards" + JSON.stringify(this.boards));
      })
    },
    readNotice:function(B_NO){
      alert("B_NO" + B_NO);
      const use_flag ='N'
      this.$http.post('http://localhost:8080/NoticeDelete',{b_no : this.B_NO, use_flag : 'N'},{
            method : 'POST',
            body : JSON.stringify({userid : this.userid}),
           headers : {
         'Content-Type' : 'application/json',
         'Accept' : '*/*'
           } 
        }).then(response => {
          return response;
      }).then(response => {
        this.delboards = response.data.list;
        console.log("this.delboards" + JSON.stringify(this.delboards));
        this.getList();
      })
     
    },
   }
}

</script> 
<style scoped>
/*table {
    border-collapse: collapse;
    width:100%
}*/
/*td, th {
    border :1px solid #dddddd;
    text-align: left;
    padding: 10px;
}*/
.board.done{
  border-left : 4px solid #3cd1c2;
}
.board.ongoing{
  border-left : 4px solid orange;
}
.board.complete{
  border-left : 4px solid tomato;
}
#chip.done{
  background :  #3cd1c2;
}

#chip.ongoing{
  background :  orange;
}
#chip.complete{
  background  : tomato;
}
</style>
