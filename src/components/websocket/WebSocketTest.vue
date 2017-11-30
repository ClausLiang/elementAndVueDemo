<template>
  <div class="websocket">
    websocket
  </div>
</template>
<script>
  export default {
    data () {
      return {}
    },
    created () {
      this.websocket()
    },
    methods: {
      websocket () {
        /**
         * 四个方法：打开，发送，接收，出错
         * @type {WebSocket}
         */
        var socket = new WebSocket('ws://10.10.27.51/notice/user/HYS010387/message')
        // 打开
        socket.onopen = function (event) {
          // 发送
          // socket.send('xxx')
          // 接收
          socket.onmessage = function (event) {
            console.log('received:', event)
          }
        }
        // 出错
        socket.onerror = function (event) {
          console.log(event.data)
        }
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">

</style>
