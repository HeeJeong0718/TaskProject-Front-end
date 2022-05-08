<template>
  <div class="home">
    <HelloHeader/>
    
  </div>
</template>

<script>
// @ is an alias to /src

import HelloHeader from '@/components/HelloHeader.vue'
export default {
  name: 'HomeView',
  components: {
   HelloHeader
  }
}
</script>
