<template>
    <div id="board" v-if="$store.state.userid">
      <div>
        <v-text-field type="text" v-model="searchKeyword" placeholder="제목검색"/>
        <v-btn class="ma-2" depressed color="primary" @click="fnsearch()">검색</v-btn>
      <v-btn depressed color="primary" @click="fnWrite($store.state.userid)">글 작성</v-btn>
         <v-row>
      <v-col
        cols="12"
        lg="6"
      >
        <v-menu
          ref="menu1"
          v-model="menu1"
          :close-on-content-click="false"
          transition="scale-transition"
          offset-y
          max-width="290px"
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="dateFormatted"
              label="Date"
              hint="MM/DD/YYYY format"
              persistent-hint
              prepend-icon="mdi-calendar"
              v-bind="attrs"
              @blur="date = parseDate(dateFormatted)"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="date"
            no-title
            @input="menu1 = false"
          ></v-date-picker>
        </v-menu>
        <p>Date in ISO format: <strong>{{ date }}</strong></p>
      </v-col>

      </div>
       <table v-if="this.boards !='null'">
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
                 <td>{{board.USERID}}33</td>
                 <td>{{board.USERNAME}}</td>
                 <td>{{board.TITLE}}</td>
                 <td>{{board.CONTENT}}</td>
                 <td>{{board.INSERT_DATE}}</td>
               </tr>
           </tbody>
       </table>
       <table v-if="this.boards =='null'">
         <thead>
           <th>테이블없다</th>
         </thead>
       </table>
    </div>
    
    
    
</template>
 


<script>
//import HelloSearch from '@/components/board/HelloSearch.vue'
//import axios from "axios";

export default {
     data() {
    return {
          boards: '',
          searchboards :'' ,
          userid : '',
          searchKeyword : '',
          searchname : '',
          searchid : '',
          searchtitle : '',
          searchcontent : '',
          loginlevel : ''
       }
    },
  created(){
    this.getList()
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
       this.$http.post('http://localhost:8080/testSearch',{title :this.searchKeyword},{
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
