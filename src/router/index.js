import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Top from '../views/Top.vue'
import Event from '../views/Event.vue'
import EventDetail from '../views/EventDetail.vue'
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
    component: Login
  },
  {
    path: '/event',
    name: 'Event',
    // component: () => import(/* webpackChunkName: "about" */ '../views/Event.vue'),
    component: Event,
    meta:{
      isRequestAuth:true
    }
  },
  {
    path: '/event/:url_name',
    name: 'EventDetail',
    component: EventDetail,
    props:true, // 変数をコンポーネントにpropsで渡す
    meta:{
      isRequestAuth:true
    }
  },
  {
    path: '/tour',
    name: 'Tour',
    component: Tour,
    meta:{
      isRequestAuth:true
    }
  },
]

const router = new VueRouter({
  routes
});

router.beforeEach((to,from,next) => {
    if(to.matched.some(route => route.meta.isRequestAuth) && !isAuthed()){
      next({
        path: '/login',
        query:{
          path:to.fullPath
        }
      })
    }else{
      next();
    }
  });

export default router
