<template>
    <div class=''></div>
</template>
<script>
  import api from '@/api/apiPath.js'
  export default {
    name: '',
    data () {
      return {}
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
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">

</style>
