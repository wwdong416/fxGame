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
    </div>
  </div>
  <img style="width: 100%" src="../assets/img/main.jpg" alt="">
</div>
</template>

<script>
export default {
  name: 'Tabbar',
  props: ['page'],
  data () {
    return {
      arr: [
        {
          title: '创建账户',
          url: '/user_info'
        },
        {
          title: '在线客服',
          url: '/service'
        },
        {
          title: '登录MyFXBV',
          url: '/login'
        },
        {
          title: '我的',
          url: '/myMsg'
        }
      ]
    }
  },
  methods: {
    openNew (i) {
      this.$emit('openNew', i)
    }
  }
}
</script>

<style scoped>
  #nav {
    width: 100%;
    height: 60px;
    background-color: #fff;
  }

  #nav .nav-item {
    float: left;
    min-width: 120px;
    padding-left: 20px;
    height: 60px;
    line-height: 60px;
    text-align: center;
  }
  #nav .nav-img img{
    margin-top: 5%;
    width: 40%;
  }
  #nav .nav-title{
    font-size: 16px;
    color: black;
  }
  .active {
    background-color: #f9bd00;
  }
</style>
