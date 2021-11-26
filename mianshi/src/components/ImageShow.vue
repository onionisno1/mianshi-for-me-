<template>
<div class="container">
  <div class="move-block">move</div>
  <img :src="imageSrc" alt="">
  <el-button class="jump-link" @click="jumpToInputShow">跳转到input</el-button>
  <el-button class="jump-link" @click="jumpToAsync">跳转到async</el-button>
</div>
</template>

<script>
export default {
  name: 'ImageShow',
  data () {
    return {
      imageSrc: require('../assets/logo.png')
    }
  },
  methods: {
    jumpToInputShow () {
      this.$router.push({name: 'InputShow'})
    },
    jumpToAsync () {
      this.$router.push({name: 'Asynchronous'})
    }
  }
}
</script>

<style lang='less' scoped>
  .container{
    position: relative;
    margin: 0 auto;
    .move-block{
      position: absolute;
      left: 0;
      top: 0;
      background: red;
      transition: all 1s linear 0.1s;
    }
    .move-block:hover{
      left: 100%;
      top: 100%;
    }
    .jump-link{
      color: aqua;
    }
  }
</style>
