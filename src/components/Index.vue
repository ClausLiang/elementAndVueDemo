<template>
  <div class="index-wrapper">
    <div :class="menuCollapse ? 'menu-wrapper collapseClass' : 'menu-wrapper'">
      <div class="logo">
        <img src="../../static/img/logo.png" alt="">
        <span class="app-name">后台管理系统</span>
      </div>
      <el-menu :default-active="currentMenu" class="el-menu-vertical-demo" router :collapse="menuCollapse" unique-opened>
        <!--菜单：element-->
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-news"></i>
            <span>element</span>
          </template>
          <el-menu-item index="/table">表格</el-menu-item>
          <el-menu-item index="/elementComp">穿梭框</el-menu-item>
        </el-submenu>
        <!--菜单：Vue特性-->
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span>vue特性</span>
          </template>
          <el-submenu index="2-1">
            <span slot="title">组件之间传值</span>
            <el-menu-item index="/fatherToSon">父对子组件传值</el-menu-item>
            <el-menu-item index="/sonToFather">子对父组件传值</el-menu-item>
            <el-menu-item index="/brother">兄弟组件传值</el-menu-item>
          </el-submenu>

          <el-submenu index="2-2">
            <span slot="title">vuex</span>
            <el-menu-item index="/addgoods">vuex存数据到store</el-menu-item>
            <el-menu-item index="/showgoods">vuex从store取数据</el-menu-item>
          </el-submenu>
        </el-submenu>

        <!--菜单：各组件及功能-->
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-printer"></i>
            <span>通用组件及功能</span>
          </template>
          <el-menu-item index="/echart">echart</el-menu-item>
          <el-menu-item index="/websocket">websocket</el-menu-item>
          <el-menu-item index="/getdata">获取数据及去空格</el-menu-item>
          <el-menu-item index="/upload">上传文件到七牛</el-menu-item>
        </el-submenu>

        <!--菜单：图片-->
        <el-submenu index="4">
          <template slot="title">
            <i class="el-icon-picture"></i>
            <span>裁剪图片</span>
          </template>
          <el-menu-item index="/uploadimg">裁剪图片</el-menu-item>
          <el-menu-item index="/uploadimg2">裁剪图片2</el-menu-item>
        </el-submenu>

      </el-menu>
    </div>
    <div :class="menuCollapse ? 'main-content collapseClass' : 'main-content'">
      <div class="header">
        <span class="switch" @click="menuSwitchHandle">
          <i :class="menuCollapse ? 'iconfont icon-zhedie-copy small-icon' : 'iconfont icon-zhedie'"></i>
        </span>
        <el-dropdown class="header-btn" @command="handleCommand">
          <span>
            {{userName}}<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="logout">退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div class="main-wrapper">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        currentMenu: this.$route.path,
        menuCollapse: false,
        userName: ''
      }
    },
    created () {
      if (sessionStorage.getItem('sysUser')) { // 每次刷新页面判断判断状态已登录不做处理
        this.userName = JSON.parse(sessionStorage.getItem('sysUser')).name
      } else { // 未登录重新登录
        this.$router.push({path: '/login'})
      }
    },
    methods: {
      menuSwitchHandle () {
        this.menuCollapse = !this.menuCollapse
      },
      handleCommand (command) {
        if (command === 'logout') {
          sessionStorage.clear()
          this.$router.push({path: '/login'})
        }
      }
    }
  }
</script>
<style lang="stylus">
  .customAni{
    transition: all 300ms ease-in-out;
  }
  .index-wrapper{
    position: relative;
    height: 100%;
    /*定位布局解决菜单折叠时出现的横向滚动条*/
    /* 左侧菜单 */
    .menu-wrapper{
      position: absolute;
      top: 0;
      left: 0;
      width: 200px;
      bottom: 0;
      background: #001529;
      @extend .customAni;
      &.collapseClass{
        width: 64px;
        .el-menu{
          span{
            opacity: 0;
          }
        }
      }
      .logo{
        background: #20a1ff;
        height: 60px;
        line-height: 60px;
        color: #fff;
        padding-left: 14px;
        font-weight: bold;
        img{
          width: 40px;
          height: 40px;
          vertical-align: middle;
        }
        .app-name{
          padding-left: 5px;
          font-size: 18px;
          vertical-align: middle;
        }
      }
      .el-menu{
        border-right: none;
        background: #001529;
        .el-menu-item{
          color: hsla(0,0%,100%,.65);
          &:hover{
            color: #fff;
            background: #000c17;
          }
          &.is-active{
            background: #33335e;
            border-right: 3px solid #20a1ff;
          }
        }
        /* 子菜单样式 */
        .el-submenu{
          .el-submenu__title{
            color: hsla(0,0%,100%,.65);
            &:hover{
              color: #fff;
              background: #000c17;
            }
          }
          .el-menu{
            background: rgba(0, 12, 23, 0.7);
          }
        }
      }
    }
    /* 右侧内容 */
    .main-content{
      position: absolute;
      top: 0;
      left: 200px;
      right: 0;
      bottom: 0;
      background: #f6f8f9;
      @extend .customAni;
      &.collapseClass{
        left: 64px;
      }
      .header{
        height: 60px;
        padding-right: 20px;
        position: relative;
        background: #fff;
        .switch{
          position: absolute;
          left: 0;
          top: 0;
          height: 60px;
          width: 50px;
          text-align: center;
          &:hover{
            cursor: pointer;
            background: rgba(0,0,0,0.025);
          }
          i{
            line-height: 60px;
          }
          .small-icon{
            font-size: 13px;
          }
        }
        .header-btn{
          position: absolute;
          top: 50%;
          right: 20px;
          transform: translate(0, -50%);
          cursor: pointer;
        }
      }
      .main-wrapper{
        padding: 20px;
        position: absolute;
        top: 60px;
        bottom: 0;
        left: 0;
        right: 0;
        overflow-y: auto;
      }
    }
  }
</style>
