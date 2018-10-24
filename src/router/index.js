import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login/login'
import Index from '@/components/Index'
import FatherToSon from '@/components/vueFeatrue/FatherToSon'
import SonToFather from '@/components/vueFeatrue/SonToFather'
import WebSocketTest from '@/components/websocket/WebSocketTest'
import AddGoods from '@/components/vuexContainer/AddGoods'
import ShowGoods from '@/components/vuexContainer/ShowGoods'
import UploadImg from '@/components/uploadimg/UploadImg'
import UploadImg2 from '@/components/uploadimg/UploadImg2'
import GetData from '@/components/getdata/GetData'
import elementComp from '@/components/elementComp/elementComp'
import Table from '@/components/elementComp/table'
import UploadQiniu from '@/components/uploadQiniu/uploadQiniu'
import BrotherToBrother from '@/components/vueFeatrue/brotherToBrother/BrotherToBrother'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/',
      redirect: '/table',
      name: 'index',
      component: Index,
      children: [
        // 组件间传值
        {
          path: '/fatherToSon',
          component: FatherToSon
        },
        {
          path: '/sonToFather',
          component: SonToFather
        },
        {
          path: '/brother',
          component: BrotherToBrother
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
        },
        {
          path: '/uploadimg2',
          component: UploadImg2
        },
        {
          path: '/getdata',
          component: GetData
        },
        {
          path: '/elementComp',
          component: elementComp
        },
        {
          path: '/table',
          name: 'Table',
          component: Table
        },
        {
          path: 'upload',
          name: 'UploadQiniu',
          component: UploadQiniu
        }
      ]
    }
  ]
})
