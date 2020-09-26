import Vue from 'vue'
import Layout from './Layout.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(Layout)
}).$mount('#app')
