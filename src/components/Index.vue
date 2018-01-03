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
    overflow-y hidden;
  }
</style>
