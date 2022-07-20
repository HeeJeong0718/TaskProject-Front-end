<template>
   <v-card height="100%">
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