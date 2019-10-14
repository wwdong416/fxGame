<template>

  <div id="nav">
    <div  v-for="(item,index) in arr" :key="index" @click="openNew(index)">
      <router-link :to='item.url' class="">
        <el-menu :default-active="activeIndex" :class="{active:index===page}" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-menu-item index="4"> {{ item.title }}</el-menu-item>
        </el-menu>
      </router-link>
    </div>
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
          url: '/mymsg'
        }
      ],
      activeIndex: '1'
    }
  },
  methods: {
    openNew (i) {
      this.$emit('openNew', i)
    },
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style scoped>

  .active {
    background-color: #11b9ff;
  }
</style>
