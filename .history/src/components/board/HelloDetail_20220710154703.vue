<template>
 <v-container>

    <div style ="margin:30px">
         <div class="mb-3" align="left">
            <label for="exampleFormControlInput1" class="form-label">B_NO</label>
            <v-text-field type="text" id="exampleFormControlInput1" v-model="userDetail.B_NO"/>
        </div>
        

         <div class="mb-3" align="left">
            <label for="exampleFormControlInput1" class="form-label">USERID</label>
            <v-text-field type="text" id="exampleFormControlInput1" v-model="$store.state.mem_id"/>
        </div>
        
        <div class="mb-3" align="left">
            <label for="exampleFormControlInput1" class="form-label">TITLE</label>
             <v-text-field type="text" id="exampleFormControlInput1" v-model="userDetail.B_TITLE"/>
        </div>

         <div class="mb-3" align="left">
            <label for="exampleFormControlInput1" class="form-label">CONTENT</label>
            <v-textarea type="text" id="exampleFormControlInput1" v-model="userDetail.B_CONTENT"/>
        </div>
       <div class="mb-2" align="left">
            <label for="exampleFormControlInput1" class="form-label">INSERT_DATE</label>
            <v-text-field type="text" id="exampleFormControlInput1" v-model="userDetail.INSERT_DATE"/>
        </div>
        <div class="mb-2" align="left">
          <v-select :items="status"  v-model ="userDetail.STATUS" label="status" ></v-select>
        </div>
     <!--  <div class="mb-2" align="left">
            <label for="exampleFormControlInput1" class="form-label">DUE_DATE</label>
            
            <v-col cols="12" sm="6" md="4">
            <v-menu
              ref="menu"
              v-model="menu"
              :close-on-content-click="false"
              :return-value.sync="date"
              transition="scale-transition"
              offset-y
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="userDetail.DUE_DATE"
                  label="Picker in menu"
                  prepend-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="date"
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
                  @click="$refs.menu.save(date)"
                >
                  OK
                </v-btn>
              </v-date-picker>
            </v-menu>
          </v-col>

                  
          
        </div>
--> 
 <div class="mb-2" align="left">
            <label for="exampleFormControlInput1" class="form-label">DUE_DATE</label>
            
          <v-col cols="12" sm="6" md="4">
            <v-menu
              ref="menu"
              v-model="menu"
              :close-on-content-click="false"
              :return-value.sync="userDetail.DUE_DATE"
              transition="scale-transition"
              offset-y
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="userDetail.DUE_DATE"
                  label="Picker in menu"
                  prepend-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="userDetail.DUE_DATE"
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
                  @click="$refs.menu.save(userDetail.DUE_DATE)"
                >
                  OK
                </v-btn>
              </v-date-picker>
            </v-menu>
          </v-col>

                  
          
        </div>
         <v-btn depressed color="primary" @click='modify()'>수정</v-btn>
         <v-btn depressed color="error" @click='del()'>삭제</v-btn>
         <v-btn depressed @click='goback()' >back</v-btn>
    </div>

  </v-container>
</template>

<script>
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
          status :[ 'ongoing', 'done', '진행중']
      
      }
    },
	
  mounted(){
           console.log("ID::" + JSON.stringify( this.$route.params.contentId));
          const B_NO = this.$route.params.contentId;
             
        //this.$http.post(`${baseURL}`,{
         this.$http.post('http://localhost:8080/boardDetail' ,{b_no:B_NO},{
            method : 'POST',
            body : JSON.stringify({ id : 2}),
           headers : {
         'Content-Type' : 'application/json',
         'Accept' : '*/*'
           }   
        }).then(response => {
           return response
       }).then(response => {
       this.userDetail = response.data.list;
       console.log("title" + JSON.stringify(response.data.list));
        // console.log("rs" + JSON.stringify(response.data.list));
      })
    },
    methods:{
     
       modify:function(){
          
            this.$http.post('http://localhost:8080/boardUpdate',{b_no:this.userDetail.B_NO, b_title :this.userDetail.B_TITLE, b_content :this.userDetail.B_CONTENT, due_date : this.userDetail.DUE_DATE, status : this.userDetail.STATUS},{ //해당 userdetial.empno를 가져온다!!
            method : 'POST',
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
          
            this.$http.post('http://localhost:8080/boardDelete',{ b_no :this.userDetail.B_NO},{ //해당 userdetial.empno를 가져온다!!
            method : 'POST',
            body : JSON.stringify({ title :this.userDetail.TITLE}),
           headers : {
         'Content-Type' : 'application/json',
         'Accept' : '*/*'
           }   
        }).then(response => {
           return response
       }).then(response => {
        alert("삭제하시겠습니까?");
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
        // console.log("rs" + JSON.stringify(response.data.list));
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