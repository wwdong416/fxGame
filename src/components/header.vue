<template>
  <div>
    <div id="nav">
      <div style="float: left;width: 40%;text-align: center">
        <img src="../assets/img/logo.png" alt="">
      </div>
      <div style="float: right;width:60%;text-align: right">
        <div class="nav-item" v-for="(item,index) in arr" :key="index" @click="openNew(index)">
          <router-link :to='item.url'>
            <div class="nav-title" :class="{active:index===page}">
              {{ item.title }}
            </div>
          </router-link>
        </div>
        <div class="nav-item">
          <!--<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal"  text-color="#000">-->
          <!--<el-submenu index="2">-->
          <!--<template slot="title"><div style="float: left">-->
          <!--<img :src="circleUrl" style="width: 40px;height: 40px; padding: 10px" alt="">-->
          <!--</div>-->
          <!--<div style="float: left">{{userName}}</div></template>-->
          <!--<el-menu-item index="2-4-1">个人资料</el-menu-item>-->
          <!--<el-menu-item index="2-4-2">参加记录</el-menu-item>-->
          <!--<el-menu-item index="2-4-3">退出登录</el-menu-item>-->
          <!--</el-submenu>-->
          <!--</el-menu>-->
          <div @mouseover="openMy()" @mouseout="closeMy()">
            <div class="nav-item">
            <div style="float: left;width: 60px;height: 60px;">
              <img :src="circleUrl" style="width: 40px;height: 40px; padding: 10px" alt="">
            </div>
            <div style="float: left;padding-right: 40px">{{userName}}</div>
              <div class="clear"></div>
            </div>
            <div class="menuMy" v-show="menu_my">
              <div class="menuMy_l">个人资料</div>
              <div class="menuMy_l">参加记录</div>
              <div class="menuMy_l">退出登录</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="main_img" @click="openPK()">
      <!--<img style="width: 100%" src="../assets/img/main.jpg" alt="">-->
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tabbar',
  props: ['page'],
  data () {
    return {
      menu_my: false,
      activeIndex: '1',
      circleUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
      userName: '用户昵称',
      arr: [
        {
          title: '活动说明',
          url: '/gameExplain'
        },
        {
          title: '创建账户',
          url: '/register'
        },
        {
          title: '登录MyFXBV',
          url: '/login'
        }
      ]
    }
  },
  methods: {
    openNew (i) {
      this.page = i
      // this.$router.push(url)
      // this.$emit('openNew', i)
    },
    openPK () {
      const that = this
      that.$router.push({
        path: '/PK_begin',
        name: 'PK_begin'
      })
    },
    openMy () {
      this.menu_my = true
    },
    closeMy () {
      this.menu_my = false
    }
  }
}
</script>

<style scoped>
  #nav {
    width: 100%;
    height: 60px;
    min-width: 1200px;
    background-color: #fff;
    /*overflow: hidden;*/
  }

  #nav .nav-item {
    float: left;
    min-width: 120px;
    padding-left: 20px;
    height: 60px;
    line-height: 60px;
    text-align: center;
  }

  #nav .nav-img img {
    margin-top: 5%;
    width: 40%;
  }

  #nav .nav-title {
    font-size: 16px;
    color: black;
  }

  .active {
    background-color: #f9bd00;
  }

  .main_img {
    background-color: #e2dad7;
    background: url(../assets/img/main.jpg) no-repeat;
    background-size: 100% auto;
  }

  .main_img:before {
    content: "";
    display: block;
    padding-top: 38%;
  }
  .menuMy{
    background-color: #fff;
    color: #888888;
  }
  .menuMy_l:hover{
    color: #000;
  }
  .clear{
    clear: both;
  }
</style>
