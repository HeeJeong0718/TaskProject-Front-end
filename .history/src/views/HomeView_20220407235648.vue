<template>
  <div class="home">
    <HelloHeader/>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import HelloHeader from '@/components/HelloHeader.vue'
export default {
  name: 'HomeView',
  components: {
    HelloWorld , HelloHeader
  }
}
</script>
