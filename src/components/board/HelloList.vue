<template>
  <div>
  <v-container  grid-list-md text-xs-center>
    <h3 class="subheading grey--text">업무일지 관리</h3>
      <div>
       <v-layout row wrap class="mb-3 pa-3">
         <v-flex xs12 sm4 md2>
           <v-text-field xs12 sm4 md2 type="text" v-model="searchKeyword" placeholder="제목검색" />
          </v-flex>
      <v-flex xs12 sm4 md2>
       <v-menu
          v-model="menu2"
          :close-on-content-click="false"
          :nudge-right="40"
          transition="scale-transition"
          offset-y
          min-width="auto"
      >
    <template v-slot:activator="{ on, attrs }">
      <v-text-field
        v-model="start_date"
        label="From"
        prepend-icon="mdi-calendar"
        readonly
        v-bind="attrs"
        v-on="on"
       
      ></v-text-field>
    </template>
    <v-date-picker
      v-model="start_date"
      @input="menu2 = false"
   
    ></v-date-picker>
  </v-menu>
  </v-flex>
      <v-flex xs12 sm4 md2>
            <v-menu
              v-model="menu3"
              :close-on-content-click="false"
              :nudge-right="40"
              transition="scale-transition"
              offset-y
              min-width="auto"
          >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="end_date"
            label="To"
            prepend-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="end_date"
          @input="menu3 = false"
          
        ></v-date-picker>
      </v-menu>
    </v-flex>
    <v-flex xs12 sm4 md2>
     <div class="pa-4">
      <v-btn class="pink white--text" @click="fnsearch()">
      <v-icon left small>mdi-pencil</v-icon>
     <span class="cation text-lowercase">Search</span>
     </v-btn>
    </div>
   </v-flex>
   <v-flex xs12 sm4 md2>
    <div class="pa-4">
     <v-btn class="pink white--text" @click="fnRefresh()">
     <v-icon left small>mdi-pencil</v-icon>
    <span class="cation text-lowercase">clean</span>
    </v-btn>
   </div>
  </v-flex>
   </v-layout> 
   
  
   <div>
       <v-data-table  :headers="headers" :items="boards" item-key="title"  :search="searchKeyword">
         <template slot="item" slot-scope="props">
           <tr id="chip2" @click="fnView(props.item.B_ROW)" :class="`${props.item.STATUS}`">
                 <td>{{ props.item.B_ROW}}</td>
                   <td>{{ props.item.B_TITLE}}</td>
                   <td>{{ props.item.B_CONTENT}}</td>
                   <td>{{ props.item.MEM_ID}}</td>
                  <td>{{props.item.DUE_DATE}}</td> 
                  <td><v-chip id="chip" small :class="`${props.item.STATUS} white--text caption my-3`">{{props.item.STATUS}}</v-chip></td> 
                  <td>{{props.item.INSERT_DATE}}</td>
             </tr>
         </template>
        </v-data-table>
        <v-layout row class="mb-3">
         <v-btn small text color="grey" @click="fnWrite($store.state.mem_id)">
           <v-icon left small>mdi-pencil</v-icon>
          <span class="cation text-lowercase">글작성</span>
         </v-btn>
       </v-layout>
     
     </div>
   </div>
    
    
   </v-container>
 
 </div>

</template>

<script>

import axios from "axios";

export default {
    data() {
   return {
        start_date : '',
        menu2:'',
        menu3:'',
        B_ID: '',
        end_date :(new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
        searchDate:'',
        due_date : '',
         boards: [],
         userid : '',
         searchKeyword : '',
         loginlevel : '',
         headers :[
           { text : "ROW" , align:"left", sortable : true, value :"B_ROW"},
           { text : "TITLE" , align:"left", sortable : true, value :"B_TITLE"},
           { text : "CONTENT" , align:"left", sortable : true, value :"B_CONTENT"},
           { text : "ID" , align:"left", sortable : false, value :"B_ID"},
           { text : "DUE_DATE" , align:"left", sortable : true, value :"DUE_DATE"},
           { text : "STATUS" , align:"left", sortable : true, value :"STATUS"},
           { text : "INSERT_DATE" , align:"left", sortable : true, value :"INSERT_DATE"},
         ], 
         board_status :['ongoing', 'processing','done'],
         params :{mem_id :this.$store.state.mem_id , mem_no : this.$store.state.mem_no}
      }
   },
 created(){
   this.getList()
 },
 mounted(){
   this.getList();
 },
 computed:{
   filterResources(){
    if(due_date){
     return this.boards.filter((item) =>{
       return item.DUE_DATE == this.due_date
     })
    }else{
     return this.boards;
    }
   }
 },
  methods:{
   getList:function(){ 
         axios.get('http://localhost:8080/taskall',{
          params:{
             mem_id:this.$store.state.mem_id,
             mem_no : this.$store.state.mem_no
          }
         })
      .then(response =>{
      this.boards = response.data.list 
      })
      .catch(error =>{
      console.log(error);
      })
   },
   
   fnsearch(){
     const start2 = this.start_date;
     const enddate2 = this.end_date;
     axios.post('http://localhost:8080/boardSearch',{mem_id:this.$store.state.mem_id, mem_no : this.$store.state.mem_no ,start_date :start2, end_date :enddate2},{
           method : 'POST',
           body : JSON.stringify({ }),
          headers : {
        'Content-Type' : 'application/json',
        'Accept' : '*/*'
          } 
       }).then(response => {
         return response;
     }).then(response => {
            this.boards = response.data.list;
     })
   },
  fnRefresh(){
    window.location.reload(true);
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

    fnView(B_ROW){
      this.$router.push({
        name : "detail",
         params : { contentId :B_ROW}
         });
   
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
#chip.processing{
 background  : tomato;
}
</style>
