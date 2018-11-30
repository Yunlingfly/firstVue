import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      meta: { title: "index" }
    },
    {
      path: '/home',
      component: resolve => require(['../components/page/Home.vue'], resolve),
      meta: { title: '主页' }
    },
    {
      path: '/table',
      component: resolve => require(['../components/page/Table.vue'], resolve),
      meta: { title: '表格' }
    }
  ]
})
