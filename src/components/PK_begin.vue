<template>
  <div>
    <headerTab></headerTab>
    <el-container class="user_info">
      <el-header class="user_info_header">{{date}}</el-header>
      <el-main class="user_info_content">
        <div class="t_a_c" @click="goGame()"><img src="../assets/img/pk_find.png" alt=""></div>
        <gameShow v-if="toShow"></gameShow>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import headerTab from './header'
import gameShow from './PK_show'
export default {
  name: 'PK_begin',
  data () {
    return {
      date: '',
      toShow: false
    }
  },
  components: {
    headerTab,
    gameShow
  },
  mounted () {
    let _this = this
    this.timer = setInterval(() => {
      let dt = new Date()
      let y = dt.getFullYear()
      let m = dt.getMonth() + 1
      let d = dt.getDate()
      let hh = dt.getHours()
      let mm = dt.getMinutes()
      let ss = dt.getSeconds()
      _this.date = `${y}年${m}月${d}日 ${hh}:${mm}:${ss}`
    }, 1000)
  },
  beforeDestroy () {
    if (this.timer) {
      clearInterval(this.timer)
    }
  },
  methods: {
    goGame () {
      this.toShow = true
    }
  }
}
</script>

<style scoped>
  .user_info {
    margin: 50px auto;
    background-color: #fff;
    width: 1100px;
    /*padding-top: 50px;*/
    border-radius: 30px
  }

  .user_info_header {
    margin: 0 auto;
    font-weight: bold;
    font-size: 18px;
    padding-top: 60px;
  }

  .user_info_content {
    width: 1000px;
    margin: 30px auto;
  }
  .pk_user_logo{
    width: 130px;
    height: 130px;
    border-radius: 50%;
  }
  .pk_user_left{
    width: 250px;
    height: 40px;
  }
  .pk_time{
    color: #e55730;
    font-size: 120px;
    font-weight: bold;
    line-height: 1.6;
  }
  .pk_data{
    height: 200px;
  }
  .pk_data_l{
    border-right: 1px solid #d8d8d8;
    width: 35%;
    height: 200px;
  }
  .pk_data_r{
    width: 64%;
    height: 200px;
  }
  .trend_map{
    padding: 10px;
    font-weight: bold;
  }

  .t_a_c{
    text-align: center;
  }

</style>
