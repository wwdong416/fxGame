<template>
  <div id="app">
    <Myheader :page="idx" @openNew="openNew"></Myheader>
    <router-view></router-view>
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

</style>
