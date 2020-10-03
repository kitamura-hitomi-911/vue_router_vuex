export default {
  path: '/event',
  name: 'Event',
  component: () => import('@/views/Event.vue'),
  meta:{
    isRequestAuth:true,
    title:'イベント一覧'
  },
  children:[
    {
      path: 'create/input',/* ルートから書くとルートからのパス扱いになるので、頭の / は書かない！ */
      name: 'EventInput',
      component: () => import('@/views/EventCreate.vue'),
      meta:{
        isRequestAuth:true,
        title:'イベント新規登録'
      }
    },
    {
      path: ':url_name/edit',
      name: 'EventEditInput',
      component: () => import('@/views/EventDetail.vue'),
      props:true, // 変数をコンポーネントにpropsで渡す
      meta:{
        isRequestAuth:true,
        title:'イベント詳細(__EVENT_NAME__)'
      }
    },
    {
      path: ':url_name/edit_confirm',
      name: 'EventEditConfirm',
      component: () => import('@/views/EventDetail.vue'),
      props:true, // 変数をコンポーネントにpropsで渡す
      meta:{
        isRequestAuth:true,
        title:'イベント更新-確認(__EVENT_NAME__)'
      }
    },
    {
      path: ':url_name/edit_complete',
      name: 'EventEditComplete',
      component: () => import('@/views/EventDetail.vue'),
      props:true, // 変数をコンポーネントにpropsで渡す
      meta:{
        isRequestAuth:true,
        title:'イベント更新-完了(__EVENT_NAME__)'
      }
    },
    {
      path: ':url_name',
      redirect: { name: 'EventEditInput' }
    }
  ]
}