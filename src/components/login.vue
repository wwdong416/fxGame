<template>
  <div>
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm"   class="loginFrom">
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
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'login',
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
  width: 400px;
  margin: 100px auto;
  background-color: #fff;
  padding: 80px;
  border-radius: 50px;
}
</style>
