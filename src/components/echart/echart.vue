<template>
  <div>
    <div class='searchList'>
      <el-radio-group v-model='quickTime' size='small' @change='quickTimeChange'>
        <el-radio-button label='1'>今天</el-radio-button>
        <el-radio-button label='2'>昨天</el-radio-button>
        <el-radio-button label='3'>最近7天</el-radio-button>
        <el-radio-button label='4'>最近30天</el-radio-button>
      </el-radio-group>
      <el-date-picker
        class='ml5'
        size='small'
        v-model='time'
        type='daterange'
        range-separator='至'
        start-placeholder='开始时间'
        end-placeholder='结束时间'
        @change='dateChangeHandle'
        value-format='yyyy-MM-dd'
      >
      </el-date-picker>
      <div class='ml5'>
        <el-button type='primary' @click='searchList' size='small'>查询</el-button>
      </div>
    </div>
    <!-- 为 ECharts 准备一个具备大小（宽高）的 DOM -->
    <div id='main' class='mt10' style='width: 1600px;height:400px;'></div>
    <div id='main2' class='mt10' style='width: 600px;height:400px;'></div>
  </div>
</template>

<script>
  import echarts from 'echarts'
  export default {
    name: 'echart',
    data () {
      return {
        quickTime: '3',
        time: [],
        startTime: undefined,
        endTime: undefined
      }
    },
    methods: {
      searchList () {},
      // 快捷方式选时间
      quickTimeChange (val) {
        console.log(val)
        this.time = []
        this.startTime = undefined
        this.endTime = undefined
      },
      // 时间选择
      dateChangeHandle (val) {
        this.quickTime = ''
        if (val) {
          // 这块是处理当用户双击一个日期时的情况
          if (val[0] === val[1]) {
            var date1 = new Date(val[0]) // 返回一个时间
            var date2stamp = new Date(val[0]).setDate(date1.getDate() + 1) // 返回一个时间戳
            var date2 = new Date(date2stamp)
            this.time = [date1, date2]
            val[1] = this.getDateString(date2)
          }
          this.startTime = val[0]
          this.endTime = val[1]
        } else {
          this.startTime = undefined
          this.endTime = undefined
        }
      },
      // 时间转日期字符串
      getDateString (time) {
        const year = time.getFullYear()
        const month = String(time.getMonth() + 1).length === 1 ? '0' + (time.getMonth() + 1) : (time.getMonth() + 1)
        const day = String(time.getDate()).length === 1 ? '0' + time.getDate() : time.getDate()
        return year + '-' + month + '-' + day
      },
      echarts1 () {
        var myChart = echarts.init(document.getElementById('main'))
        var option = {
          title: {
            text: '趋势图'
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: ['报备', '带看', '认筹', '认购', '草签', '签约']
          },
          grid: {
            left: '2%',
            right: '2%',
            bottom: '3%',
            containLabel: true
          },
          toolbox: {
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              name: '报备',
              type: 'line',
              stack: '总量',
              data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
              name: '带看',
              type: 'line',
              stack: '总量',
              data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
              name: '认筹',
              type: 'line',
              stack: '总量',
              data: [150, 232, 201, 154, 190, 330, 410]
            },
            {
              name: '认购',
              type: 'line',
              stack: '总量',
              data: [320, 332, 301, 334, 390, 330, 320]
            },
            {
              name: '草签',
              type: 'line',
              stack: '总量',
              data: [820, 932, 901, 934, 1290, 1330, 1320]
            },
            {
              name: '签约',
              type: 'line',
              stack: '总量',
              data: [830, 942, 911, 944, 1300, 1340, 1330]
            }
          ]
        }
        myChart.setOption(option)
      },
      echarts2 () {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('main2'))
        // 指定图表的配置项和数据
        var option = {
          title: {
            text: '柱状图'
          },
          tooltip: {},
          legend: {
            data: ['销量']
          },
          xAxis: {
            data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
          },
          yAxis: {},
          series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }]
        }

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option)
      }
    },
    mounted () {
      this.echarts1()
      this.echarts2()
      const obj = {
        '5': '雪花啤酒中国好朋友',
        '210': '合生悦上城13456',
        '306': '合生麒麟公馆',
        '600': '合生世界花园',
        '1325': '大郊亭金茂府',
        '1395': '中铁春风十里',
        '1399': '五期五期五期五期五期五期五期五期'
      }
      let res = []
      for (var item in obj) {
        res.push(obj[item])
      }
      var temp = [1, 2, 3, 4, 5, 6]
      console.log(temp.slice(0, 3))
    }
  }
</script>

<style lang='stylus'>
  .searchList{display: flex; align-item: center;}
  .searchList .select{width: 160px; margin-left: 5px;}
  .searchList .ml5{margin-left: 5px;}
  .mt10{ margin-top: 10px;}
</style>
