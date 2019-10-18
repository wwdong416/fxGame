<template>
<div>
  <el-container class="user_info">
      <div class="user_info_content">
        <div class="u_c"><b>活动时间：</b>周一至周五北京时间19:00-20:00</div>
        <div class="u_c"><b>活动内容：</b>竞猜 EURUSD K线5分钟趋势，最接近真实价格者获胜</div>
        <div class="u_c"><b>参赛名额：</b>32位/每场，场次不限</div>
        <div class="u_c"><b>报名要求：</b>$100赛区／$500赛区／$1000赛区</div>
      </div>
      <div class="user_info_content">
        <div class="mt20"><b>参赛轮次:共4轮</b></div>
        <div class="mt20">
          <div class="u_r_button">32进16强</div><div class="u_r_l"></div>
          <div class="u_r_button">16进8强</div><div class="u_r_l"></div>
          <div class="u_r_button">8进4强</div><div class="u_r_l"></div>
          <div class="u_r_button">冠军赛</div>
        </div>
      </div>
  </el-container>
  <el-container class="user_info t_a_c">
    <el-header class="mt40">
      <h3><b>活动奖励1：竞猜有奖</b></h3>
      <img src="../assets/img/line.png" alt="">
    </el-header>
    <el-main>
      <div class="flexbox" >
        <div class="fl sq" :class="{activeTitle:index===current}" v-for="(item,index) in zone" :key="index" @click="getBonus(index)">{{item}}</div>
        <div class="clear"></div>
      </div>
      <div class="r_table mt40" >
        <div class="r_table_ul" v-for="(item,index) in zone_list"  :key="index">
          <div class="fl r_table_l">{{item.ranking}}</div>
          <div class="fl r_table_r">{{item.price}}</div>
          <div class="clear"></div>
        </div>
        <!--<div class="r_table_ul">-->
          <!--<div  class="fl r_table_l">第一名</div>-->
          <!--<div  class="fl r_table_r">$600</div>-->
          <!--<div class="clear"></div>-->
        <!--</div>-->
        <!--<div class="r_table_ul">-->
          <!--<div  class="fl r_table_l">第二名</div>-->
          <!--<div  class="fl r_table_r">$400</div>-->
          <!--<div class="clear"></div>-->
        <!--</div>-->
        <!--<div class="r_table_ul">-->
          <!--<div  class="fl r_table_l">第三名、第四名</div>-->
          <!--<div  class="fl r_table_r">$250</div>-->
          <!--<div class="clear"></div>-->
        <!--</div>-->
        <!--<div class="r_table_ul">-->
          <!--<div  class="fl r_table_l">第五名至第八名</div>-->
          <!--<div  class="fl r_table_r">$200</div>-->
          <!--<div class="clear"></div>-->
        <!--</div>-->
        <!--<div class="r_table_ul">-->
          <!--<div  class="fl r_table_l">幸运抽奖1名</div>-->
          <!--<div  class="fl r_table_r">$120</div>-->
          <!--<div class="clear"></div>-->
        <!--</div>-->
      </div>
    </el-main>
  </el-container>
  <el-container class="user_info t_a_c">
    <el-header class="mt40">
      <h3><b>活动奖励2：赠金活动</b></h3>
      <img src="../assets/img/line.png" alt="">
    </el-header>
    <el-main>
      <div class="fl w21">
        <div class="r_table mt40" >
          <div class="r_table_ul">
            <div class="fl r_table_4">名次</div>
            <div class="fl r_table_3">入金赠金</div>
            <div class="fl r_table_3">完成手数</div>
            <div class="clear"></div>
          </div>
          <div class="r_table_ul">
            <div  class="fl r_table_4">第一名</div>
            <div  class="fl r_table_3">100%</div>
            <div  class="fl r_table_3">1/4</div>
            <div class="clear"></div>
          </div>
          <div class="r_table_ul">
            <div  class="fl r_table_4">第二名</div>
            <div  class="fl r_table_3">80%</div>
            <div  class="fl r_table_3 ">1/3.5</div>
            <div class="clear"></div>
          </div>
          <div class="r_table_ul">
            <div  class="fl r_table_4">第三名、第四名</div>
            <div  class="fl r_table_3">60%</div>
            <div  class="fl r_table_3">1/3</div>
            <div class="clear"></div>
          </div>
          <div class="r_table_ul">
            <div  class="fl r_table_4">第五名至第八名</div>
            <div  class="fl r_table_3">40%</div>
            <div  class="fl r_table_3">1/2.5</div>
            <div class="clear"></div>
          </div>
          <div class="r_table_ul">
            <div  class="fl r_table_4">剩余参赛选手</div>
            <div  class="fl r_table_3">20%</div>
            <div  class="fl r_table_3">1/2</div>
            <div class="clear"></div>
          </div>
        </div>
      </div>
      <div class="fl w21 mt40" v-html="price_example" style="text-align: left;line-height: 1.8">
      </div>
    </el-main>
  </el-container>
  <el-container class="user_info">
    <el-main class="r_example" v-html="price_mode">
    </el-main>
  </el-container>
  <el-container class="user_info">
    <el-header class="mt40 t_a_c">
      <h3><b>活动说明</b></h3>
      <img src="../assets/img/line.png" alt="">
    </el-header>
    <el-main class="r_example" v-html="price_content">
    </el-main>
  </el-container>
    <div style="background-color:#414141;">
      <div class="footer_warn" v-html="web_warn">
     </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'gameExplain',
  created () {
    this.$emit('openNew', 0)
  },
  data () {
    return {
      current: 0,
      zone: [
        '$100赛区', '$500赛区', '$1000赛区'
      ],
      zone_list: [
        {
          ranking: '名次',
          price: '奖金'
        },
        {
          ranking: '第一名',
          price: '$600'
        },
        {
          ranking: '第二名',
          price: '$400'
        },
        {
          ranking: '第三名、第四名',
          price: '$250'
        },
        {
          ranking: '第五名至第四名',
          price: '$200'
        },
        {
          ranking: '幸运抽奖1名',
          price: '$120'
        }
      ],
      price_example: '   获奖举例：<br>\n' +
        '        假设某位客户初始入金$100报名参赛，参加竞猜比赛获得第一名，则将获得奖金$600。该客户将奖金中的$300转到该客户的MT4账户，并按照规定在一个月内完成相对应的手数（200*1/4=75手），即可获得相对应的100%的赠金$300，最高可获得赠金$600。<br>\n' +
        '        那么，该客户参加比赛后获得：<br>\n' +
        '        奖金$600+赠金$300（100%）=$900<br>\n' +
        '        奖金$600+赠金$600（100%）=最高可获得$1200',
      price_mode: '   <b>奖金领取方式：</b><br>\n' +
        '      1、比赛结束后，奖金在5个工作日内返到您的电子钱包。直接转入MT4交易，赢取更多赠金。<br>\n' +
        '      2、比赛结束后，奖金在5个工作日内返到您的电子钱包，可提现。<br>\n' +
        '      <b> 报名方式：</b><br>\n' +
        '      1.点击FXBV官网进入活动页面填写资料报名<br>\n' +
        '      2.请联系您的客户经理直接报名<br>\n' +
        '      3.发送邮件至cs@fxbv.com报名',
      price_content: '      <b>活动内容：</b><br>\n' +
        '      竞猜EURUSD K线趋势，预测5分钟后EURUSD卖价，最接近真实价格的参赛者获胜<br>\n' +
        '      <b>竞猜规则：</b><br>\n' +
        '      1、即日起开始报名，根据入金到账时间先后顺序确定报名排序。<br>\n' +
        '      2、竞猜时间在北京时间19:00-20:00（竞猜时间以邮件和客户经理通知为准），参赛选手请提前10分钟入场准备；<br>\n' +
        '      3、通过FXBV官网活动入口进入竞猜活动页面，点击“开始比赛”后进入竞猜模式；<br>\n' +
        '      4、根据活动页面提示，在规定时间内输入您的预测价格，点击“提交”确认。<br>\n' +
        '      6、系统实时公布结果，预测价格更接近真实价格参赛者获胜，进入下一轮PK。每一场比赛4轮竞猜，直到冠军获胜。<br>\n' +
        '      <b>晋级机制：</b><br>\n' +
        '      1、每场比赛32位参赛者，可重复参与报名；<br>\n' +
        '      2、19:00比赛开始后，参赛者请在30秒内输入预测价格，并点击提交确认。提交后不可修改答案。19:05系统公布EURUSD实时价格，前16名更接近真实价格的参赛者进入下一轮PK；其余参赛者竞猜结束。<br>\n' +
        '      4、19:10进入比赛第二轮，参赛者请在30秒内输入预测价格，并点击提交确认。提交后不可修改答案。19:15系统公布EURUSD实时价格，前8名更接近真实价格的参赛者进入下一轮PK；其余参赛者竞猜结束。<br>\n' +
        '      5、19:15-19:20系统随机抽取一名幸运大奖<br>\n' +
        '      6、19:20 比赛进入第三轮，参赛者请在30秒内输入预测价格，并点击提交确认。提交后不可修改答案。19:25系统公布EURUSD实时价格，前4名更接近真实价格的参赛者进入下一轮PK；其余参赛者竞猜结束。<br>\n' +
        '      7、19:30 比赛进入第四轮，参赛者请在30秒内输入预测价格，并点击提交确认。提交后不可修改答案。19:35系统公布EURUSD实时价格，预测价格最接近真实价格的参赛者赢取本次大赛冠军。<br>\n' +
        '      8、奖励金可全部或部分转入您的MT4账户，赢取更多赠金。<br>\n' +
        '      <br>\n' +
        '      <b>本活动最终解释权归FXBV官方所有</b>',
      web_warn: ' 风险警示：<br>\n' +
        '      保证金外汇、差价合约(CFD)交易等金融衍生品投资具有高风险，可能导致您损失本金。因此，您所承担的亏损风险不应超过您的承受能力范围，请确保知悉其中所涉的一切风险。保证金外汇和杠杠化产品并不适合所有投资者，在交易前，请谨慎考虑您的经验水平、投资目标以及财政状况等，如有必要请寻求独立财务建议。客户有责任确保他/她所居住国家法律要求允许其使用FXBV品牌提供的服务。点击此处阅览完整的风险披露。\n'
    }
  },
  methods: {
    getBonus (id) {
      this.current = id
      if (id === 0) {
        this.zone_list = [
          {
            ranking: '名次',
            price: '奖金'
          }, {
            ranking: '第一名',
            price: '$600'
          }, {
            ranking: '第二名',
            price: '$400'
          }, {
            ranking: '第三名、第四名',
            price: '$250'
          }, {
            ranking: '第五名至第四名',
            price: '$200'
          }, {
            ranking: '幸运抽奖1名',
            price: '$120'
          }
        ]
      } else if (id === 1) {
        this.zone_list = [
          {
            ranking: '名次',
            price: '奖金'
          }, {
            ranking: '第一名',
            price: '$3000'
          }, {
            ranking: '第二名',
            price: '$2000'
          }, {
            ranking: '第三名、第四名',
            price: '$1250'
          }, {
            ranking: '第五名至第四名',
            price: '$1000'
          },
          {
            ranking: '幸运抽奖1名',
            price: '$600'
          }
        ]
      } else if (id === 2) {
        this.zone_list = [
          {
            ranking: '名次',
            price: '奖金'
          }, {
            ranking: '第一名',
            price: '$6000'
          }, {
            ranking: '第二名',
            price: '$4000'
          }, {
            ranking: '第三名、第四名',
            price: '$2500'
          }, {
            ranking: '第五名至第四名',
            price: '$2000'
          }, {
            ranking: '幸运抽奖1名',
            price: '$1200'
          }
        ]
      }
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
    border-radius: 30px;
  }
  .user_info_content{
    width: 50%;
    padding: 50px 0 50px 30px;
    line-height: 2.5;
  }
  .u_c{
    border-right: 1px solid gainsboro;
  }
  .u_r_button{
    background-color: #f95f02;
    color: #fff;
    width: 100px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    border-radius: 8px;
    float: left;
  }
  .u_r_l{
    background-color: #f95f02;
    height: 1px;
    width: 20px;
    margin-top: 18px;
    text-align: center;
    float: left;
    border: 1px solid #f95f02;
  }
  .sq{
    margin: 0 20px;
    cursor:pointer
  }
  .r_table{
    margin: 0 auto;
    width: 350px;
    line-height: 2;
    padding-bottom: 70px;
  }
  .r_table_ul{
    background-color: #e2dad7;
    margin-top: 10px;
  }
  .r_table_l{
    width: 60%;
    border-right: 2px solid #fff;
  }
  .r_table_r{
    width: 39%;
   }
  .r_table_3{
    width: 29%;
    border-left: 2px solid #fff;
  }
  .r_table_4{
    width: 40%;
  }
  .r_example{
   padding:60px 80px;
    line-height: 2.2;
  }
  .mt20{
    margin-top: 20px;
  }
  .t_a_c{
    text-align: center;
  }
  .mt40{
    margin-top: 40px;
  }
  .fl{
    float: left;
  }
  .w21{
    width: 50%;
  }
  .footer_warn {
    margin: 0 auto;
    width: 1100px;
    color: #fff;
    line-height: 2.5;
    padding: 20px 0;
  }
  .clear{
    clear: both;
  }

  .flexbox {
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    -webkit-justify-content: center;
    justify-content: center;
  }
  .activeTitle{
    color: #f95f02;
    font-weight: bold;
  }
</style>
