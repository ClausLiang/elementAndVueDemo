<template>
  <div class="user">
    <div class="search">
      <el-form :inline="true" class="demo-form-inline">
        <el-form-item label="城市">
          <el-select v-model="searchForm.city">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="楼盘名称">
          <el-select v-model="searchForm.house">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="search">查询</el-button>
          <el-button type="primary" @click="search">下载模板</el-button>
          <el-button type="primary" @click="search">批量添加</el-button>
          <el-button type="primary" @click="search">单个添加</el-button>
        </el-form-item>
      </el-form>
    </div>
    <el-table :data="tableData">
      <el-table-column prop="num" label="序号"></el-table-column>
      <el-table-column prop="city" label="城市"></el-table-column>
      <el-table-column prop="house" label="楼盘名称"></el-table-column>
      <el-table-column prop="name" label="姓名"></el-table-column>
      <el-table-column prop="card" label="证件类型"></el-table-column>
      <el-table-column prop="cardNum" label="证件号码"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope='scope'>
          <el-button type="text" @click="deleteP(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="pagebar">
      <el-pagination
        background
        layout="prev, pager, next"
        :current-page.sync="currentPage"
        @current-change="handleCurrentChange"
        :total="totalSize">
      </el-pagination>
    </div>

  </div>
</template>

<script>
  export default{
    data () {
      return {
        searchForm: {
          city: '',
          house: ''
        },
        currentPage: 1,
        totalSize: 100,
        tableData: [
          {num:1, city:'上海', house: 'xx楼盘', name: 'lyg', card: '身份证', cardNum: '141122111111111111'}
        ]
      }
    },
    created:function(){
      this.search()
    },
    methods: {
      search () {

      },
      handleCurrentChange () {
        console.log(this.currentPage)
      },
      deleteP (row) {
        console.log(row.cardNum)
      }
    },
  }
</script>

<style lang="stylus">
  .pagebar{
    margin-top: 10px;
    background: #fff;
    padding: 5px 0;
  }
</style>
