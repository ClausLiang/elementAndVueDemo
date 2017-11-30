<template>
  <div class="websocket">
    websocket
  </div>
</template>
<script>
  export default {
    data () {
      return {
        socket: null
      }
    },
    created () {
      this.websocket()
    },
    beforeDestroy () {
      this.socket.close()
    },
    methods: {
      websocket () {
        /**
         * 5个方法：打开，发送，接收，出错，关闭
         * @type {WebSocket}
         */
        this.socket = new WebSocket('ws://10.10.27.51/notice/606/hjmxufrv/websocket') // user/HYS010387/message // 606/hjmxufrv/websocket
        // 打开
        this.socket.onopen = function (event) {
          // 发送
          // socket.send('xxx')
        }
        // 接收
        this.socket.onmessage = function (event) {
          console.log('received:', event)
        }
        // 出错
        this.socket.onerror = function (event) {
          console.log(event.data)
        }
        // 关闭
        this.socket.onclose = function (event) {
          console.log('websocket连接关闭')
        }
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">

</style>
