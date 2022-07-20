<template>

   <v-container>
 <v-layout row wrap>

        <v-flex xs6>
       <v-menu
              ref="menu"
              v-model="menu"
              :close-on-content-click="false"
              :return-value.sync="start_date"
              transition="scale-transition"
              offset-y
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="start_date"
                  label="Picker in menu"
                  prepend-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
                 <v-text-field
                  v-model="start_date"
                  label="Picker in menu"
                  prepend-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="start_date"
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
                  @click="$refs.menu.save(start_date)"
                >
                  OK
                </v-btn>
              </v-date-picker>
              
            </v-menu>
               <v-menu
              ref="menu"
              v-model="menu"
              :close-on-content-click="false"
              :return-value.sync="start_date"
              transition="scale-transition"
              offset-y
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="start_date"
                  label="Picker in menu"
                  prepend-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
                 <v-text-field
                  v-model="start_date"
                  label="Picker in menu"
                  prepend-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="start_date"
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
                  @click="$refs.menu.save(start_date)"
                >
                  OK
                </v-btn>
              </v-date-picker>
              
            </v-menu>
        </v-flex>   
 </v-layout>
    <div id="board" v-if="$store.state.mem_id">
      
      <div>
         
            <v-menu
              ref="menu"
              v-model="menu"
              :close-on-content-click="false"
              :return-value.sync="start_date"
              transition="scale-transition"
              offset-y
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="start_date"
                  label="Picker in menu"
                  prepend-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
                 <v-text-field
                  v-model="start_date"
                  label="Picker in menu"
                  prepend-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="start_date"
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
                  @click="$refs.menu.save(start_date)"
                >
                  OK
                </v-btn>
              </v-date-picker>
              
            </v-menu>
           






        
           <v-col cols="5" sm="6" md="4">
            <v-menu
              ref="menu"
              v-model="menu"
              :close-on-content-click="false"
              :return-value.sync="start_date"
              transition="scale-transition"
              offset-y
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="end_date"
                  label="Picker in menu"
                  prepend-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="end_date"
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
                  @click="$refs.menu.save(end_date)"
                >
                  OK
                </v-btn>
              </v-date-picker>
            </v-menu>
          </v-col>
       </div>

          <v-btn depressed color="primary" @click="fnsearch()">글 검색</v-btn>
      <div>
      <!--  <v-text-field type="text" v-model="searchKeyword" placeholder="제목검색" v-on:keyup.enter="fnsearch"/>
        <v-btn class="ma-2" depressed color="primary" @click="fnsearch()">검색</v-btn>-->
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
       this.$http.post('http://localhost:8080/boardSearch',{start_date :this.start_date, end_date : this.end_date},{
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
             this.boards = response.data.list;
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
