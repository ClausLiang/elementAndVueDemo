<template>
  <div class="upload">
    <div class="upload-wrapper">
      <div class="img-wrapper">
        <img :src="imgUrl" alt="" width="375" height="190">
      </div>
      <div class="btn-wrapper">
        <div class="tip">注：图片尺寸必须为375*190，支持jpg和png格式。</div>
        <el-button type="primary" class="btn" @click="uploadHandle">上传</el-button>
        <input type="file" ref="inputfile" @change="fileChangeHandle" style="display: none;">
      </div>
    </div>
  </div>
</template>

<script>
  import * as qiniu from 'qiniu-js'
  export default {
    name: 'upload-qiniu',
    data () {
      return {
        imgUrl: ''
      }
    },
    methods: {
      uploadHandle () {
        const node = this.$refs.inputfile
        node.click()
      },
      fileChangeHandle () {
        const file = this.$refs.inputfile.files[0]
        // 判断文件类型
        const upType = ['jpg', 'png']
        const fileName = file.name
        const postfix = fileName.substring(fileName.lastIndexOf('.') + 1, fileName.length)
        if (upType.indexOf(postfix) === -1) {
          alert('只支持png jpg格式的图片')
          return false
        }
        // 判断图片宽高
        const fileReader = new FileReader()
        fileReader.readAsDataURL(file)
        const vueThis = this
        fileReader.onloadend = function () {
          const img = new Image()
          img.src = this.result
          img.onload = function () { // 异步的
            if (this.width !== 375 && this.height !== 190) {
              alert('请上传分辨率为 375 * 190 的图片')
            } else {
              vueThis.uploadQiniu(file)
            }
          }
        }
      },
      // 用七牛上传
      uploadQiniu (file) {
        const fileName = file.name
        const postfix = fileName.substring(fileName.lastIndexOf('.'), fileName.length)
        const name = new Date().getTime()
        // 常腾的七牛
        const token = 'KnHxbiklzxTLjyJbq1KtCVoFHseq9RvG6MJkyLCy:ZzcKm3Ui_CEzKymcENxQbbIQ1VQ=:eyJzY29wZSI6InVwbG9hZC1jdCIsImRlYWRsaW5lIjozNTM0ODM5NTgxfQ=='
        var putExtra = {
          fname: fileName,
          params: {},
          mimeType: null
        }
        var config = {
          useCdnDomain: true
        }
        var observable = qiniu.upload(file, name + postfix, token, putExtra, config)
        observable.subscribe(function (res) {
          console.log('图片上传进度：', res)
        }, function (error) {
          console.error('图片上传失败：', error)
        }, function (res) {
          console.log(res)
          alert('图片上传成功')
        })
      }
    }
  }
</script>

<style scoped lang="stylus">
  .upload{
    .upload-wrapper{
      display: flex;
      .img-wrapper{
        width: 375px;
        height: 190px;
        border: 1px solid #ccc;
      }
      .btn-wrapper{
        flex: 1;
        position: relative;
        padding-left: 10px;
        .btn{
          position: absolute;
          bottom:0;
          left: 10px;
        }
      }
    }
  }
</style>
