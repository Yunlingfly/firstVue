// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import ElementUI from 'element-ui'
import { AlertPlugin, ToastPlugin } from 'vux'
import VueLazyload from 'vue-lazyload'

Vue.use(AlertPlugin)
Vue.use(ToastPlugin)

Vue.config.productionTip = false
Vue.use(ElementUI, { size: 'small' })
Vue.prototype.$axios = axios
Vue.use(VueLazyload,{
  // preload:1.3,//预加载的宽高
  // loading:"img的加载中的显示的图片的路径",
  // error:"img加载失败时现实的图片的路径",
  attempt:3,//尝试加载的次数
  // listenEvents:['scroll','wheel','mousewheel','resize','animationend','transitionend','touchmove'], //你想让vue监听的事件
})

// 使用钩子函数对路由进行权限跳转
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
