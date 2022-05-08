<template>
  <v-app>
    <v-app-bar app color="primary" dark>
       <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat>
          <router-link to="/">Home</router-link>
        </v-btn>
        <v-btn flat>
          <router-link to="/about">About</router-link>
        </v-btn>
      </v-toolbar-items>
    
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
