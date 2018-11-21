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
        {
          path: '/fatherToSon',
          name: 'FatherToSon',
          component: FatherToSon,
          meta: {title: '父对子组件传值'}
        },
        {
          path: '/sonToFather',
          name: 'SonToFather',
          component: SonToFather,
          meta: {title: '子对父组件传值'}
        },
        {
          path: '/brother',
          name: 'BrotherToBrother',
          component: BrotherToBrother,
          meta: {title: '兄弟组件传值'}
        },
        {
          path: '/websocket',
          name: 'WebSocketTest',
          component: WebSocketTest,
          meta: {title: 'websocket'}
        },
        {
          path: '/addgoods',
          name: 'AddGoods',
          component: AddGoods,
          meta: {title: 'vuex存数据到store'}
        },
        {
          path: '/showGoods',
          name: 'ShowGoods',
          component: ShowGoods,
          meta: {title: 'vuex从store取数据'}
        },
        {
          path: '/uploadimg',
          name: 'UploadImg',
          component: UploadImg,
          meta: {title: '裁剪图片'}
        },
        {
          path: '/uploadimg2',
          name: 'UploadImg2',
          component: UploadImg2,
          meta: {title: '裁剪图片2'}
        },
        {
          path: '/getdata',
          name: 'GetData',
          component: GetData,
          meta: {title: '获取数据及去空格'}
        },
        {
          path: '/elementComp',
          name: 'elementComp',
          component: elementComp,
          meta: {title: '穿梭框'}
        },
        {
          path: '/table',
          name: 'Table',
          component: Table,
          meta: {title: '表格'}
        },
        {
          path: '/upload',
          name: 'UploadQiniu',
          component: UploadQiniu,
          meta: {title: '上传文件到七牛'}
        },
        {
          path: '/echart',
          name: 'Echart',
          component: Echart,
          meta: {title: 'echart'}
        }
      ]
    }
  ]
})
