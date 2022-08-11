import Vue from 'vue'
import App from './App.vue'
//import App2 from './App2.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import axios from 'axios'
import vuetify from './plugins/vuetify'
import VueSession from 'vue-session'
import VDatetimePicker from 'v-datetime-field'

var sessionOptions = {
  persist:true
}
Vue.config.productionTip = false
Vue.prototype.$http = axios
new Vue({
  router,
  store,
  vuetify,
  VueSession,
  sessionOptions,
  VDatetimePicker,
  render: h => h(App)
}).$mount('#app')
