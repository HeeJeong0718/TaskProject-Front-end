<template>
 <v-container>
  <div>
     <v-data-table :headers="headers" :items="department" item-key="title">
      <template slot="item" slot-scope="props">
        <tr>
               <td>{{ props.item.DEP_NO}}</td>
               <td  @click="fnView(props.item.DEP_NO)">{{ props.item.DEP_ID}}</td>
               <td>{{ props.item.DEP_NM}}</td>
               <td>{{props.item.INSERT_DATE}}</td>
          </tr>
      </template>
         </v-data-table>
          <v-flex>
          <PopUp/>
        </v-flex>
  </div>
   </v-container>
</template>

<script>
  
import PopUp from './PopUp.vue'
import axios from "axios";

export default {
  
  components:{PopUp},
   data(){
    return {
      showModal:'',
      department : [],
      editDialog:'',
      dep_id:'',
      curSelectIndex:'',
      selectedData: {
          dep_id: '',
          dep_nm: ''
        },
      dialog:'',
        headers :[
            { text : "NO" , align:"left", sortable : true, value :"DEP_NO"},
            { text : "부서(ID)" , align:"left", sortable : true, value :"DEP_ID"},
            { text : "부서명" , align:"left", sortable : true, value :"DEP_NM"},
             { text : "등록일" , align:"left", sortable : true, value :"INSERT_DATE"},
           
          ]
    }
   },
   created(){
    this.getDepart()
   },
    methods:{
      fnView(DEP_NO){
       alert("DEP_NO ::" + DEP_NO);
       this.$router.push({
         name : "department_detail",
          params : { contentId :DEP_NO}
          });
    
     },
    getDepart :function(){
      axios.get('http://localhost:8080/departlist',{
          
         })
      .then(response =>{
      this.department = response.data.list 
      })
      .catch(error =>{
      console.log(error);
      })
    },
    
}}

</script>

<style>

</style>