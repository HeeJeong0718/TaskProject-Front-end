<template>
  <div class="boardlist">
  <h1 class="subheading grey--text">Board</h1>
   <v-container class="my-6">

     <!---<v-layout row class="mb-3">
       <v-btn small text color="grey">
         <v-icon left small>mdi-folder</v-icon>
        <span class="cation text-lowercase">BY</span>
       </v-btn>
     </v-layout>

      <v-card-text class="pa-3" v-for="board in boards" :key="board.B_NO">
        <v-layout row wrap  :class="`pa-3 board ${board.STATUS}`">
           <v-flex xs12 md6>
             <div class="caption grey--text">{{board.B_TITLE}}</div>
             <div>{{board.B_CONTENT}}</div>
           </v-flex> 
           <v-flex xs6 sm4 md2>
             <div class="caption grey--text">Person</div>
             <div>{{board.MEM_ID}}</div>
           </v-flex>   
           <v-flex xs6 sm4 md2>
             <div class="caption grey--text">DueDate</div>
             <div>{{board.DUE_DATE}}</div>
           </v-flex>   
           <v-flex xs2 sm4 md2>
             <div class="right">
              <v-chip id="chip" small :class="`${board.STATUS} white--text caption my-3`">{{board.STATUS}}</v-chip> 
             </div>
           </v-flex>   
        </v-layout>
       </v-card-text>-->
  
    
      <div id="board" v-if="$store.state.mem_id" class="pa-3">
       <v-layout row wrap class="mb-3 pa-3">
         <v-flex xs12 sm4 md2>
           <v-text-field xs12 sm4 md2 type="text" v-model="searchKeyword" placeholder="제목검색" v-on:keyup.enter="fnsearch"/>
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
        label="start_date"
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
              v-model="menu2"
              :close-on-content-click="false"
              :nudge-right="40"
              transition="scale-transition"
              offset-y
              min-width="auto"
          >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="end_date"
            label="end_date"
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
   </v-layout> 
   
       
       <v-data-table :headers="headers" :items="boards" item-key="title" :search="searchKeyword">
         <template slot="item" slot-scope="props">
           <tr id="chip2" @click="fnView(props.item.B_NO)" :class="`${props.item.STATUS}`">
                  <td>{{ props.item.MEM_ID}}</td>
                   <td>{{ props.item.B_TITLE}}</td>
                   <td>{{ props.item.B_CONTENT}}</td>
                  <td>{{props.item.DUE_DATE}}</td> 
                  <td>{{props.item.INSERT_DATE}}</td>
                 <td><v-chip id="chip" small :class="`${props.item.STATUS} white--text caption my-3`">{{props.item.STATUS}}</v-chip></td> 
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
      
   </v-container>
  </div>
  
  
   <!--<div id="board" v-if="$store.state.mem_id">
       <v-layout row wrap>

       <v-flex xs4>
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
             label="start_date"
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
         <v-flex xs4>

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
         v-model="end_date"
         label="end_date"
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
 </v-layout>
   
     <div>
    </div>

         <v-btn depressed color="primary" @click="fnsearch()">글 검색</v-btn>
     <div>
      <v-text-field type="text" v-model="searchKeyword" placeholder="제목검색" v-on:keyup.enter="fnsearch"/>
       <v-btn class="ma-2" depressed color="primary" @click="fnsearch()">검색</v-btn>
     <v-text-field v-model="searchKeyword" append-icon="mdi-magnify" label="Search" single-line hide-details></v-text-field>
    
     </div>

       
        <v-data-table :headers="headers" :items="boards" item-key="title" :search="searchKeyword">
         <template slot="item" slot-scope="props">
           <tr  @click="fnView(props.item.B_NO)">
              <td>{{ props.item.B_NO}}</td>
                  <td>{{ props.item.MEM_ID}}</td>
                  <td>{{ props.item.B_TITLE}}</td>
                 <td>{{ props.item.B_CONTENT}}</td>
                  <td>{{props.item.INSERT_DATE}}</td>
                  <td>{{props.item.DUE_DATE}}</td> 
                    <td>{{props.item.STATUS}}</td> 
             </tr>
         </template>
        </v-data-table>
      <v-btn depressed color="primary" @click="fnWrite($store.state.mem_id)">글 작성</v-btn>
   </div>-->
   
   </v-container>

</template>

<script>
//import HelloSearch from '@/components/board/HelloSearch.vue'
//import axios from "axios";
export default {
     data() {
    return {
          menu2 :'',
          start_date:'',
          end_date : '',
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
             { text : "ID" , align:"left", sortable : true, value :"B_ID"},
           { text : "TITLE" , align:"left", sortable : true, value :"B_TITLE"},
            { text : "CONTENT" , align:"left", sortable : true, value :"B_CONTENT"},
            { text : "DUE_DATE" , align:"left", sortable : true, value :"DUE_DATE"},
            { text : "INSERT_DATE" , align:"left", sortable : true, value :"INSERT_DATE"},
            { text : "STATUS" , align:"left", sortable : true, value :"STATUS"},
          ]
       }
    },
  created(){
    this.getList()
  },
   methods:{
    getList :function(){
     // const baseURL = 'http://localhost:8080/test2';
       this.$http.post('http://localhost:8080/adminDetail',{mem_id:this.$store.state.mem_id , loginlevel:'2'},{
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

     fnView(SEQ){
       alert("TITLE ::" + SEQ);
       this.$router.push({
         name : "detail",
          params : { contentId :SEQ}
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
  