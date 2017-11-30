<template>
  <div class="index">
    <el-container>
      <el-header class="top">Header</el-header>
      <el-container>
        <el-aside width="200px" class="menu">
          <el-menu
            :default-active="currentMenu"
            class="el-menu-vertical-demo" router>
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
          </el-menu>
        </el-aside>
        <el-main class="main">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        currentMenu: this.$route.path
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .top{
    border-bottom: 1px solid #D8DCE5;
    line-height: 60px;
    text-align center;
  }
  .menu{
  }
</style>
