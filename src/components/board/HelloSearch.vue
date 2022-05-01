<template>
  <div>
      <h2>search componet</h2>
      <input type="text">
          <table>
           <thead>
               <tr>
                   <th>ID</th>
                   <th>username</th>
                   <th>TITLE</th>
                   <th>CONTENT</th>
                  
               </tr>
           </thead>
           <tbody>
              <tr :key="i" v-for="(board, i) in boards"  @click="fnView(board.TITLE)">
                <td>{{board.USERID}}</td>
                <td>{{board.USERNAME}}</td>
                   <td>{{board.TITLE}}</td>
                   <td>{{board.CONTENT}}</td>
               </tr>
           </tbody>
       </table>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>