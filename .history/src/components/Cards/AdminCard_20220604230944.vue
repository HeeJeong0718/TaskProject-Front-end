<template>
  <v-card height="100%">
     <v-toolbar color="orange" flat>
      <v-toolbar-title>{{title}}</v-toolbar-title>
      <v-spacer></v-spacer>      
     </v-toolbar>
     <v-card-text>{{bText}}</v-card-text>    
    
  </v-card>
</template>

<script>
export default {
     props: ['title', 'number', 'bText']
}
</script>

<style>

</style>