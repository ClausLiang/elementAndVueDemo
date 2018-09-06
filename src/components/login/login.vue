<template>
  <div class="login">
    <div class="login-wrapper">
      <div class="login-title">后台管理系统</div>
      <div class="login-content">
        <el-form :model="loginForm" :rules="rules" ref="loginForm" label-width="0" class="demo-ruleForm">
          <el-form-item label="" prop="name">
            <el-input v-model="loginForm.name" placeholder="用户名" :maxlength="10"></el-input>
          </el-form-item>
          <el-form-item label="" prop="password">
            <el-input type="password" v-model="loginForm.password" placeholder="密码" :maxlength="10"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input style="width: 220px;"></el-input>
            <el-button type="primary" @click="getIdentCodeH" v-show="showIdentifyBtn" style="width: 110px; margin-left: 5px;">获取验证码</el-button>
            <el-button v-show="!showIdentifyBtn" style="width: 110px; margin-left: 5px;">{{clockNum}}</el-button>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm" class="login-btn">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'login',
    data () {
      return {
        loginForm: {
          name: 'admin',
          password: 'admin'
        },
        showIdentifyBtn: true, // 显示获取验证码按钮
        clockNum: 19, // 验证码倒计时
        rules: {
          name: [
            { required: true, message: '请输入用户名', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      getIdentCodeH () {
        this.showIdentifyBtn = false
        let timer = setInterval(() => {
          this.clockNum --
          if (this.clockNum <= 0) {
            clearInterval(timer)
            this.showIdentifyBtn = true
            this.clockNum = 19
          }
        }, 1000)
      },
      submitForm () {
        this.$refs['loginForm'].validate((valid) => {
          if (valid) {
            // 这儿应该去调用登录接口，成功以后将用户信息保存到浏览器缓存中
            let sysUser = {}
            if (this.loginForm.name === 'admin') {
              sysUser.authority = 'admin'
            } else {
              sysUser.authority = '1'
            }
            sysUser.name = this.loginForm.name
            window.sessionStorage.sysUser = JSON.stringify(sysUser)
            this.$router.push({path: '/'})
          } else {
            return false
          }
        })
      }
    }
  }
</script>

<style scoped lang="stylus">
  .login{
    background: #324157;
    height: 100%;
    position: relative;
    .login-wrapper{
      position: absolute;
      width: 400px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -70%);
      .login-title{
        text-align: center;
        font-size: 30px;
        color: #fff;
      }
      .login-content{
        margin-top: 30px;
        padding: 30px;
        box-sizing: border-box;
        background: #fff;
        border-radius: 5px;
        .login-btn{
          width: 100%;
        }
      }
    }
  }
</style>
