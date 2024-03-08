import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    id: 2
  },
  mutations: {
    setId (state, id) {
      state.id = id
    }
  },
  actions: {
    getId () {
      return this.state.id
    }
  }
})
