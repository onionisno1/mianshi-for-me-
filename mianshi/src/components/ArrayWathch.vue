<template>
<div class="container">
  <div>数组数据：{{arrStr}}</div>
  <el-button @click="pushData">push</el-button>
  <el-button @click="changeData">change</el-button>
</div>
</template>

<script>
export default {
  name: 'ArrayWathch',
  data () {
    return {
      arr: [1, 2, 3],
      arrStr: ''
    }
  },
  watch: {
    'arr' (oldVal, newVal) {
      this.arrStr = JSON.stringify(newVal)
    }
    // arr: {
    //   handler (oldVal, newVal) {
    //     this.arrStr = JSON.stringify(newVal)
    //   },
    //   deep: true
    // }
  },
  mounted () {
  },
  methods: {
    pushData () {
      this.arr.push(parseInt(Math.random() * 10))
    },
    changeData () {
      this.arr[this.arr.length - 1] = 100
      this.$set(this.arr, this.arr.length - 1, 100)
    }
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
