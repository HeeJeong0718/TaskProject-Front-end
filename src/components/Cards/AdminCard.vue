<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex  xs4>
        <v-card dark style="background-color:#3cd1c2;">
          <v-row align="center">
            <v-col
             cols="8"
            >
            <v-card-title>DONE</v-card-title>
           </v-col>
           <v-col
             cols="4"
            >
            <v-card-title>{{boardCount.DONE}}/{{boardCount.BOARD_ALL}}</v-card-title>
           </v-col>
            </v-row>
        </v-card>
      </v-flex>
      <v-flex  xs4>
        <v-card dark style="background-color:tomato;">
          <v-row align="center">
            <v-col
             cols="8"
            >
            <v-card-title>PROCESSING</v-card-title>
           </v-col>
           <v-col
             cols="4"
            >
            <v-card-title>{{boardCount.PROCESSING}}/{{boardCount.BOARD_ALL}}</v-card-title>
           </v-col>
           
            </v-row>
        </v-card>
      </v-flex>
      <v-flex  xs4>
        <v-card dark style="background-color:ORANGE;">
          <v-row align="center">
            <v-col
             cols="8"
            >
            <v-card-title>ONGOING</v-card-title>
           </v-col>
           <v-col
             cols="4"
            >
            <v-card-title>{{boardCount.ONGOING}}/{{boardCount.BOARD_ALL}}</v-card-title>
           </v-col>
           
            </v-row>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
        //props: ['title', 'number', 'bText','tIcon']
          data(){
            return{
              boardCount :'',
      supports:[
      {
        name: '부서관리',
        icon: 'mdi-vuetify',
        link:'/admin/department'
      },
      {
        name: '전체일지조회',
        icon: 'mdi-discord',
        link:'/board/adminlist'}
      
    ]
    }
   },
  mounted(){
    this.$http.post('http://localhost:8080/boardCount',{  mem_no : this.$store.state.mem_no},{
            method : 'POST',
            body : JSON.stringify({userid : this.userid}),
           headers : {
         'Content-Type' : 'application/json',
         'Accept' : '*/*'
           } 
        }).then(response => {
          return response;
      }).then(response => {
        this.boardCount = response.data.list;
        console.log("this.boardCount" + JSON.stringify(this.boardCount));
      })
    },

}       
</script>

<style>
 #title{
   color:red;
 }
</style>