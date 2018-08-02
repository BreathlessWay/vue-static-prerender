import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'
import Index from '@/pages/index'
import Join from '@/pages/join'
import About from '@/pages/about'
import Intro from '@/pages/intro'
import IntroIndex from '@/pages/intro/index/index'
import Today from '@/pages/intro/today'

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
    },
    {
      path: '/intro',
      component: Intro,
      children: [
        {
          path: '',
          name: 'guess',
          component: IntroIndex
        },
        {
          path: 'today',
          name: 'today',
          component: Today
        }
      ]
    }
  ]
})
