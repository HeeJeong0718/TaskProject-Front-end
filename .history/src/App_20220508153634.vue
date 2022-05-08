<template>
  <v-app>
    <v-app-bar app color="primary" dark>appbar</v-app-bar>
     <HelloTest/>
  </v-app>
   
</template>

<script>
import HelloTest from '@/components/board/HelloTest.vue';

export default {
  name: 'App',
  components: {HelloTest},
  data: () => ({
    //
  }),
};
</script>
