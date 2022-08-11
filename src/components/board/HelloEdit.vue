<template>
  <div>
    <h1 class="subheading grey--text">WRITE</h1>
   <v-container class="my-6">
      <v-layout row wrap>
        <v-flex xs12 md6>
          <v-card class="pa-5" height="380px">
          
            <div class="mt-4" align="left">
               <v-text-field dense label="UserID" v-model="$store.state.mem_id" />  
           </div>
          
           <div class="mt-4" align="left">
              <v-text-field dense label="TITLE" v-model="b_title" />   
           </div>
           <div class="mt-4" align="left">
            <v-text-field dense label="CONTENT" v-model="b_content" />      
           </div>
            <div class="mb-3" align="left">
            <v-select dense :items="status"  v-model ="status" label="status" ></v-select>
           </div>
             <v-menu
                   v-model="menu2"
                   :close-on-content-click="false"
                   :nudge-right="40"
                   transition="scale-transition"
                   offset-y
                   min-width="auto"
               >
             <template v-slot:activator="{ on, attrs }">
               <v-text-field dense
                 v-model="due_date"
                 label="due-date"
                 prepend-icon="mdi-calendar"
                 readonly
                 v-bind="attrs"
                 v-on="on"
               ></v-text-field>
             </template>
             <v-date-picker
               v-model="due_date"
               @input="menu2 = false"
             ></v-date-picker>
           </v-menu>
           <div class="my-5" align="left">
            <v-btn depressed color="primary" @click='toBack()' >뒤로가기</v-btn>
             <v-btn depressed color="error"  @click='write()'>작성</v-btn>
         </div>
          </v-card>
        </v-flex>
      </v-layout>
     
      <!-- <div style ="margin:30px">
        <div align="right">
           <v-btn depressed color="primary" @click='toBack()' >뒤로가기</v-btn>
            <v-btn depressed color="error"  @click='write()'>작성</v-btn>
        </div>
          <div class="mb-3" align="left">
            <label for="exampleFormControlInput1" class="form-label">UserID</label>
             <v-text-field type="text" id="exampleFormControlInput1" v-model="$store.state.mem_id" />  
        </div>
          <div class="mb-3" align="left">
            <label for="exampleFormControlInput1" class="form-label">username</label>
            <v-text-field type="text" id="exampleFormControlInput1" v-model="username"/>  
        </div> 
         <div class="mb-3" align="left">
            <label for="exampleFormControlInput1"     class="form-label">Titel</label>
             <v-text-field type="text" id="exampleFormControlInput1" v-model="b_title"/>  
        </div>
         <div class="mb-3" align="left">
            <label for="exampleFormControlInput1" class="form-label">CONTENT</label>
            <v-textarea type="text" id="exampleFormControlInput1" v-model="b_content"/>
        </div>
         <div class="mb-3" align="left">
         <v-select :items="status"  v-model ="status" label="status" ></v-select>

        </div>

          <v-menu
                v-model="menu2"
                :close-on-content-click="false"
                :nudge-right="40"
                transition="scale-transition"
                offset-y
                min-width="auto"
            >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="due_date"
              label="due-date"
              prepend-icon="mdi-calendar"
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="due_date"
            @input="menu2 = false"
          ></v-date-picker>
        </v-menu>

    </div> -->
    </v-container>
   </div>
</template>

<script>

export default {
 data(){
     return{
          menu2:'',
           username :'',
           userid :this.$store.state.userid, //this붙이는거잊지말기
           b_title :'',
           b_content :'',
           due_date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
          modifyDetail :{},
          status :['ongoing', 'processing','done']
     }
 },


  
 methods:{
     toBack(){
             if(this.$store.state.loginlevel=="1"){
            this.$router.push({
            name : 'adminList'
         
        })
        }else{
           this.$router.push({
            name : 'List'
        })
        }
     },
        write:function(){
        this.$http.post('http://localhost:8080/boardInsert',{ mem_no : this.$store.state.mem_no , b_id : this.$store.state.mem_id ,b_title :this.b_title, b_content : this.b_content, due_date : this.due_date , status : this.status}, { //파라미터릂 여기에 줘야함 ->스프링 컨트롤러에 있는 vo랑똑같은이름써저야한다!!!
            method : 'POST',
            body : JSON.stringify({}),
            headers : {
              'Content-Type' : 'application/json',
              'Accept' : '*/*'
           }
        }).then(response => {
         console.log("rs1" + JSON.stringify(response));
         alert("작성되었습니다!!");
              if(this.$store.state.loginlevel=="1"){
            this.$router.push({
            name : 'adminList'
         
        })
        }else{
           this.$router.push({
            name : 'List'
        })
        }
      
         })
        }
 },
 
}
</script>

<style>

</style>