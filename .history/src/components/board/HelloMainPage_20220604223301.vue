<template>
  <div>
      <h2>맨처음나오는페이지입니다</h2>
      <v-container fluid:grid-list-md="!$vutify.breakponts.xs">
       <v-layout wrap row> 
         <v-flex xs12 sm6 md3 class="pb-2" v-for="i in 4" v-bind:key="i">
          <v-card height="130px" >
             각종현황
           </v-card>
         </v-flex>
         <v-flex xs12 sm4 class="pb-2" v-for="i in 3" v-bind:key="i">
           <v-card height="290px" :color="`#${i}12345`">
             간단한차트
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