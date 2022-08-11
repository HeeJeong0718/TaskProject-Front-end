<template>
  <v-card>
      <!--<v-container pa-1>  
          <v-layout row>
              <v-flex xs7>
                  <v-card-title primary-title>
                      <div>
                          <div
                          >{{title}}</div>
                          <div>{{number}}</div>
                      </div>
                  </v-card-title>
              </v-flex>
              <v-flex xs5>
                  <v-card-title>
                      <v-avatar>
                            <v-icon medium :color="tIconColor">{{tIcon}}</v-icon>
                      </v-avatar>
                  </v-card-title>
              </v-flex>
          </v-layout>
          <v-divider></v-divider>
          <v-card-actions class="pa-2">
              <v-icon></v-icon>
               <v-btn>{{bText}} {{link}}</v-btn>
               <v-spacer></v-spacer>
          </v-card-actions>
      </v-container-->
     <v-list-item v-for="support in supports" :key="support.name" :to="support.link">

     </v-list-item>
  </v-card>
</template>

<script>
export default {
     props: ['title', 'number', 'bText', 'tIcon' , 'tIconColor', "link"],
     data(){
         return{
             supports:[
  {
    name: 'Consulting and suppourt',
    icon: 'mdi-vuetify',
    link:'/consulting-and-support'
  },
  {
    name: 'Discord community',
    icon: 'mdi-discord',
    link:'/discord-community'},
  {
    name: 'Report a bug',
    icon: 'mdi-bug',
    link:'/report-a-bug'
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