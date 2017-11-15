<template>
  <div class="fatherson">
    <h2>父组件给子组件传值--通过props</h2>
    <div>
      <input type="text" v-model="messageFromFather">
      <my-child :message="messageFromFather"></my-child>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
// 定义了一个局部组件
var child = {
  props: ['message'],
  template: '<div>{{message}}</div>'
}
export default {
  name: 'fatherToSon',
  data () {
    return {
      messageFromFather: 'hello childComponent'
    }
  },
  created () {
    axios.get('http://www.easy-mock.com/mock/5a011f399d3ceb4a35438b68/example/proxy').then(response => {
      if (response.data.status === 'ok') {
        console.log(response.data.data)
      }
    })
  },
  components: {
    'my-child': child
  }
}
</script>
<style>

</style>
