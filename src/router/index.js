import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Top from '../views/Top.vue'
import Event from '../views/Event.vue'
import EventDetail from '../views/EventDetail.vue'
import EventCreate from '../views/EventCreate.vue'
import Tour from '../views/Tour.vue'

import isAuthed from '@/middleware/isAuthed';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Top',
    component: Top,
    meta:{
      isRequestAuth:true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta:{
      title:'ログイン'
    }
  },
  {
    path: '/event',
    name: 'Event',
    // component: () => import(/* webpackChunkName: "about" */ '../views/Event.vue'),
    component: Event,
    meta:{
      isRequestAuth:true,
      title:'イベント一覧'
    },
    children:[
      {
        path: '/create/input',
        name: 'EventInput',
        component: EventCreate,
        meta:{
          isRequestAuth:true,
          title:'イベント新規登録'
        }
      },
      {
        path: '/:url_name/edit',
        name: 'EventEditInput',
        component: EventDetail,
        props:true, // 変数をコンポーネントにpropsで渡す
        meta:{
          isRequestAuth:true,
          title:'イベント詳細(__EVENT_NAME__)'
        }
      },
      {
        path: '/:url_name/edit_confirm',
        name: 'EventEditConfirm',
        component: EventDetail,
        props:true, // 変数をコンポーネントにpropsで渡す
        meta:{
          isRequestAuth:true,
          title:'イベント更新-確認(__EVENT_NAME__)'
        }
      },
      {
        path: '/:url_name/edit_complete',
        name: 'EventEditComplete',
        component: EventDetail,
        props:true, // 変数をコンポーネントにpropsで渡す
        meta:{
          isRequestAuth:true,
          title:'イベント更新-完了(__EVENT_NAME__)'
        }
      }
    ]
  },
  {
    path: '/tour',
    name: 'Tour',
    component: Tour,
    meta:{
      isRequestAuth:true,
      title:'大会一覧'
    }
  },
]

const router = new VueRouter({
  routes
});

router.beforeEach( (to,from,next) => {
  if(to.matched.some(route => route.meta.isRequestAuth)){
    isAuthed().then(is_login => {
      if(is_login){
        next();
      }else{
        next({
          path: '/login',
          query:{
            path:to.fullPath
          }
        })
      }
    });
  }else{
    // ログインページだった場合は、パラメータ先のページに遷移する処理をいれる
    next();
  }
});

export default router
