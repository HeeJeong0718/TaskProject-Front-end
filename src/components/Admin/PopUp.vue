<template>
     <v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="red lighten-2"
          dark
          v-bind="attrs"
          v-on="on"
        >
         부서추가
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <h3>부서추가</h3>
        </v-card-title>
        <v-card-text>
           <v-form class="px-4">
           <v-text-field label="부서ID" v-model="dep_id" prepend-icon="mdi-folder"></v-text-field>
           <v-text-field label="부서명" v-model="dep_nm" prepend-icon="mdi-folder"></v-text-field>
           <v-btn text class="success mx-0 mt-3" @click="submit">추가하기</v-btn>
           </v-form>
        </v-card-text>
      </v-card>
    </v-dialog> 
</template>

<script>
export default {
   data(){
    return{
         dialog:'',
         dep_id:'',
         dep_nm :''
    }
   },
   methods:{
       submit:function(){
        this.$http.post('http://localhost:8080/depInsert',{dep_id : this.dep_id , dep_nm : this.dep_nm }, { //파라미터릂 여기에 줘야함 ->스프링 컨트롤러에 있는 vo랑똑같은이름써저야한다!!!
            method : 'POST',
            body : JSON.stringify({}),
            headers : {
              'Content-Type' : 'application/json',
              'Accept' : '*/*'
           }
        }).then(response => {
         console.log("rs1" + JSON.stringify(response));
         alert("작성되었습니다!!");
         
         })
        }
   }
}
</script>

<style>

</style>