import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'
import Index from '@/pages/index'
import Join from '@/pages/join'
import About from '@/pages/about'

Vue.use(Router)
Vue.use(Meta)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/join',
      name: 'join',
      component: Join
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})
