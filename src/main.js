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
axios.defaults.retry = 4
axios.defaults.retryDelay = 5000
axios.interceptors.response.use(undefined, (err) => {
  console.log('err:', err)
  console.log('errConfig:', err.config)
  console.log('errResponse:', err.response)
  if (err.response) {
    switch (err.response.status) {
      case 404:
        // alert('找不见接口')
        ElementUI.Message.error('找不见接口')
        return Promise.reject(err)
    }
  }
  var config = err.config
  // If config does not exist or the retry option is not set, reject
  if (!config || !config.retry) return Promise.reject(err)
  // Set the variable for keeping track of the retry count
  config.__retryCount = config.__retryCount || 0
  // Check if we've maxed out the total number of retries
  if (config.__retryCount >= config.retry) {
    // Reject with the error
    return Promise.reject(err)
  }
  // Increase the retry count
  config.__retryCount += 1
  // Create new promise to handle exponential backoff
  var backoff = new Promise(function (resolve) {
    setTimeout(function () {
      resolve()
    }, config.retryDelay || 1)
  })
  // Return the promise in which recalls axios to retry the request
  return backoff.then(function () {
    return axios(config)
  })
})
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
      next({path: '/login'})
    }
  }
})
