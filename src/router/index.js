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
    },
    {
      path: '/vux',
      component: resolve => require(['../components/page/Vux.vue'], resolve),
      meta: { title: 'Vux' }
    },
    {
      path: '/index',
      component: resolve => require(['../components/page/Index.vue'], resolve),
      meta: { title: 'Index' }
    },
    {
      path: '/businessCharter',
      meta: { title: '公务包机' },
      component: resolve => require(['../App.vue'], resolve),
      children: [
        {
          path: 'businessCharter_1',
          component: resolve => require(['../components/page/BusinessCharter_1.vue'], resolve),
          meta: { title: '飞行计划' }
        },
        {
          path: 'businessCharter_2',
          component: resolve => require(['../components/page/BusinessCharter_2.vue'], resolve),
          meta: { title: '选择机型' }
        },
        {
          path: 'businessCharter_3',
          component: resolve => require(['../components/page/BusinessCharter_3.vue'], resolve),
          meta: { title: '机型详情' }
        },
        {
          path: 'businessCharter_4',
          component: resolve => require(['../components/page/BusinessCharter_4.vue'], resolve),
          meta: { title: '预报价单' }
        },
        {
          path: 'businessCharter_5',
          component: resolve => require(['../components/page/BusinessCharter_5.vue'], resolve),
          meta: { title: '提交订单' }
        }
      ]
    }
  ]
})
