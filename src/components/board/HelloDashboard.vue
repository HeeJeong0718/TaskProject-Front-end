<template>
   <div>
   <h1 class="subheading grey--text">My Dashboard</h1>
    <v-container class="my-6" grid-list-md text-xs-center>
    <div  class="pa-3">
      <h3  class="subheading grey--text" >admin notice</h3>
      <div>
        <v-card-text  class="pa-3" v-for="board in boards" :key="board.B_NO" v-show="readyn" >
          <v-layout class="pa-3" row wrap  style="border-left : 4px solid #546e6c;">
             <v-flex xs12 md6>
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
          </v-layout>
        </v-card-text>
        <v-btn small text color="grey" @click="doneToggle()">
          <v-icon left small>mdi-pencil</v-icon> 
          <span class="cation text-lowercase">가리기</span>
         </v-btn>
      </div>
     </div>
    </v-container>
    <h1 class="subheading grey--text">My Status</h1>
    <AdminCard/>
   </div>
</template>
 


<script>
import AdminCard from '../Cards/AdminCard.vue'
 import axios from "axios";

export default {
  components:{ AdminCard },
     data() {
    return {
      B_NO :'',
      use_flag :'Y',
      checkbox: false,
      readyn : true,
      readyn2 :'Y',
      readyn3 :'Y',
      changeRead :'',
      boardCount :'',
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
  watch:{
    readYn(){
      this.readYn = !this.readYn;
    }
  },
   methods:{
    getList :function(){
      axios.get('http://localhost:8080/adminNotice',{
          params:{
            
          }
         })
      .then(response =>{
      this.boards = response.data.list;
      })
      .catch(error =>{
      console.log(error);
      })
    },
    doneToggle:function(B_ROW){
      this.readyn = !this.readyn;
    }
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
#sText{
  text-align: left;
}
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
