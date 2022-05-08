<template>
  <div>
        <v-app-bar
      app
      color="primary"
      dark
    >
       <v-btn text to="/board/login">
       <span class="mr-2">Home</span>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn text to="/board/register">
       <span class="mr-2">Sign up</span>
      </v-btn>
       <span class="mr-2"> USER: {{$store.state.userid}}</span> 
        <v-btn depressed color="primary" @click='loginform()'>
       <span class="mr-2" >LOGOUT</span>
      </v-btn> 
      </v-app-bar>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>