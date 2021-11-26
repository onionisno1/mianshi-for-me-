<template>
  <div class="container-outer">
    <div class="container-inner-1 inner">
      <div class="left">left</div>
      <div class="content">content</div>
    </div>
    <div class="container-inner-2 inner">
      <div class="left">left</div>
      <div class="content">content</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BuJu',
  data () {
    return {}
  }
}
</script>

<style scoped lang="less">
  .container-outer{
    flex: 1;
    // position: relative;
    width: 100%;
    height: 100%;
    .inner{
      width: 100%;
      height: 400px;
    }
    .container-inner-1{
      .left{
        float: left;
        width: 200px;
        height: 100%;
        background: red;
      }
      .content{
        height: 100%;
        overflow: hidden;
        background: blue;
      }
    }
    .container-inner-2{
      margin-top: 50px;
      .left{
        float: left;
        width: 200px;
        height: 100%;
        background: red;
      }
      .content{
        height: 100%;
        margin-left: 200px;
        background: blue;
      }
    }
  }
</style>
