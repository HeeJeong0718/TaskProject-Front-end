<template>
 <v-container>
  <div>
     <v-data-table :headers="headers" :items="department" item-key="title">
          <template slot="item" slot-scope="props">
            <tr >
                <td>{{ props.item.DEP_NO}}</td>
                  <td>{{ props.item.DEP_ID}}</td>
                   <td>{{ props.item.DEP_NM}}</td>
                    <td>{{ props.item.INSERT_DATE}}</td>
              </tr>
          </template>
         </v-data-table>
          <v-btn depressed color="primary" @click='Add()'>추가</v-btn>
  </div>
   </v-container>
</template>

<script>
export default {
   data(){
    return {
      department : [],
        headers :[
            { text : "NO" , align:"left", sortable : false, value :"DEP_NO"},
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
         console.log("rs" + JSON.stringify(response.data.list));
         console.log("this.boards" + JSON.stringify(this.boards));
      })
    },
}}

</script>

<style>

</style>