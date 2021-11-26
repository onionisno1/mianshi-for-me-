import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ImageShow from '@/components/ImageShow'
import InputShow from '@/components/InputShow'
import Asynchronous from '@/components/Asynchronous'
import VuexTest from '@/components/VuexTest'
import BuJu from '@/components/BuJu'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ImageShow',
      component: ImageShow,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/InputShow',
      name: 'InputShow',
      component: InputShow,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/Asynchronous',
      name: 'Asynchronous',
      component: Asynchronous,
      meta: {
        keepAlive: false
      }
    },
    {
      path: '/VuexTest',
      name: 'VuexTest',
      component: VuexTest,
      meta: {
        keepAlive: false
      }
    },
    {
      path: '/BuJu',
      name: 'BuJu',
      component: BuJu,
      meta: {
        keepAlive: false
      }
    },
    {
      path: '/LazyLoad',
      name: 'LazyLoad',
      component: resolve => require(['@/components/LazyLoad'], resolve),
      meta: {
        keepAlive: false
      }
    },
    {
      path: '/ArrayWathch',
      name: 'ArrayWathch',
      component: resolve => require(['@/components/ArrayWathch'], resolve),
      meta: {
        keepAlive: false
      }
    }
  ]
})
