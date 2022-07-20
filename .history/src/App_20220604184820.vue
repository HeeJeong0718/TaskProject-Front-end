<template>
  <v-app>
    <HelloAppHeader/>
     <v-navigation-drawer>
        	<v-list>
                <template v-for="(item, i) in items">
                  <v-list-item
                          v-else
                          :key="i"
                          :to="{path:item.path}"
                      >
                  </v-list-item>
                <template>
        <v-navigation-drawer/>
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
     drawer: null,
    items: [
        { icon: 'lightbulb_outline', text: 'Home', path:"/" },
        { icon: 'touch_app', text: 'Reminders', path:"about" },
    ],
  }),

};
</script>
