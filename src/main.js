import Vue from 'vue'
import Layout from './Layout.vue'
import router from './router'
import store from './store'
import getUnitData from '@/plugins/getUnitData';

Vue.use(getUnitData)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(Layout)
}).$mount('#app')
