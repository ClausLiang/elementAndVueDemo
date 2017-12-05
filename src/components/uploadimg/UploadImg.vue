<template>
  <div class="uploadimg">
    <img :src="headerImage" alt="" @click="showImgHandle" class="avatar">
    <el-dialog title="选择图片" :visible.sync="showUpload" width="500px">
      <input type="file" ref="imgFile" @change="imgChange">
      <div class="img-container">
        <div class="img-left">
          <img src="" alt="" id="imgContent">
        </div>
        <div class="img-right">
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="showUpload = false">取 消</el-button>
        <el-button type="primary" @click="cropHandle">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
  import Cropper from 'cropperjs'
  export default {
    name: 'uploadImg',
    data () {
      return {
        showUpload: false,
        cropper: null,
        headerImage: ''
      }
    },
    methods: {
      // 展示选择图片框
      showImgHandle () {
        this.showUpload = true
        this.$nextTick(() => {
          this.initCropper()
        })
      },
      // 初始化cropper
      initCropper () {
        const image = document.querySelector('#imgContent')
        var self = this
        if (!this.cropper) {
          this.cropper = new Cropper(image, {
            aspectRatio: 1,
            // viewMode: 1,
            background: false,
            // zoomable: false,
            // autoCropArea:0.8,
            preview: '.img-right',
            ready: function () {
              self.croppable = true
            }
          })
        }
      },
      // 图片改变
      imgChange (e) {
        const files = e.target.files || e.dataTransfer.files // 获取文件
        // const files = this.$refs.imgFile.files // 获取文件的第二种方式
        const url = this.getObjectURL(files[0])
        this.cropper.replace(url)
      },
      // 获取url
      getObjectURL (file) {
        var url = null
        if (window.createObjectURL !== undefined) { // basic
          url = window.createObjectURL(file)
        } else if (window.URL !== undefined) { // mozilla(firefox)
          url = window.URL.createObjectURL(file)
        } else if (window.webkitURL !== undefined) { // webkit or chrome
          url = window.webkitURL.createObjectURL(file)
        }
        return url
      },
      // 点击确定
      cropHandle () {
        this.showUpload = false
        if (!this.cropper.getCroppedCanvas()) {
          const files = this.$refs.imgFile.files
          if (files[0]) {
            const url = this.getObjectURL(files[0])
            this.cropper.reset().replace(url)
          } else {
            this.$message.info('未选择图片')
            return false
          }
        }
        this.headerImage = this.cropper.getCroppedCanvas().toDataURL() // 转成base64
        this.postImg()
      },
      postImg () {
        // 这边写图片的上传
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .uploadimg{
    .avatar{
      width: 50px;
      height: 50px;
      border: 1px solid lightblue
    }
    /*弹窗中的图片容器*/
    .img-container{
      .img-left{
        width: 300px;
        height: 200px;
        display: inline-block
        border: 1px solid #0a628f
      }
      .img-right{
        width: 100px;
        height: 100px;
        display: inline-block;
        border: 1px solid #0a628f
        margin-left 10px;
        vertical-align top;
        overflow: hidden;
      }
    }
  }

  /*样式重写*/
  .el-dialog__body{
    padding: 0 20px;
  }
</style>
