<template>
  <div>
    user
  </div>
</template>

<script>
export default {
  name: 'user',
  created () {
    this.$emit('openNew', 3)
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style scoped>

</style>
