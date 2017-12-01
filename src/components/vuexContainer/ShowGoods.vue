<template>
  <div class="showGoods">已经添加&nbsp;{{showGoodsNum}}&nbsp;个商品</div>
</template>
<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'show',
    data () {
      return {}
    },
    computed: {
      // 这种是简单的方式，直接获取getters
//      showGoodsNum () {
//        return this.$store.getters.getGoodsNum
//      }
      // 这种是mapgetters辅助
      ...mapGetters({
        showGoodsNum: 'getGoodsNum'
      })
    }
  }
</script>
<style>

</style>
