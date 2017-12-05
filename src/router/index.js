import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import FatherToSon from '@/components/fatherToSon/FatherToSon'
import SonToFather from '@/components/sonToFather/SonToFather'
import WebSocketTest from '@/components/websocket/WebSocketTest'
import AddGoods from '@/components/vuexContainer/AddGoods'
import ShowGoods from '@/components/vuexContainer/ShowGoods'
import UploadImg from '@/components/uploadimg/UploadImg'

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
        },
        {
          path: '/websocket',
          component: WebSocketTest
        },
        {
          path: '/addgoods',
          component: AddGoods
        },
        {
          path: '/showGoods',
          component: ShowGoods
        },
        {
          path: '/uploadimg',
          component: UploadImg
        }
      ]
    }
  ]
})
