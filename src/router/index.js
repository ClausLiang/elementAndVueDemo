import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import FatherToSon from '@/components/fatherToSon/FatherToSon'
import SonToFather from '@/components/sonToFather/SonToFather'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      children: [
        {
          path: '/fatherToSon',
          component: FatherToSon
        },
        {
          path: '/sonToFather',
          component: SonToFather
        }
      ]
    }
  ]
})
