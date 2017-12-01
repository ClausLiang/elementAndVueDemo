<template>
  <div class="addGoods">
    <button @click="addGoods(1)">添加一个商品</button>
    <button @click="addGoods(2)">添加两个商品</button>
    <button @click="addGoods(3)">添加三个商品</button>
  </div>
</template>
<script>
  export default {
    name: 'addGoods',
    data () {
      return {}
    },
    methods: {
      addGoods (num) {
        this.$store.dispatch('addGoodsNumHandle', {num})
      }
    }
  }
</script>
<style>

</style>
