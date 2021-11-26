<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <div class="left-nav">
      <div class="item"  v-for="info in leftNavInfos" :key="info.text" @click="jump(info.path)">
        {{info.text}}
      </div>
    </div>
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      leftNavInfos: [
        {
          path: 'ImageShow',
          text: '图片显示'
        },
        {
          path: 'InputShow',
          text: 'input显示'
        },
        {
          path: 'Asynchronous',
          text: '异步请求演示'
        },
        {
          path: 'VuexTest',
          text: 'VuexTest'
        },
        {
          path: 'BuJu',
          text: '左右布局'
        },
        {
          path: 'LazyLoad',
          text: '懒加载'
        },
        {
          path: 'ArrayWathch',
          text: '观察数组'
        }
      ]
    }
  },
  methods: {
    jump (path) {
      if (path !== this.$route.name) {
        this.$router.push({name: path})
      }
    }
  }
}
</script>

<style lang='less'>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  display: flex;
  .left-nav{
    width: 100px;
    height: 100vh;
    background: gainsboro;
    border-right: #eee solid 1px;
    padding-top: 20px;
    .item{
      height: 50px;
      line-height: 50px;
      background: rgb(134, 160, 93);
      border-top: gold solid 1px;
      text-align: center;
      cursor: pointer;
      &:last-child{
        border-bottom: gold solid 1px;
      }
    }
  }
}
</style>
