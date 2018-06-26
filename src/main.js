// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from '@/store/store'
import 'cropperjs/dist/cropper.css'
import './iconfont/iconfont.css' // 引入iconfont
import axios from 'axios'
Vue.prototype.axios = axios
Vue.use(ElementUI)
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
router.beforeEach((to, from, next) => {
  if (to.path === '/login') { // 如果要跳转登录页不处理
    next()
  } else { // 否则就要判断登陆状态
    if (sessionStorage.getItem('sysUser')) { // 已登录不做处理
      next()
    } else { // 未登录跳转到登录页
      alert('登录异常，请重新登录')
      next({path: '/login'})
    }
  }
})
