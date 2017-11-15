<template>
  <div class="sonToFather">
    <h2>子组件给父组件传值--通过事件</h2>
    <p>{{total}}</p>
    <button-counter @increment="incrementTotal"></button-counter>
    <button-counter @increment="incrementTotal"></button-counter>
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
      incrementTotal () {
        this.total += 1
      }
    }
  }
  // 定义了一个全局组件
  Vue.component('button-counter', {
    template: '<button v-on:click="increment">{{counter}}</button>',
    data () {
      return {
        counter: 0
      }
    },
    methods: {
      increment () {
        this.counter += 1
        this.$emit('increment')
      }
    },
    created () {
    }
  })
</script>
<style>

</style>
