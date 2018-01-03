<template>
    <div class=''>
      <div>
        <h3>去空格</h3>
        <input type="text" onkeyup="this.value=this.value.replace(/\s+/,'')"><br><br>
        <input type="text" @keyup="qukongge" ref="yuansheng"><br><br>
        <el-input @keyup.native="qukongge2" ref="elllll" v-model="input"></el-input><br><br>
        <el-input @keyup.native="input2 = input2.replace(/\s+/,'')" ref="elllll" v-model="input2"></el-input>
      </div>
    </div>
</template>
<script>
  import api from '@/api/apiPath.js'
  export default {
    name: '',
    data () {
      return {
        input: '',
        input2: ''
      }
    },
    created () {
      this.$http.get(api.TEST).then(response => {
        if (response.data.status === 'ok') {
          console.log(response.data.data)
        }
      })
      this.$http.get(api.TEST2, {
        headers: {
          'Content-Type': 'application/json',
          'merchantcode': 'MCT1171',
          'source': 'PC',
          'version': '1.0.0'
        }
      }).then(response => {
        console.log(response.data.data)
      }).catch(err => {
        console.log(err)
      })
    },
    methods: {
      qukongge () {
        this.$refs.yuansheng.value = this.$refs.yuansheng.value.replace(/\s+/, '')
      },
      qukongge2 () {
        this.input = this.input.replace(/\s+/, '')
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">

</style>
