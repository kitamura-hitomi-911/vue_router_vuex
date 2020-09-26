import Vue from 'vue'
import Vuex from 'vuex'
import event from './modules/event'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    event,
  },
  strict: debug,
})
