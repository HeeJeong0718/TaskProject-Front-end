<template>
   <v-container>
       <div style ="margin:30px">
        <div align="right">
           <v-btn depressed color="primary" @click='toBack()' >뒤로가기</v-btn>
            <v-btn depressed color="error"  @click='write()'>작성</v-btn>
        </div>
        <p>TODAY:</p>
          <div class="mb-3" align="left">
            <label for="exampleFormControlInput1" class="form-label">UserID</label>
             <v-text-field type="text" id="exampleFormControlInput1" v-model=$store.state.userid />  
        </div>
         <!-- <div class="mb-3" align="left">
            <label for="exampleFormControlInput1" class="form-label">username</label>
            <v-text-field type="text" id="exampleFormControlInput1" v-model="username"/>  
        </div>  -->
         <div class="mb-3" align="left">
            <label for="exampleFormControlInput1"     class="form-label">Titel</label>
             <v-text-field type="text" id="exampleFormControlInput1" v-model="title"/>  
        </div>
         <div class="mb-3" align="left">
            <label for="exampleFormControlInput1" class="form-label">CONTENT</label>
            <v-textarea type="text" id="exampleFormControlInput1" v-model="content"/>
        </div>

          <v-col cols="12" sm="6" md="4">
            <v-menu
              ref="menu"
              v-model="menu"
              :close-on-content-click="false"
              :return-value.sync="due_date"
              transition="scale-transition"
              offset-y
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="due_date"
                  label="Due date"
                  prepend-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="due_date"
                no-title
                scrollable
              >
                <v-spacer></v-spacer>
                <v-btn
                  text
                  color="primary"
                  @click="menu = false"
                >
                  Cancel
                </v-btn>
                <v-btn
                  text
                  color="primary"
                  @click="$refs.menu.save(due_date)"
                >
                  OK
                </v-btn>
              </v-date-picker>
            </v-menu>
          </v-col>
    </div>
    </v-container>
</template>

<script>

export default {
 data(){
     return{
           username :'',
           userid :this.$store.state.userid, //this붙이는거잊지말기
           title :'',
           content :'',
           due_date:'',
          modifyDetail :{}
     }
 },

 mounted(){
   this.getmodify();
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
        this.$http.post('/boardInsert',{ userid : this.userid ,title :this.title, content : this.content,due_date : this.due_date}, { //파라미터릂 여기에 줘야함 ->스프링 컨트롤러에 있는 vo랑똑같은이름써저야한다!!!
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
        },
    getmodify:function(){ 
     
         this.$http.post('http://localhost:8080/boardDetail',{empno:this.$route.query.empno} ,{
            method : 'POST',
            body : JSON.stringify({ id : 2}),
           headers : {
         'Content-Type' : 'application/json',
         'Accept' : '*/*'
           }   
        }).then(response => {
           return response
       }).then(response => {
       this.modifyDetail = response.data.list;
        console.log("rs22" + JSON.stringify(this.userDetail));
        // console.log("rs" + JSON.stringify(response.data.list));
      })
    }
 },
 
}
</script>

<style>

</style>