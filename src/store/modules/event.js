import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export default {
  namespaced: true,
  state: {
    list:[
      {
        id:1,
        name:'イベント名',
        start_date:'2020/11/11 11:00',
        end_date:'2020/11/11 17:00',
      }
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
};
