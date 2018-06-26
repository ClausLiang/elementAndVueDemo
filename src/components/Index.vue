<template>
  <div class="index-wrapper">
    <div :class="menuCollapse ? 'menu-wrapper collapse' : 'menu-wrapper'">
      <div class="logo">

      </div>
      <el-menu :default-active="currentMenu" class="el-menu-vertical-demo" router :collapse="menuCollapse">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span>vue特性</span>
          </template>
          <el-menu-item index="/fatherToSon">父对子组件传值</el-menu-item>
          <el-menu-item index="/sonToFather">子对父组件传值</el-menu-item>
        </el-submenu>
        <el-menu-item index="/websocket">
          <i class="el-icon-menu"></i>
          <span slot="title">websocket</span>
        </el-menu-item>
        <el-menu-item index="/addgoods">
          <i class="el-icon-edit-outline"></i>
          <span slot="title">vuex存数据到store</span>
        </el-menu-item>
        <el-menu-item index="/showgoods">
          <i class="el-icon-goods"></i>
          <span slot="title">vuex从store取数据</span>
        </el-menu-item>
        <el-menu-item index="/uploadimg">
          <i class="el-icon-picture"></i>
          <span slot="title">裁剪图片</span>
        </el-menu-item>
        <el-menu-item index="/uploadimg2">
          <i class="el-icon-picture"></i>
          <span slot="title">裁剪图片2</span>
        </el-menu-item>
        <el-menu-item index="/getdata">
          <i class="el-icon-picture"></i>
          <span slot="title">获取数据及去空格</span>
        </el-menu-item>
        <el-menu-item index="/test">
          <i class="el-icon-picture"></i>
          <span slot="title">测试</span>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="main-content">
      <div class="header">
        <span class="switch" @click="menuSwitchHandle">
          <i :class="menuCollapse ? 'iconfont icon-zhedie-copy' : 'iconfont icon-zhedie'"></i>
        </span>
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
        menuCollapse: false
      }
    },
    created () {
      if (sessionStorage.getItem('sysUser')) { // 每次刷新页面判断判断状态已登录不做处理
      } else { // 未登录重新登录
        alert('登录异常，请重新登录')
        this.$router.push({path: '/login'})
      }
    },
    methods: {
      menuSwitchHandle () {
        this.menuCollapse = !this.menuCollapse
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
      &.collapse{
        flex: 0 0 64px;
        .el-menu{
          span{
            opacity: 0;
          }
        }
      }
      .logo{
        height: 60px;
        background: #20a1ff;
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
      .header{
        height: 60px;
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
      }
      .main-wrapper{
        padding: 20px;
      }
    }
  }
</style>
