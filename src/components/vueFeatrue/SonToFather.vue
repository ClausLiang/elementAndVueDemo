<template>
  <div class="sonToFather">
    <h2>子组件给父组件传值--通过事件</h2>
    <p>统计：{{total}}</p>
    <button-counter1 @increment="incrementTotal"></button-counter1>
    <button-counter2 @increment="incrementTotal"></button-counter2>
  </div>
</template>
<script>
  import Vue from 'vue'
  export default {
    name: 'sonToFather',
    data () {
      return {
        total: 0
      }
    },
    methods: {
      incrementTotal (val) {
        this.total += val
      }
    }
  }
  // 定义了一个全局组件
  Vue.component('button-counter1', {
    template: '<button @click="clickHandle">内部计数器：{{counter}}，每点1次+1</button>',
    data () {
      return {
        counter: 0
      }
    },
    methods: {
      clickHandle () {
        this.counter += 1
        this.$emit('increment', 1)
      }
    }
  })
  Vue.component('button-counter2', {
    template: '<button @click="clickHandle">内部计数器：{{counter}}，每点1次+2</button>',
    data () {
      return {
        counter: 0
      }
    },
    methods: {
      clickHandle () {
        this.counter += 2
        this.$emit('increment', 2)
      }
    }
  })
</script>
<style>

</style>
