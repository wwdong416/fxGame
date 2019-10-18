<template>
  <div>
    <el-container class="loginFrom">
      <el-header style="text-align: center;font-weight: bold;font-size: 40px">请登录FXBV系统</el-header>
      <el-main>  <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm"  style="width: 400px;margin: 30px auto">
        <el-form-item label="用户名/手机号码" prop="userName">
          <el-input v-model="ruleForm.userName"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="passWord">
          <el-input type="password" v-model="ruleForm.passWord" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
          <el-button @click="resetForm('ruleForm')">注册</el-button>
        </el-form-item>
      </el-form></el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'login',
  created () {
    this.$emit('openNew', 2)
  },
  data () {
    return {
      ruleForm: {
        userName: '',
        passWord: ''
      },
      rules: {
        userName: [
          {required: true, message: '请输入用户名/手机号', trigger: 'blur'}
        ],
        passWord: [
          {required: true, message: '请输入密码', trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.login()
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    login () {
      const that = this
      that.$router.push({
        path: '/service',
        name: 'service'
      })
    }
  }
}
</script>

<style scoped>
.loginFrom{
  width: 1100px;
  margin: 60px auto;
  background-color: #fff;
  padding: 80px;
  border-radius: 50px;
}
</style>
