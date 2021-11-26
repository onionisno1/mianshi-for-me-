<template>
  <div class="container">
    <div class="box">
      <div>store中count的值：{{this.$store.state.count}}</div>
      <el-button @click="add">+1</el-button>
      <el-button @click="subtract">-1</el-button>
      <el-button @click="ride">x2</el-button>
      <el-button @click="except">/2</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VuexTest',
  data () {
    return {}
  },
  computed: {
    count () {
      return this.$store.state.count
    }
  },
  created () {
  },
  methods: {
    add () {
      this.$store.commit('addCount')
    },
    subtract () {
      this.$store.commit('subtractCount')
    },
    ride () {
      this.$store.dispatch('rideCount', 2)
    },
    except () {
      this.$store.dispatch('exceptCount', 2)
    }
  }
}
</script>

<style scoped lang="less">
  .container{
    flex: 1;
    position: relative;
    width: 100%;
    height: 100%;
    .box{
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }
</style>
