<template>
  <div>
    <el-transfer v-model="value1" :data="data"></el-transfer>
    <el-transfer
      v-model="value2"
      :data="data2">
    </el-transfer>
    <el-transfer
      v-model="value3"
      :titles="['Source', 'Target']"
      :button-texts="['到左边', '到右边']"
      :data="data">
    </el-transfer>
    <el-transfer
      v-model="value4"
      :titles="['Source', 'Target']"
      :button-texts="['到左边', '到右边']"
      :data="data">
    </el-transfer>
  </div>
</template>

<script>
  export default {
    name: 'element-comp',
    data () {
      const generateData = _ => {
        const data = []
        for (let i = 1; i <= 15; i++) {
          data.push({
            key: i,
            label: `备选项 ${i}`,
            disabled: i % 4 === 0
          })
        }
        return data
      }
      const generateData2 = _ => {
        const data = []
        const cities = ['上海', '北京', '广州', '深圳', '南京', '西安', '成都']
        const pinyin = ['shanghai', 'beijing', 'guangzhou', 'shenzhen', 'nanjing', 'xian', 'chengdu']
        cities.forEach((city, index) => {
          data.push({
            label: city,
            key: index,
            pinyin: pinyin[index]
          })
        })
        return data
      }
      return {
        data: generateData(),
        value1: [1, 4],
        data2: generateData2(),
        value2: [],
        value3: [1],
        value4: [1]
      }
    }
  }
</script>

<style scoped lang="stylus">

</style>
