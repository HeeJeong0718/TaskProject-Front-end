<template>
   <v-container>
    <div id="board" v-if="$store.state.userid">
      <div>
      <!--  <v-text-field type="text" v-model="searchKeyword" placeholder="제목검색" v-on:keyup.enter="fnsearch"/>
        <v-btn class="ma-2" depressed color="primary" @click="fnsearch()">검색</v-btn>-->
      <v-text-field v-model="searchKeyword" append-icon="mdi-magnify" label="Search" single-line hide-details></v-text-field>
          <v-col cols="12" sm="6" md="4">
            <v-menu
              ref="menu"
              v-model="menu"
              :close-on-content-click="false"
              :return-value.sync="date"
              transition="scale-transition"
              offset-y
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="due_date"
                  label="Picker in menu"
                  prepend-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="due_date"
                no-title
                scrollable
              >
                <v-spacer></v-spacer>
                <v-btn
                  text
                  color="primary"
                  @click="menu = false"
                >
                  Cancel
                </v-btn>
                <v-btn
                  text
                  color="primary"
                  @click="$refs.menu.save(due_date)"
                >
                  OK
                </v-btn>
                <v-btn class="ma-2" depressed color="primary" @click="fnsearch()">검색</v-btn>-->
              </v-date-picker>
            </v-menu>
          </v-col>

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
         <v-data-table :headers="headers" :items="boards"  :search="searchKeyword" >
          <template slot="item" slot-scope="props">
            <tr  @click="fnView(props.item.TITLE)">
                  <td>{{ props.item.USERID}}</td>
                   <td>{{ props.item.USERNAME}}</td>
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
       <v-btn depressed color="primary" @click="fnWrite($store.state.userid)">글 작성</v-btn>
    </div>
    
    </v-container>
    
</template>
 


<script>
//import HelloSearch from '@/components/board/HelloSearch.vue'
//import axios from "axios";

export default {
     data() {
    return {
         date:'',
          boards: [],
          searchboards :'' ,
          userid : '',
          due_date :'',
          searchKeyword : '',
          searchname : '',
          searchid : '',
          searchtitle : '',
          searchcontent : '',
          searchdate : '',
          loginlevel : '',
          headers :[
            { text : "ID" , align:"left", sortable : false, value :"USERID"},
            { text : "NAME" , align:"left", sortable : true, value :"USERNAME"},
            { text : "TITLE" , align:"left", sortable : true, value :"TITLE"},
            { text : "CONTENT" , align:"left", sortable : true, value :"CONTENT"},
            { text : "INSERT_DATE" , align:"left", sortable : false, value :"INSERT_DATE"},
          ]
       }
    },
  created(){
    this.getList()
  },
  computed(){

  },
   methods:{
    getList :function(){
       this.$http.post('http://localhost:8080/taskall',{userid:this.$store.state.userid, loginlevel : this.$store.state.loginlevel},{
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
       this.$http.post('http://localhost:8080/boardSearch',{title :this.searchKeyword, due_date:this.DUE_DATE},{
            method : 'POST',
            body : JSON.stringify({searchKeyword : this.searchKeyword}),
           headers : {
         'Content-Type' : 'application/json',
         'Accept' : '*/*'
           } 
        }).then(response => {
          return response;
      }).then(response => {
            this.searchboards = response.data.list;
            this.searchname = response.data.list.USERNAME;
            this.searchid = response.data.list.USERID;
            this.searchtitle = response.data.list.TITLE;
            this.searchcontent = response.data.list.CONTENT;
            this.searchdate = response.data.list.DUE_DATE;
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
