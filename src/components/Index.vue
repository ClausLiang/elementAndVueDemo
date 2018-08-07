<template>
  <div class="index-wrapper">
    <div :class="menuCollapse ? 'menu-wrapper collapseClass' : 'menu-wrapper'">
      <div class="logo">
        <img src="../../static/img/logo.png" alt="">
        <span class="app-name">后台管理系统</span>
      </div>
      <el-menu :default-active="currentMenu" class="el-menu-vertical-demo" router :collapse="menuCollapse">
        <!--菜单一：Vue特性-->
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span>vue特性</span>
          </template>
          <el-menu-item index="/fatherToSon">父对子组件传值</el-menu-item>
          <el-menu-item index="/sonToFather">子对父组件传值</el-menu-item>
        </el-submenu>
        <!--菜单二：websocket-->
        <el-menu-item index="/websocket">
          <i class="el-icon-goods"></i>
          <span slot="title">websocket</span>
        </el-menu-item>

        <!--菜单三：vuex-->
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-edit-outline"></i>
            <span>vuex</span>
          </template>
          <el-menu-item index="/addgoods">vuex存数据到store</el-menu-item>
          <el-menu-item index="/showgoods">vuex从store取数据</el-menu-item>
        </el-submenu>

        <!--菜单四：图片-->
        <el-submenu index="4">
          <template slot="title">
            <i class="el-icon-picture"></i>
            <span>裁剪图片</span>
          </template>
          <el-menu-item index="/uploadimg">裁剪图片</el-menu-item>
          <el-menu-item index="/uploadimg2">裁剪图片2</el-menu-item>
        </el-submenu>

        <!--菜单五：-->
        <el-menu-item index="/getdata">
          <i class="el-icon-printer"></i>
          <span slot="title">获取数据及去空格</span>
        </el-menu-item>

        <!--菜单六：element-->
        <el-submenu index="6">
          <template slot="title">
            <i class="el-icon-news"></i>
            <span>element</span>
          </template>
          <el-menu-item index="/table">表格</el-menu-item>
          <el-menu-item index="/elementComp">穿梭框</el-menu-item>
        </el-submenu>

        <!--菜单测试：-->
        <el-menu-item index="/test">
          <i class="el-icon-view"></i>
          <span slot="title">测试</span>
        </el-menu-item>
      </el-menu>
    </div>
    <div :class="menuCollapse ? 'main-content collapseClass' : 'main-content'">
      <div class="header">
        <span class="switch" @click="menuSwitchHandle">
          <i :class="menuCollapse ? 'iconfont icon-zhedie-copy' : 'iconfont icon-zhedie'"></i>
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
    display: flex;
    height: 100%;
    .menu-wrapper{
      flex: 0 0 200px;
      background: #001529;
      @extend .customAni;
      &.collapseClass{
        flex: 0 0 64px;
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
    .main-content{
      flex: 1;
      background: #f6f8f9;
      &.collapseClass{
        flex: 1;
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
          background: lightcyan;
          text-align: center;
          i{
            line-height: 60px;
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
      }
    }
  }
</style>
