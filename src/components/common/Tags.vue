<template>
  <div class="tags">
    <ul class="tags-content">
      <li class="tag-item" v-for="(item, index) in tagList" :class="{'on': isActive(item.path)}">
        <router-link :to="item.path">
          {{item.title}}
        </router-link>
        <span class="close-icon" @click="closeHandle(index)">x</span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'tags',
    data () {
      return {
        tagList: []
      }
    },
    methods: {
      isActive (path) {
        return path === this.$route.fullPath
      },
      // 关闭单个标签
      closeHandle (index) {
        console.log(index)
      },
      setTag (route) {
        const isExist = this.tagList.some(item => {
          return item.path === route.fullPath
        })
        if (!isExist) {
          if (this.tagList.length >= 8) {
            this.tagList.shift()
          }
          this.tagList.push({path: route.fullPath, title: route.meta.title})
        }
      }
    },
    created () {
      this.setTag(this.$route)
    },
    watch: {
      $route (newValue, oldValue) {
        console.log(newValue)
        this.setTag(newValue)
      }
    }
  }
</script>

<style lang="stylus">
  .tags{
    .tags-content{
      list-style: none;
      margin: 0;
      padding: 0;
      height: 30px;
      display: flex;
      .tag-item{
        flex-shrink: 0;
        margin: 3px;
        padding: 0 20px;
        height: 24px;
        line-height: 24px;
        font-size: 14px;
        border: 1px solid #ccc;
        border-radius: 5px;
        box-sizing: border-box;
        text-align: center;
        background: #f8f8f8;
        position: relative;
        &.on{
          background: #409EFF;
          color: #fff;
          a{
            color: #fff;
          }
        }
        a{
          text-decoration: none;
          color: #000c17
        }
        .close-icon{
          position: absolute;
          top: 1px;
          right: 3px;
          cursor: pointer;
          font-size: 10px;
          line-height: 10px;
        }
      }
    }
  }
</style>
