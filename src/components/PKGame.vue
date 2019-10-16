<template>
  <div>
    <el-container class="user_info">
      <el-header class="user_info_header">{{date}}</el-header>
      <el-main class="user_info_content">
        <div class="t_a_c"><img src="../assets/img/pk_find.png" alt=""></div>
        <div class="mt60">
          <div class="fl w40">
            <img src="../assets/img/pk_user_left.png" alt="">
            <div></div>
            <div></div>
          </div>
          <div class="fl w20 pk_time t_a_c">10</div>
          <div class="fr w40">
            <img src="../assets/img/pk_user_right.png" alt="">
          </div>
        </div>
        <div class="mt20 t_a_c">
          <div class="fl w40 pk_data bd_d8">
            <div class="fl pk_data_l">
              <div  style="margin: 20px;height: 20%;border-bottom: 1px solid #d8d8d8;">竞猜结果</div>
              <div style="padding: 10px">1.2283</div>
              <div style="padding: 10px">1.2283</div> <div style="padding: 10px">1.2283</div>
            </div>
            <div class="fl pk_data_r">
              <div style="margin: 20px 40px;height: 50%;border-bottom: 1px solid #d8d8d8;">待揭示区</div>
              <div style="margin: 20px 40px;">
                <div class="fl" style="padding: 10px">1.2283</div>
                <div class="fr bgc2" style="padding: 10px 20px;color: #fff">提交</div>
              </div>
            </div>
          </div>
          <div class="fr w40 pk_data bd_d8">
            <div class="fl pk_data_l">
              <div  style="margin: 20px;height: 20%;border-bottom: 1px solid #d8d8d8;">竞猜结果</div>
              <div style="padding: 10px">1.2283</div>
              <div style="padding: 10px">1.2283</div> <div style="padding: 10px">1.2283</div>
            </div>
            <div class="fl pk_data_r">
              <div style="margin: 20px 40px;height: 50%;border-bottom: 1px solid #d8d8d8;">待揭示区</div>
              <div style="margin: 20px 40px;">
                <div class="fl" style="padding: 10px">1.2283</div>
                <div class="fr bgc2" style="padding: 10px 20px;color: #fff">提交</div>
              </div>
            </div>
          </div>
          <div class="clear"></div>
        </div>
        <div class="mt20">
          <div class="trend_map bgc1">欧元美元趋势图</div>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'PKGame',
  data () {
    return {
      date: ''
    }
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
  .bgc1{
    background-color: #f9be02;
  }
  .bgc2{
    background-color: #e55730;
  }
  .fl{
    float: left;
  }
  .fr{
    float: right;
  }
  .ma{
    margin: 0 auto;
  }
  .w21{
    width: 50%;
  }
  .w40{
    width: 40%;
  }
  .w20{
    width: 20%;
  }
  .mt20{
    margin-top: 20px;
  }
  .t_a_c{
    text-align: center;
  }
  .mt60{
    margin-top: 60px;
  }
  .bd_d8{
    border: 1px solid #d8d8d8;
  }
  .clear{
    clear: both;
  }
</style>
