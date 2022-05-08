<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <HelloHeader/>  
    </v-app-bar>
    <v-content>
     <HelloList/>
    </v-content>
    
  </v-app>
   
</template>

<script>
import HelloList from '@/components/board/HelloList.vue';
import HelloHeader from '@/components/HelloHeader.vue';
export default {
  name: 'App',
  components: {HelloList , HelloHeader},
  data: () => ({
    //
  }),
};
</script>
