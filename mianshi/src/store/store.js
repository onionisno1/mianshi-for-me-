import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 1
  },
  mutations: {
    addCount (state, n) {
      if (n) {
        state.count += n
      } else {
        state.count++
      }
    },
    subtractCount (state, n) {
      if (n) {
        state.count -= n
      } else {
        state.count--
      }
    },
    exceptCount (state, n) {
      n = n === undefined ? 1 : n
      state.count /= n
    }
  },
  actions: {
    rideCount ({commit, state}, n) {
      n = n === undefined ? 1 : n
      state.count *= n
    },
    exceptCount (commit, n) {
      setTimeout(() => {
        commit.commit('exceptCount', n)
      }, 500)
    }
  }
})

export default store
