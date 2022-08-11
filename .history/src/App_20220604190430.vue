<template>
  <v-app>
      <v-navigation-drawer app v-model="drawer" clipped>Navigation Lists</v-navigation-drawer>
    
 <v-app-bar app color="primary" dark  v-if="isUserlogin">
        <v-app-bar-nav-icon  @click="drawer=!drawer"></v-app-bar-nav-icon>
       <v-btn text to="/board/login">
       <span class="mr-2">Home</span>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn depressed color="primary" @click='UserList()'>
       <span class="mr-2">  User : {{$store.state.userid}} </span> 
       <span class="mr-2">  Level : {{$store.state.loginlevel}}</span> 
       </v-btn>
        <v-btn depressed color="primary" @click='logoutUser()'>
       <span class="mr-2" >LOGOUT</span>
      </v-btn> 
      </v-app-bar>
     <v-app-bar app color="primary" dark  v-else>
       <v-btn text to="/board/login">
       <span class="mr-2">Home</span>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn text to="/board/register">
       <span class="mr-2">Sign up</span>
      </v-btn>
      </v-app-bar>    
    <v-main>
      <router-view/>
    </v-main>
       <v-footer color="primary" dark app>
      Vuetify
    </v-footer>
  </v-app>
</template>

<script>
//import HelloAppHeader from '@/components/board/HelloAppHeader.vue';
export default {
  name: 'App',
  //components:{HelloAppHeader},
  data: () => ({
    //
     drawer: null,
    
  }),

};
</script>
