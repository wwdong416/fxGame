<template>
  <div id="app">
    <!--<Myheader></Myheader>-->
    <router-view></router-view>
  </div>
</template>

<script>
import Myheader from './components/header'

export default {
  data () {
    return {
    }
  },
  components: {
    Myheader
  },
  methods: {
  }
}
</script>

<style>
  * {
    border: 0;
    margin: 0;
  }

  body {
    font-size: 16px;
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    background-color: #e2dad7;
    min-width: 1100px;
  }

  a {
    display: block;
    text-decoration: none;
  }
</style>
