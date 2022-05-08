<template>
  <v-app>
    <v-app-bar app color="primary" dark>appbar</v-app-bar>
     <HelloList/>
  </v-app>
   
</template>

<script>
import HelloList from '@/components/board/HelloList.vue';

export default {
  name: 'App',
  components: {HelloList},
  data: () => ({
    //
  }),
};
</script>
