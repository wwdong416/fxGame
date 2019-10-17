<template>
  <div>
    <el-container class="">
      <el-main class="">
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
          <div class="trend_map ">
            <div class="bgc1" style="padding: 10px">欧元美元趋势图</div>
          </div>
        </div>
        <div class="mt20" style="text-align: right" @click="getGameResult()">查看本局结果>>>>>>></div>
        <div class="gameResult" v-show="gameResult" >
          <div class="gameResult" @click="closeResult()"></div>
            <div class="gameResult_show">
              <img src="../assets/img/close.png" class="g_close"  @click="closeResult()" alt="">
              <div class="t_a_c g_show_header">
                <div class="g_show_header_t">19:05EURUED市场报价</div>
                <div class="g_show_header_b">1.22835</div>
              </div>
              <div>
                <div class="fl w21 t_a_c">
                  <div class="g_show_img_win"></div>
                  <div class="f-s-18 mt20">xxxxx</div>
                  <div class="f-s-18 f-w-b mt20">竞猜结果 1.22835</div>
                  <div class="f-s-18 bgc2  g_show_btn">恭喜您成功进入下一轮</div>
                </div>
               <div class="g_show_line fl"></div>
                <div class="fr w21 t_a_c">
                  <div class="g_show_img_lose"></div>
                  <div class="f-s-18 mt20">xxxxx</div>
                  <div class="f-s-18 f-w-b mt20">竞猜结果 1.22835</div>
                  <div class="f-s-18 bgc3  g_show_btn">您与成功只有一步之遥<br>下一次继续努力</div>
                </div>
              </div>
            </div>
          </div>
        <div class="mt20" style="text-align: right" @click="getRankList()">查看排行>>>>>>></div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'PK_show',
  data () {
    return {
      gameResult: false
    }
  },
  methods: {
    getGameResult () {
      this.gameResult = true
    },
    closeResult () {
      this.gameResult = false
    },
    getRankList () {
      const that = this
      that.$router.push({
        path: '/rankList',
        name: 'rankList'
      })
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
    border: 1px solid #d8d8d8;
    height: 600px;
    font-weight: bold;
  }
  .gameResult{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(90, 90, 90, 0.45);
  }
  .gameResult_show{
    width: 1240px;
    height: 640px;
    border-radius: 30px;
    background-color: #fff;
    position: absolute;
    margin: 0 auto;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
  .g_show_header{
    height: 200px;
    background:url(../assets/img/pk_result_title.png) no-repeat center;
  }
  .g_show_img_win{
    height: 200px;
    background:url(../assets/img/pk_result_win.png) no-repeat center;
  }
  .g_show_img_lose{
    height: 200px;
    background:url(../assets/img/pk_result_lose.png) no-repeat center bottom;
  }
  .g_show_line{
    width: 1px;
    height: 440px;
    border-style: dashed;
    padding-left: 12px;
    border-right: 1px solid #d8d8d8;
    /*background-color: ;*/
     }
  .g_close{
    position: absolute;
    right: -15px;
    top: -15px;
  }
  .g_show_header_t{
    color: #fff;
    font-size: 25px;
    padding-top: 60px;
  }
  .g_show_header_b{
    color: #fff;
    font-size: 60px;
    padding-top: 10px;
  }
  .g_show_btn{
    display: flex;
    align-items: center;
    justify-content: center;
    /*text-align: justify;*/
    width: 310px;
    height: 90px;
    margin: 30px auto;
    color: #fff;
    padding: 0 20px;
    text-align: center;
  }
  .bgc1{
    background-color: #f9be02;
  }
  .bgc2{
    background-color: #e55730;
  }
  .bgc3{
    background-color: #a7a7a7;
  }
  .color-f{
    color: #fff;
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
    width: 49%;
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
  .mt40{
    margin-top: 40px;
  }
  .bd_d8{
    border: 1px solid #d8d8d8;
  }
  .clear{
    clear: both;
  }
  .f-s-18{
    font-size: 18px;
  }
  .f-w-b{
    font-weight: bold;
  }
</style>
