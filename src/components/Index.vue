<template>
  <div class="index-wrapper">
    <div class="menu-wrapper">
      <div class="logo">

      </div>
      <el-menu :default-active="currentMenu" class="el-menu-vertical-demo" router>
        <el-menu-item index="/fatherToSon">
          <i class="el-icon-menu"></i>
          <span slot="title">父组件对子组件传值</span>
        </el-menu-item>
        <el-menu-item index="/sonToFather">
          <i class="el-icon-menu"></i>
          <span slot="title">子组件对父组件传值</span>
        </el-menu-item>
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
      <div class="header"></div>
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
        currentMenu: this.$route.path
      }
    },
    created () {
      if (sessionStorage.getItem('sysUser')) { // 每次刷新页面判断判断状态已登录不做处理
      } else { // 未登录重新登录
        alert('登录异常，请重新登录')
        this.$router.push({path: '/login'})
      }
    }
  }
</script>
<style lang="stylus">
  .index-wrapper{
    display: flex;
    .menu-wrapper{
      flex: 0 0 200px;
      .logo{
        height: 60px;
      }
    }
    .main-content{
      flex: 1;
      .header{
        height: 60px;
      }
      .main-wrapper{
        padding: 20px;
      }
    }
  }
</style>
