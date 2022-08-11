<template>
  <v-container fluid>
    <v-row dense >
        <v-col  cols="12" md="6" sm="4" v-for="support in supports" :key="support.name" :to="support.link" >
       <v-card height="100%">
          <v-toolbar dark>ToolBar</v-toolbar>
            <v-card-title id="title">
                <router-link :to="{path:support.link}">{{support.name}}</router-link>
            </v-card-title>
        </v-card>
        </v-col>
    </v-row>
    </v-container>
  <!--<v-card height="100%">
     <v-toolbar color="orange" flat>
      <v-toolbar-title>{{title}}</v-toolbar-title>
      <v-spacer></v-spacer>      
     </v-toolbar>
        <v-card-title>
            <v-avatar>
                <v-icon medium :color="tIconColor">{{tIcon}}</v-icon>
            </v-avatar>
        </v-card-title>
      
    
  </v-card>
  -->
</template>

<script>
export default {
    //props: ['title', 'number', 'bText','tIcon']
       data(){
         return{
  supports:[
  {
    name: '계정관리',
    icon: 'mdi-vuetify',
    link:'/board/edit'
  },
  {
    name: '전체일지조회',
    icon: 'mdi-discord',
    link:'/board/list'}
  
]
 }
       }
}       
</script>

<style>
 #title{
   color:red;
 }
</style>