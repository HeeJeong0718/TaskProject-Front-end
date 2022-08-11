<template>
  <v-card>
     <v-container pa-1>  
          <v-layout row v-for="support in supports" :key="support.name" :to="support.link">
              <v-flex xs7>
                  <v-card-title primary-title>
                      <div>
                          <div>{{support.name}}</div>
                          <div></div>
                      </div>
                  </v-card-title>
              </v-flex>
          <v-divider></v-divider>
          <v-card-actions class="pa-2">
              <v-icon></v-icon>
               <v-btn></v-btn>
               <v-spacer></v-spacer>
          </v-card-actions>
      </v-container>

   
     <!--<v-list-item v-for="support in supports" :key="support.name" :to="support.link">
         <v-card-title primary-title>
                      <div>
                          <div
                          >{{support.name}}</div>
                        
                      </div>
                  </v-card-title>
     </v-list-item>-->
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
    name: '/board/edit22',
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