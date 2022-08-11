<template>
  <v-app>
     <HelloAppHeader/>
    <v-content class="mx-4 mb-4">
      <router-view/>
    </v-content>
      <!-- <v-footer color="primary" dark app>
      Vuetify
    </v-footer>-->
  </v-app>
</template>

<script>
//import HelloAppHeader2 from '@/components/board/HelloAppHeader2.vue';
import HelloAppHeader from '@/components/board/HelloAppHeader.vue';
export default {
  name: 'App',
  components:{HelloAppHeader},
 data(){
    return{
      
    }
  },

};
</script>
<style>
 
</style>