export default {
  namespaced: true,
  state: {
    list:[
      {
        id:1,
        url_name:'tokyo',
        name:'東京イベント名',
        start_date:'2020/11/11 11:00',
        end_date:'2020/11/11 17:00',
      },
      {
        id:2,
        url_name:'osaka',
        name:'大阪イベント名',
        start_date:'2020/11/11 11:00',
        end_date:'2020/11/11 17:00',
      }
    ]
  },
  getters:{
    getEvents:(state) => (params) =>{
      return params ? state.list.filter(event => {
        let flg = true;
        for(let key in params){
          if(event[key] !== params[key]){
            flg = false;
          }
        }
        return flg;
      }) : state.list;
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
};
