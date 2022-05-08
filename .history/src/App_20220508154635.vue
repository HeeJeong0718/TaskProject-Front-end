<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      
        <v-nav>
          <router-link to="/">Home</router-link>
       
      </v-nav>
    
    </v-app-bar>
    <v-content>
        <HelloHeader/>  
     
    </v-content>
    
  </v-app>
   
</template>

<script>
import HelloHeader from '@/components/HelloHeader.vue';
export default {
  name: 'App',
  components: {HelloHeader},
  data: () => ({
    //
  }),
};
</script>
