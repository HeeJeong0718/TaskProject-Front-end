<template>
  <v-card height="50%">
     <v-toolbar color="orange" flat>
      <v-toolbar-title>{{title}}</v-toolbar-title>
      <v-spacer></v-spacer>      
     </v-toolbar>
      <v-flex xs5>
        <v-card-title>
            <v-avatar>
                <v-icon medium :color="tIconColor">{{tIcon}}</v-icon>
            </v-avatar>
        </v-card-title>
       </v-flex>
    
  </v-card>
</template>

<script>
export default {
     props: ['title', 'number', 'bText','tIcon']
}
</script>

<style>

</style>