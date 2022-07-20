<template>
  <v-app>
      <v-navigation-drawer app v-model="drawer">Navigation Lists</v-navigation-drawer>
     <HelloAppHeader/>
    
    <v-main>
      <router-view/>
    </v-main>
       <v-footer color="primary" dark app>
      Vuetify
    </v-footer>
  </v-app>
</template>

<script>
import HelloAppHeader from '@/components/board/HelloAppHeader.vue';
export default {
  name: 'App',
  components:{HelloAppHeader},
  data: () => ({
    //
     //drawer: null,
    
  }),

};
</script>
