<template>
<div class="container">
  <el-button size="small" @click="runPromise">Promise</el-button>
  <el-button size="small" @click="runAsync">Async</el-button>
</div>
</template>

<script>
export default {
  name: 'Asynchronous',
  data () {
    return {
    }
  },
  methods: {
    getPromise (name) {
      return new Promise(function (resolve, reject) {
        setTimeout(() => {
          let rand = Math.random()
          if (rand > 0.5) {
            resolve(name + ' resolve start')
          } else {
            reject(new Error(name + ' reject start'))
          }
        }, 1000)
      })
    },
    runPromise () {
      let promise = this.getPromise('promise')
      promise.then((info) => {
        console.log(info)
        return new Promise((resolve, reject) => {
          resolve(info)
        })
      }, (err) => {
        console.log(err)
        return new Promise((resolve, reject) => {
          resolve(err)
        })
      }).then(info => {
        console.log(info + ' again')
      })
    },
    runAsync () {
      this.doAsync().then((info) => {
        console.log(info)
      }, (err) => {
        console.log(err)
      })
    },
    async doAsync () {
      const n = await this.getPromise('async 1')
      const m = await this.getPromise('async 2')
      console.log('hahha: ' + m)
      return [n, m]
    }
  }
}
</script>

<style scoped lang="less">
  .container{
    /* display: flex; */
    /* width: 100%; */
  }
</style>
