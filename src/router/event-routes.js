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
      props: {
        step:'create_input'
      },
      meta:{
        isRequestAuth:true,
        title:'イベント新規登録'
      }
    },
    {
      path: ':url_name/edit',
      name: 'EventEditInput',
      component: () => import('@/views/EventDetail.vue'),
      props: (route) => ({
        url_name: route.params.url_name,
        step:'edit_input'
      }),
      meta:{
        isRequestAuth:true,
        title:'イベント詳細(__EVENT_NAME__)'
      }
    },
    {
      path: ':url_name/edit_confirm',
      name: 'EventEditConfirm',
      component: () => import('@/views/EventDetail.vue'),
      props: (route) => ({
        url_name: route.params.url_name,
        step:'edit_confirm'
      }),
      meta:{
        isRequestAuth:true,
        title:'イベント更新-確認(__EVENT_NAME__)'
      }
    },
    {
      path: ':url_name/edit_complete',
      name: 'EventEditComplete',
      component: () => import('@/views/EventDetail.vue'),
      props: (route) => ({
        url_name: route.params.url_name,
        step:'edit_complete'
      }),
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