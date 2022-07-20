<template>
<v-container>
  <v-app>
       <v-card  class="mt-10 ml-5 mr-5">
      <v-card-title>
        <h1>Register</h1>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field label="userid"  ref="userid" v-model="userid" prepend-icon="mdi-account-circle"></v-text-field>
          <v-text-field label="userpass"  ref="userpass" v-model="userpass"  prepend-icon="mdi-lock"></v-text-field>
          <v-text-field label="username" v-model="username" prepend-icon="mdi-account-circle"></v-text-field>
          <v-select :items="dep_id" label="부서ID"></v-select>
          <v-select :items="dep_nm" label="부서명"></v-select>
        </v-form>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
      
      </v-card-actions>
    </v-card>
  </v-app>
 </v-container>
</template>
<script>
export default {

}
</script>

<style>

</style>