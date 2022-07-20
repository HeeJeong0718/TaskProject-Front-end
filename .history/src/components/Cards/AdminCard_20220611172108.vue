<template>
  <v-container fluid>
    <v-row dense >
        <v-col  cols="12" md="6" sm="4" v-for="support in supports" :key="support.name" :to="support.link" >
       <v-card height="100%">
            <v-card-title>
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
    name: '새로쓰기',
    icon: 'mdi-vuetify',
    link:'/board/edit'
  },
  {
    name: '나의업무일지',
    icon: 'mdi-discord',
    link:'/board/list'},
  {
    name: 'Report a bug',
    icon: 'mdi-bug',
    link:'/board/list'
  },
  {
    name: 'Github issue board',
    icon: 'mdi-github-face',
    link:'/guthub-issue-board'
  }
]
 }
       }
}       
</script>

<style>

</style>