<template>
<div>
  <h1 class="subheading grey--text">Board</h1>
 <v-container class="my-6">
    <v-layout row wrap>
      <v-flex xs12 md6>
        <v-card class="pa-5">
      
          <div class="mt-4" align="left">
            <v-text-field dense label="B_ROW"v-model="userDetail.B_ROW"/>
        </div>
        <div class="mt-4" align="left">
          <v-text-field dense label="USERID"v-model="userDetail.B_ID"/>
        </div>
        
        <div class="mt-4" align="left">
           <v-text-field dense label="TITLE"  v-model="userDetail.B_TITLE"/>
        </div>
        <div class="mt-4" align="left">
          <v-text-field dense label="CONTENT"  v-model="userDetail.B_CONTENT"/>
            
        </div>
        <div class="mt-4" align="left">
           <v-text-field dense label="INSERT_DATE"  v-model="userDetail.INSERT_DATE"/>  
        </div>
        <div class="mt-4" align="left">
          <v-select  dense :items="status"  v-model ="userDetail.STATUS" label="status" ></v-select>
        </div>
        <div class="mt-4" align="left">
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
              v-model="userDetail.DUE_DATE"
              label="due-date"
              prepend-icon="mdi-calendar"
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="userDetail.DUE_DATE"
            @input="menu2 = false"
          ></v-date-picker>
        </v-menu>
    
      </div>
      <v-btn  depressed color="primary" @click='modify()'>수정</v-btn>
      <v-btn depressed color="error" @click='del()'>삭제</v-btn>
      <v-btn depressed @click='goback()' >back</v-btn>
        </v-card>
      </v-flex>
    </v-layout>
    
  </v-container>
</div>
</template>
  
<script>
  import axios from "axios";
export default {
    
     data() {
         const data = this.$route.params.contentId;
         console.log("data" +data);  
    return {
        // data :data,
        // name : data.NAME,
          userid :'',
          username : '',
          seq : '',
          b_no :'',
          b_title : '',
          //due_date :'',
          content: null,
          empno : this.EMPNO,
          currentTutorial: null,
          userDetail:{},
          loginlevel:'',
           due_date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
          menu: false,
          modal: false,
          menu2: false,
          status :['ongoing', 'processing','done']
      }
    },
	
  mounted(){
           console.log("ID::" + JSON.stringify( this.$route.params.contentId));
          const B_NO = this.$route.params.contentId;
      axios.get('http://localhost:8080/boardDetail2',{
          params:{
            b_no:B_NO
          }
         })
      .then(response =>{
      this.userDetail = response.data.list 
      console.log("this.userdetail" + JSON.stringify(this.userDetail));
      })
      .catch(error =>{
      console.log(error);
      }) 
    },
    methods:{
       modify:function(){
            this.$http.put('http://localhost:8080/boardUpdate',{b_no:this.userDetail.B_NO, b_title :this.userDetail.B_TITLE, b_content :this.userDetail.B_CONTENT, due_date : this.userDetail.DUE_DATE, status : this.userDetail.STATUS},{ //해당 userdetial.empno를 가져온다!!
            method : 'PUT',
            body : JSON.stringify({ title :this.userDetail.TITLE}),
           headers : {
         'Content-Type' : 'application/json',
         'Accept' : '*/*'
           }   
        }).then(response => {
           return response
       }).then(response => {
           console.log("rs22" + JSON.stringify(response));
        alert("수정하시겠습니까?");
          if(this.$store.state.loginlevel=="1"){
            this.$router.push({
            name : 'adminList'
         
        })
        }else{
           this.$router.push({
            name : 'List'
        })
        }
         console.log("rs22" + JSON.stringify(response));
      })
       }
     ,
     
     del:function(){
      alert("!!!");
        const b_no = this.userDetail.B_NO;
        alert("bb_no" + b_no);
         axios.delete('http://localhost:8080/boardDelete/'+`${b_no}`,{ 
            method : 'DELETE',
            body : JSON.stringify({ }),
           headers : {
         'Content-Type' : 'application/json',
         'Accept' : '*/*'
           }   
        }).then(response => {
           return response
       }).then(response => {
           console.log("rs22" + JSON.stringify(response));
        alert("수정하시겠습니까?");
          if(this.$store.state.loginlevel=="1"){
            this.$router.push({
            name : 'adminList'
         
        })
        }else{
           this.$router.push({
            name : 'List'
        })
        }
         console.log("rs22" + JSON.stringify(response));
      })
       },
      
      
       goback(){
        if(this.$store.state.loginlevel =="1"){
            this.$router.push({
            name : 'adminList'
         
        })
        }else{
           this.$router.push({
            name : 'List'
        })
        }
     },
      
    }
}
</script>

<style scoped>
	.tbAdd{border-top:1px solid #888;}
	.tbAdd th, .tbAdd td{border-bottom:1px solid #eee; padding:5px 0; }
	.tbAdd td{padding:10px 10px; box-sizing:border-box; text-align:left;}
	.tbAdd td.txt_cont{height:300px; vertical-align:top;}
	.btnWrap{text-align:center; margin:20px 0 0 0;}
	.btnWrap a{margin:0 10px;}
	.btnAdd {background:#43b984}
	.btnDelete{background:#f00;}
</style>