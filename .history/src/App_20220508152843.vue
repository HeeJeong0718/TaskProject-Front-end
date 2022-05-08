<template>
  <v-app>
    <v-app-bar app color="primary" dark>appbar</v-app-bar>
    <HelloWorld/>
  </v-app>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'App',
  components:HelloWorld,
  data: () => ({
    //
  }),
};
</script>
