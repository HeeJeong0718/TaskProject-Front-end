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
        
        <v-dialog v-if="showModal" @close="showModal = false">
          <PopUp/>
          <h3 slot="header"></h3>
          <div slot="body">
              제목 
              작성자 
              내용 
              <button class="btn btn-info">수정</button>
          </div>
        </v-dialog>
  
  </div>
   </v-container>
</template>

<script>
  
import PopUp from './PopUp.vue'
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
       this.$http.post('http://localhost:8080/departlist',{},{
            method : 'POST',
            body : JSON.stringify({userid : this.userid}),
           headers : {
         'Content-Type' : 'application/json',
         'Accept' : '*/*'
           } 
        }).then(response => {
          return response;
      }).then(response => {
        this.department = response.data.list;
      })
    },
    
}}

</script>

<style>

</style>