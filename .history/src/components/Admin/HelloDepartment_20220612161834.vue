<template>
 <v-container>
  <div>
     <v-data-table :headers="headers" :items="department" item-key="title">
          <template slot="item" slot-scope="props">
            <tr >
                <td>{{ props.item.USERID}}</td>
                  <td>{{ props.item.DEPARTMENT_ID}}</td>
                   <td>{{ props.item.DEPARTMENT_NM}}</td>
              </tr>
          </template>
         </v-data-table>
       
  </div>
   </v-container>
</template>

<script>
export default {
   data(){
    return {
      department : [],
        headers :[
            { text : "ID" , align:"left", sortable : false, value :"USERID"},
            { text : "부서(ID)" , align:"left", sortable : true, value :"DEPARTMENT_ID"},
            { text : "부서명" , align:"left", sortable : true, value :"DEPARTMENT_NM"},
           
          ]
    }
   },
   created(){
    this.getDepart()
   },
    methods:{
    getDepart :function(){
       this.$http.post('http://localhost:8080/departlist',{userid:this.$store.state.userid, loginlevel : this.$store.state.loginlevel},{
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