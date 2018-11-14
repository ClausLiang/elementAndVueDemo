import Vue from 'vue'
import Router from 'vue-router'

const Login = () => import('@/components/login/login')
const Index = () => import('@/components/Index')
const FatherToSon = () => import('@/components/vueFeatrue/FatherToSon')
const SonToFather = () => import('@/components/vueFeatrue/SonToFather')
const BrotherToBrother = () => import('@/components/vueFeatrue/brotherToBrother/BrotherToBrother')
const WebSocketTest = () => import('@/components/websocket/WebSocketTest')
const AddGoods = () => import('@/components/vuexContainer/AddGoods')
const ShowGoods = () => import('@/components/vuexContainer/ShowGoods')
const UploadImg = () => import('@/components/uploadimg/UploadImg')
const UploadImg2 = () => import('@/components/uploadimg/UploadImg2')
const GetData = () => import('@/components/getdata/Getdata')
const elementComp = () => import('@/components/elementComp/elementComp')
const Table = () => import('@/components/elementComp/table')
const UploadQiniu = () => import('@/components/uploadQiniu/uploadQiniu')
const Echart = () => import('@/components/echart/echart')

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
          path: '/upload',
          name: 'UploadQiniu',
          component: UploadQiniu
        },
        {
          path: '/echart',
          name: 'Echart',
          component: Echart
        }
      ]
    }
  ]
})
