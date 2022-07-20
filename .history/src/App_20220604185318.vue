<template>
  <v-app>
    <HelloAppHeader/>
      <v-navigation-drawer>
        <v-list>
        </v-list>    
      </v-navigation-drawer>  
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
     drawer: null,
    items: [
        { icon: 'lightbulb_outline', text: 'Home', path:"/" },
        { icon: 'touch_app', text: 'Reminders', path:"about" },
    ],
  }),

};
</script>
