<template>
  <div>
      <h2>맨처음나오는페이지입니다</h2>
      <v-container fluid:grid-list-md="!$vutify.breakponts.xs">
       <v-layout wrap row> 
         <v-flex xs12 sm6 md3 class="pb-2" v-for="i in 4" v-bind:key="i">
           <v-card>
             각종현황
           </v-card>
         </v-flex>
       </v-layout>
      </v-container> 
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>