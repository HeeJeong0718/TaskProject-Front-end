<template>
      <v-container fluid:grid-list-md="!$vutify.breakponts.xs">
       <v-layout wrap row> 
          <v-flex xs12 sm6 md3 class="pb-2">
          <MainCard
            title="New"
             bText="일일업무일지등록"
             tIcon="mdi-pencil-plus"
             tIconColor="success"
          />
         </v-flex>
         <v-flex xs12 sm6 md3 class="pb-5">
          <MainCard
            title="New"
             bText="주간업무일지등록"
             tIcon="mdi-pencil-plus"
             tIconColor="primary"
          />
         </v-flex>
         <v-flex xs12 sm6 md3 class="pb-5">
          <MainCard
            title="New"
             bText="나의업무일지"
             tIcon="mdi-file-document-minus-outline"
             tIconColor="primary"
          />
         </v-flex>
         <v-flex xs12 sm6 md3 class="pb-5">
          <MainCard
            title="New"
             bText="전체업무일지"
          />
         </v-flex>
         <v-flex xs12 sm4 class="pb-2">
           <AdminCard
            title="나의 계정"
             bText="계정수정"/>
         </v-flex>
         <v-flex xs12 sm4 class="pb-2">
           <AdminCard
            title="멤버조회"
             bText="계정관리"/>
         </v-flex>
       </v-layout>
      </v-container> 
</template>

<script>
import MainCard from '@/components/Cards/MainCard.vue';
import AdminCard from '@/components/Cards/AdminCard.vue';
export default {
   components:{
     MainCard,
     AdminCard
   }
}
</script>

<style>

</style>