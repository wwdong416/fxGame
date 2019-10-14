<template>
  <div id="app">
    <Myheader :page="idx" @openNew="openNew"></Myheader>
    <router-view class="bg"></router-view>
  </div>
</template>

<script>
import Myheader from './components/header'

export default {
  data () {
    return {
      idx: 0
    }
  },
  components: {
    Myheader
  },
  methods: {
    openNew (i) {
      this.idx = i
    }
  }
}
</script>

<style>
  * {
    border: 0;
    margin: 0;
  }

  body {
    font-size: 14px;
    font-family: Arial, serif, Helvetica, sans-serif, Times, '微软雅黑 Light', '宋体';
  }

  a {
    display: block;
    text-decoration: none;
  }
  .bg{
    background-color: #e2dad7;
  }
</style>
