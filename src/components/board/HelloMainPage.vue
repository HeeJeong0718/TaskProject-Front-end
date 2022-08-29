<template>
      <v-container fluid:grid-list-md="!$vutify.breakponts.xs">
        <MainCard/>
         <AdminCard/>      
      </v-container> 
    
</template>

<script>
import MainCard from '@/components/Cards/MainCard.vue';
import AdminCard from '@/components/Cards/AdminCard.vue';
export default {
   components:{
     MainCard,
     AdminCard
   },
   data() {
    return {
        
       }
    },
   methods:{
        test(){
       this.$router.push({
         name : "edit",
         query : {
           userid : this.$store.state.userid
           
         }
        });
          console.log("userid" + this.$store.state.userid);
     },
   }
  
    
}
</script>

<style>

</style>