<template>
  <div>
    <el-container class="user_info">
      <el-header class="user_info_header"><img src="../assets/img/user_info_title.png" alt=""></el-header>
      <el-main class="user_info_content">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="昵称" prop="l_name">
            <el-input v-model="ruleForm.l_name"></el-input>
          </el-form-item>
          <el-form-item label="姓名" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="头像" prop="u_logo">
            <el-upload
              class="avatar-uploader"
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="true"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload">
              <img v-if="imageUrl" :src="imageUrl" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
          <el-form-item label="手机号" prop="phone">
            <el-input v-model="ruleForm.phone"></el-input>
          </el-form-item>
          <el-form-item label="身份证号码" prop="IDCard">
            <el-input v-model="ruleForm.IDCard"></el-input>
          </el-form-item>
          <el-form-item label="国家/地区" prop="country">
            <el-select v-model="ruleForm.country" placeholder="请选择国家/地区" label-width="300px">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="生日" prop="birthday">
            <!--<el-input v-model="ruleForm.birthday"></el-input>-->
            <el-date-picker
              v-model="ruleForm.birthday"
              type="date"
              size="large"
              placeholder="选择日期">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="邮箱" prop="email">
            <el-input v-model="ruleForm.email"></el-input>
          </el-form-item>
          <el-form-item label="邮箱确认" prop="emailCheck">
            <el-input v-model="ruleForm.emailCheck"></el-input>
          </el-form-item>
          <el-form-item label="赛区" prop="area">
            <el-select v-model="ruleForm.area" placeholder="请选择赛区">
              <el-option label="赛区一" value="shanghai"></el-option>
              <el-option label="赛区二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item prop="agree">
            <el-checkbox  v-model="ruleForm.agree" label="我已仔细阅读并了解FXBV隐私政策" name="agree"></el-checkbox>
          </el-form-item>
          <el-form-item>
            <!--<img type="primary" @click="submitForm('ruleForm')" src="../assets/img/submit.png" alt="">-->
            <!--<el-button type="primary" @click="submitForm('ruleForm')"></el-button>-->
            <!--<el-button @click="resetForm('ruleForm')">重置</el-button>-->
          </el-form-item>
          <el-form-item style="padding-bottom: 60px">
            <img  @click="submitForm('ruleForm')" src="../assets/img/submit.png" alt="">
            <!--<el-button type="primary" @click="submitForm('ruleForm')"></el-button>-->
            <!--<el-button @click="resetForm('ruleForm')">重置</el-button>-->
          </el-form-item>
        </el-form>
      </el-main>

    </el-container>
    <div class="footer_warn">
      风险警示：<br>
      保证金外汇、差价合约(CFD)交易等金融衍生品投资具有高风险，可能导致您损失本金。因此，您所承担的亏损风险不应超过您的承受能力范围，请确保知悉其中所涉的一切风险。保证金外汇和杠杠化产品并不适合所有投资者，在交易前，请谨慎考虑您的经验水平、投资目标以及财政状况等，如有必要请寻求独立财务建议。客户有责任确保他/她所居住国家法律要求允许其使用FXBV品牌提供的服务。点击此处阅览完整的风险披露。
    </div>
  </div>
</template>

<script>
export default {
  name: 'register',
  created () {
    this.$emit('openNew', 1)
  },
  data () {
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入邮箱'))
      } else if (value !== this.ruleForm.email) {
        callback(new Error('两次输入邮箱地址不一致!'))
      } else {
        callback()
      }
    }
    let isAgree = (rule, value, callback) => {
      if (value === false) {
        callback(new Error('请仔细阅读并了解FXBV隐私政策'))
      } else {
        callback()
      }
    }
    return {
      ruleForm: {
        l_name: '',
        name: '',
        u_logo: '',
        phone: '',
        IDCard: '',
        country: '',
        birthday: '',
        email: '',
        emailCheck: '',
        area: '',
        agree: false
      },
      rules: {
        name: [
          {required: true, message: '请输入昵称', trigger: 'blur'},
          {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
        ],
        l_name: [
          {required: true, message: '请输入姓名', trigger: 'blur'},
          {min: 2, max: 5, message: '长度在 2 到 5 个字符', trigger: 'blur'}
        ],
        phone: [
          {required: true, message: '请输入手机号码', trigger: 'blur'},
          {min: 11, max: 11, message: '请输入正确的手机号码', trigger: 'blur'}
        ],
        IDCard: [
          {required: true, message: '请输入身份证号码', trigger: 'blur'},
          {min: 18, max: 18, message: '请输入正确的身份证号码', trigger: 'blur'}
        ],
        email: [
          {required: true, message: '请输入邮箱地址', trigger: 'blur'},
          {type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change']}
        ],
        agree: [
          {validator: isAgree, trigger: 'change'}
          // { required: true, message: '请仔细阅读并了解FXBV隐私政策', trigger: 'change' }
        ],
        emailCheck: [
          {validator: validatePass2, trigger: 'blur'}
        ]
      },
      imageUrl: ''
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    handleAvatarSuccess (res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    beforeAvatarUpload (file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    }
  }
}
</script>

<style scoped>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }

  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }

  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 80px;
    height: 80px;
    line-height: 80px;
    text-align: center;
  }

  .avatar {
    width: 80px;
    height: 80px;
    display: block;
  }

  .user_info {
    margin: 50px auto;
    background-color: #fff;
    width: 1100px;
    /*padding-top: 50px;*/
    border-radius: 30px
  }

  .user_info_header {
    margin: 80px auto;
    padding-left: 100px;
  }

  .user_info_content {
    width: 500px;
    margin: 0 auto;
  }

  .footer_warn {
    margin: 0 auto;
    width: 1100px;
    line-height: 2.5;
    padding: 20px 0;
  }
</style>
