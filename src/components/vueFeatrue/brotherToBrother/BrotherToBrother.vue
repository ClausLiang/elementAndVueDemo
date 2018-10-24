<template>
  <div class="brother">
    <child1></child1>
    <child2></child2>
  </div>
</template>

<script>
  import bus from './bus'
  // 定义了一个局部组件
  var child1 = {
    props: ['message'],
    template: `<div class="child-node">
        <div>{{count}}</div>
        <button @click="clickHandle">给右边+1</button>
    </div>`,
    data () {
      return {
        count: 0
      }
    },
    methods: {
      clickHandle () {
        bus.$emit('leftClick', 1)
      }
    },
    mounted () {
      bus.$on('rightClick', data => {
        this.count += data
      })
    }
  }
  // 第二个局部组件
  var child2 = {
    props: ['message'],
    template: `<div class="child-node">
        <div>{{count}}</div>
        <button @click="clickHandle">给左边+1</button>
    </div>`,
    data () {
      return {
        count: 0
      }
    },
    methods: {
      clickHandle () {
        bus.$emit('rightClick', 1)
      }
    },
    mounted () {
      bus.$on('leftClick', data => {
        this.count += data
      })
    }
  }
  export default {
    components: {
      'child1': child1,
      'child2': child2
    },
    name: 'brother-to-brother'
  }
</script>

<style lang="stylus">
  .child-node{
    float: left;
    border: 1px solid #ccc;
    border-radius: 3px;
    width: 100px;
    height: 100px;
    text-align: center;
    margin-right: 10px;
  }
</style>
