<template>
  <v-card>
      <v-container pa-1>  
          <v-layout row>
              <v-flex xs7>
                  <v-card-title primary-title>
                      <div>
                          <div @click="change()">{{title}}</div>
                          <div>{{number}}</div>
                      </div>
                  </v-card-title>
              </v-flex>
              <v-flex xs5>
                  <v-card-title>
                      <v-avatar>
                            <v-icon medium :color="tIconColor">{{tIcon}}</v-icon>
                      </v-avatar>
                  </v-card-title>
              </v-flex>
          </v-layout>
          <v-divider></v-divider>
          <v-card-actions class="pa-2">
              <v-icon></v-icon>
               <span>{{bText}}</span>
               <v-spacer></v-spacer>
          </v-card-actions>
      </v-container>
  </v-card>
</template>

<script>
export default {
     props: ['title', 'number', 'bText', 'tIcon' , 'tIconColor'],
    methods:{
        change(){
            this.$emit('change');
        }
    }
}
</script>

<style>

</style>