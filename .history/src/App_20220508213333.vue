<template>
  <v-app>
    <HelloAppHeader/>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import HelloAppHeader from '@/components/board/HelloAppHeader.vue';
export default {
  name: 'App',
  components:{HelloAppHeader},
  data: () => ({
    //
  }),

};
</script>
