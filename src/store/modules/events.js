const list = [
  {
    id:1,
    url_name:'tokyo',
    name:'東京イベント名',
    start_date:'2020/11/11 11:00',
    end_date:'2020/11/11 17:00',
    checkboxtest:[1],
    desc:'説明ですー'
  },
  {
    id:2,
    url_name:'osaka',
    name:'大阪イベント名',
    start_date:'2020/11/11 11:00',
    end_date:'2020/11/11 17:00',
    checkboxtest:[1,2],
    desc:'説明ですー'
  }
];

export default {
  namespaced: true,
  state: {
    list:[]
  },
  getters:{
    getEvents:(state) => (params) =>{
      console.log('getEvents',params);
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
    // type が setAllEvents ミューテーションがトリガーされたときに、このハンドラが呼ばれる
    // ミューテーションハンドラを起動するためにはミューテーションのタイプを指定して store.commit を呼び出す必要があります
    // ハンドラは vuex の状態(state)を第一引数として取得する
    // 追加の引数は payload とよび、通常はオブジェクトにすべき
    // ミューテーションハンドラ関数は同期的でなければならない
    setAllEvents(state, payload){
      state.list = payload.list;
    },
    updateEvents(state, payload){
      state.list.forEach(event => {
        payload.list.forEach(update_event => {
          if(event.id === update_event.id){
            console.log(event,update_event);
            // event = update_event;
          }
        });
      });
    }
  },
  actions: {
    // アクションは store.dispatch がトリガーとなって実行される
    // アクションはコンテキストオブジェクトを受け取る
    // context.commit で mutations にアクセスできるので、commitだけに用がある場合は
    // {commit} という 引数分割束縛 という書き方をすることが多い
    // アクションは store.dispatch がトリガーとなって実行される
    // パラメータがある場合は getAllEvents({ commit },params) で受け取れる。
    getAllEvents({ commit }){
      // イベント取得APIをたたくダミー

      // store.dispatch が、返された promise を処理できる
      return new Promise((resolve, reject) => {
        setTimeout(()=>{
          // comit は 1つめにmutationsのメソッド名、2つめにmutations のメソッドに渡す値。オブジェクト推奨
          commit('setAllEvents',{list});
          resolve();
          reject();
        },2000)
      });
    },
  }
};
