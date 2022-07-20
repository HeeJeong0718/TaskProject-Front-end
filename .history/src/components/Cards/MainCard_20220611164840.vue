<template>
 <v-container fluid>
    <v-row >
        <v-col v-for="support in supports" :key="support.name" :to="support.link">
       <v-card height="100%" >
         <v-container >
         
        </v-card>
        </v-col>
    </v-row>
    </v-container>
 
    <!--<v-row dense>
     <v-toolbar color="orange" flat>
      <v-toolbar-title></v-toolbar-title>
      <v-spacer></v-spacer>      
     </v-toolbar>
        <v-card-title>
            <v-avatar>
                <v-icon></v-icon>
            </v-avatar>
        </v-card-title>
        
     
      <v-col v-for="n in 4" :key="n" cols="12" md="3" sm="6">
        <v-card class="pa-3" outlined tile  style="height: 300px;" color="#1F7087">
          MIDDLE #{{n}}
        </v-card>
      </v-col>
    </v-row>-->
  

  
 
</template>

<script>
export default {
    // props: ['title', 'number', 'bText', 'tIcon' , 'tIconColor', "link"],
     //props: ['name', 'icon', 'link'],
     data(){
         return{
  supports:[
  {
    name: '새로쓰기',
    icon: 'mdi-vuetify',
    link:'/board/edit'
  },
  {
    name: 'Discord community',
    icon: 'mdi-discord',
    link:'/discord-community'},
  {
    name: 'Report a bug',
    icon: 'mdi-bug',
    link:'/board/list'
  },
  {
    name: 'Github issue board',
    icon: 'mdi-github-face',
    link:'/guthub-issue-board'
  },
  {
    name: 'Stack overview',
    icon: 'mdi-stack-overflow',
    link:'/stack-overview'
  },
],
         }
     },
    methods:{
        change(){
            this.$emit('change', this.$router.push({
         name : "edit",
         query : {
           userid : this.$store.state.userid
           
         }
        }));
        }
    }
}
</script>

<style>

</style>