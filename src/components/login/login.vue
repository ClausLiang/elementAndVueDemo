<template>
  <div class="login">
    <div class="login-wrapper">
      <div class="login-title">后台管理系统</div>
      <div class="login-content">
        <el-form :model="loginForm" :rules="rules" ref="loginForm" label-width="0" class="demo-ruleForm">
          <el-form-item label="" prop="name">
            <el-input v-model="loginForm.name"></el-input>
          </el-form-item>
          <el-form-item label="" prop="password">
            <el-input type="password" v-model="loginForm.password"></el-input>
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
          name: '',
          password: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入用户名', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      submitForm () {
        this.$refs['loginForm'].validate((valid) => {
          if (valid) {

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
