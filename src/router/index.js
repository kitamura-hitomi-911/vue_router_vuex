import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Top from '../views/Top.vue'
import EventRoutes from './event-routes.js'
import Tour from '../views/Tour.vue'
import NotFound from '../views/NotFound.vue'

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
  { ...EventRoutes },
  {
    path: '/tour',
    name: 'Tour',
    component: Tour,
    meta:{
      isRequestAuth:true,
      title:'大会一覧'
    }
  },
  {
    // 全てにマッチします
    path: '*',
    name: 'NotFound',
    component: NotFound,
    meta:{
      title:'404 Not Found'
    }
  }
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
