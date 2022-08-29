<template>
    <div>
    
     <v-container class="my-6" grid-list-md text-xs-center>
     <div  class="pa-3">
       <h3  class="subheading grey--text">유저 관리</h3>
       <div>
         <v-card-text  class="pa-3" v-for="board in userboards" :key="board.B_NO" >
           <v-layout class="pa-3" row wrap  style="border-left : 4px solid #546e6c;">
              <v-flex xs6 sm4 md2>
                <div class="caption grey--text">User</div>
                <div>{{board.B_ID}}</div>
              </v-flex>   
              <v-flex xs6 sm4 md2>
                <div class="caption">All</div>
                <div><v-chip  small :class="`black--text caption`">{{board.BOARD_ALL}}</v-chip></div>
              </v-flex>   
              <v-flex xs6 sm4 md2>
                <div class="caption" id="tongoing">OnGoing</div>
                <div><v-chip color="orange" small :class="`white--text caption`">{{board.ONGOING}}</v-chip></div>
              </v-flex>  
              <v-flex xs6 sm4 md2>
                <div class="caption">processing</div>
                <div><v-chip id="processing" small :class="`white--text caption`">{{board.PROCESSING}}</v-chip></div>
              </v-flex>  
              <v-flex xs6 sm4 md2>
                <div class="caption">Done</div>
                <div><v-chip id="chip" small :class="`white--text caption`">{{board.DONE}}</v-chip></div>
              </v-flex>  
           </v-layout>
         </v-card-text>
        
       </div>
      </div>
     </v-container>
    
    </div>
 </template>
  
<script>
    //import HelloSearch from '@/components/board/HelloSearch.vue'
      import axios from "axios";
    export default {
         data() {
        return {
              menu2 :'',
              userboards:'',
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
          axios.get('http://localhost:8080/userAll',{
          params:{
             mem_id:this.$store.state.mem_id,
             mem_no : this.$store.state.mem_no
          }
         })
      .then(response =>{
      this.userboards = response.data.list  
      })
      .catch(error =>{
      console.log(error);
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
         
                  
    
        
        
       }
    }
    
    </script> 
    <style scoped>
     
      .board.done{
       border-left : 4px solid #3cd1c2;
      }
      .board.ongoing{
       border-left : 4px solid orange;
      }
      .board.complete{
       border-left : 4px solid tomato;
      }
      #chip{
       background :  #3cd1c2;
      }
      
      #board.ongoing{
       background :  orange;
      }
      #processing{
       background  : tomato;
      }
     
      </style>
      