import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/frontend',
    name: 'Frontend',
    component: () => import(/* webpackChunkName: "frontend" */ '../views/Frontend.vue')
  },
  {
    path: '/backend',
    name: 'Backend',
    component: () => import(/* webpackChunkName: "backend" */ '../views/Backend.vue')
  },
  {
    path: '/mobile',
    name: 'Mobile',
    component: () => import(/* webpackChunkName: "mobile" */ '../views/Mobile.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import(/* webpackChunkName: "register" */ '../views/Register.vue')
  },
  {
    path: '/login',
    name: 'Login Admin',
    component: () => import(/* webpackChunkName: "admin" */ '../views/Admin/Login.vue')
  },
  {
    path: '/admin',
    name: 'Admin',
    meta: {login : true},
    component: () => import(/* webpackChunkName: "admin" */ '../views/Admin/Admin.vue'),
    beforeEnter: (to, from, next) => {
     if(store.state.admin.authenticated == false) {
       next('/login')
     } else {
       next()
     }
    }
  },
]

const router = new VueRouter({
  routes,
  store : store
})

export default router
