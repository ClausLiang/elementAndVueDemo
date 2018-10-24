<template>
  <div class="fatherson">
    <div>
      父组件：<input type="text" v-model="messageFromFather">
      <my-child :message="messageFromFather"></my-child>
    </div>
  </div>
</template>
<script>
// 定义了一个局部组件
var child = {
  props: ['message'],
  template: '<div>这里是子组件：{{message}}</div>'
}
export default {
  name: 'fatherToSon',
  data () {
    return {
      messageFromFather: 'hello childComponent'
    }
  },
  created () {
  },
  components: {
    'my-child': child
  }
}
</script>
<style>

</style>
