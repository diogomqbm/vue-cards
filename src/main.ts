import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import client from './api/client'

Vue.config.productionTip = false
Vue.prototype.$http = client;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
