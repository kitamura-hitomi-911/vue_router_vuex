import Vue from 'vue'
import VueRouter from 'vue-router'
import Top from '../views/Top.vue'
import Login from '../views/Login.vue'
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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Event.vue'),
    meta:{
      is_request_auth:true
    }
  }
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
