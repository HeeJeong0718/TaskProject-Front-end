<template>
      <v-container fluid:grid-list-md="!$vutify.breakponts.xs">
      
       <v-layout wrap row> 
          <v-flex xs12 sm4 md3 class="pb-2">
              <MainCard/>
          <MainCard
               name='/board/edit22'
              icon= 'mdi-vuetify'
              link='/board/edit'
           />
      <!--        
         </v-flex>
         <v-flex xs12 sm4 md3  class="pb-2">
          <MainCard
            title="New"
             bText="주간업무일지등록"
             tIcon="mdi-pencil-plus"
             tIconColor="primary"
          />
         </v-flex>
         <v-flex xs12 sm4 md3  class="pb-2">
          <MainCard
            title="New"
             bText="나의업무일지"
             tIcon="mdi-file-document-outline"
             tIconColor="primary"
          />
         </v-flex>
         <v-flex xs12 sm4 md3  class="pb-2">
          <MainCard
            title="New"
             bText="전체업무일지"
             tIcon="mdi-file"
             tIconColor="primary"
        
          />-->
         </v-flex>
         <v-flex xs12 sm4 class="pb-2">
           <AdminCard
            title="나의 계정"
             bText="계정수정"
              tIcon="mdi-account-details"
             tIconColor="primary"/>
         </v-flex>
         <v-flex xs12 sm4 class="pb-2">
           <AdminCard
            title="멤버조회"
             bText="계정관리"
                tIcon="mdi-account-supervisor-circle"
             tIconColor="primary"/>
         </v-flex>
        <v-flex xs12 sm4 class="pb-2">  
           <v-card>
      <v-container pa-1>  
          <v-layout row>
              <v-flex xs7>
                  <v-card-title primary-title>
                      <div>
                          <div v-on:click="test()">title</div>
                          <div>tltl3</div>
                      </div>
                  </v-card-title>
              </v-flex>
              <v-flex xs5>
                  <v-card-title>
                      <v-avatar>
                            <v-icon medium :color="tIconColor">icon</v-icon>
                      </v-avatar>
                  </v-card-title>
              </v-flex>
          </v-layout>
          <v-divider></v-divider>
          <v-card-actions class="pa-2">
              <v-icon></v-icon>
               <span>bText</span>
               <v-spacer></v-spacer>
          </v-card-actions>
      </v-container>
     </v-card>
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