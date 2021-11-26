<template>
  <div class="container">
    <div class="container-box-1">
      <div class="container-box-2">
        <div class="show-name-block">name:</div>
        <el-input v-model="name" size="mini"></el-input>
      </div>
      <!-- <input v-model="name"> -->
    </div>
    <div class="jump-btn">
      <el-button class="jump-link" @click="jumpToImgaeShow">跳转到image</el-button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'InputShow',
  data () {
    return {
      name: ''
    }
  },
  methods: {
    jumpToImgaeShow () {
      this.$router.push({name: 'ImageShow'})
    }
  }
}
</script>

<style scoped lang="less">
  .container{
    width: 100%;
    height: 100%;
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 40px;
    .container-box-1{
      .jump-link{
        margin: 0 auto;
      }
      .container-box-2{
        display: flex;
        .show-name-block{
          margin-right: 30px;
        }
      }
    }
    .jump-btn{
      margin-top: 20px;
    }
  }
</style>
