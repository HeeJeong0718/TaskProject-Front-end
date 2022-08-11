<template>
      <v-container fluid:grid-list-md="!$vutify.breakponts.xs">
       <v-layout wrap row> 
         <v-flex xs12 sm6 md3 class="pb-5" v-for="i in 4" v-bind:key="i">
          <MainCard
           title="최근게시물"
            number="343"
             bText="3시간 전"
          />
         </v-flex>
         <v-flex xs12 sm4 class="pb-2" v-for="j in 3" v-bind:key="j">
           <v-card height="290px" >
             간단한차트
           </v-card>
         </v-flex>
       </v-layout>
      </v-container> 
</template>

<script>
import MainCard from '@/components/Cards/MainCard.vue';
export default {
   components:{
     MainCard
   }
}
</script>

<style>

</style>