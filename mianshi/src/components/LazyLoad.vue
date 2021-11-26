<template>
<div class="container">
  <div class="part-1 box"></div>
  <div class="part-2 box" ref="part2"></div>
  <div class="part-3 box" ref="part3"></div>
  <div class="part-4 box"></div>
  <div class="part-5 box"></div>
</div>
</template>

<script>
export default {
  name: 'LazyLoad',
  data () {
    return {
    }
  },
  mounted () {
    let observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry, index) => {
        if (entry.intersectionRatio > 0) {
          console.log('observe: ' + index)
        }
      })
    })
    observer.observe(this.$refs.part2)
    observer.observe(this.$refs.part3)
  },
  methods: {
  }
}
</script>

<style lang='less' scoped>
  .container{
    flex: 1;
    width: 100%;
    .box{
      height: 800px;
    }
    .part-1{
      background: red;
    }
    .part-2{
      background: blue;
    }
    .part-3{
      background: yellow;
    }
    .part-4{
      background: gray;
    }
    .part-5{
      background: green;
    }
  }
</style>
