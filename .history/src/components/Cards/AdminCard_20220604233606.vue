<template>
  <v-card height="100%">
     <v-toolbar color="orange" flat>
      <v-toolbar-title>{{title}}</v-toolbar-title>
      <v-spacer></v-spacer>      
     </v-toolbar>
        <v-card-title>
            <v-avatar>
                <v-icon medium :color="tIconColor">{{tIcon}}</v-icon>
            </v-avatar>
        </v-card-title>
      
    
  </v-card>
</template>

<script>
export default {
     props: ['title', 'number', 'bText','tIcon']
}
</script>

<style>

</style>