import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    id: JSON.parse(sessionStorage.getItem('userid')),
    account: JSON.parse(sessionStorage.getItem('account')),
    nickname: JSON.parse(sessionStorage.getItem('nickname'))
  },
  getters: {
    id: state => state.id
  },
  mutations: {
    setId (state, id) {
      state.id = id
      sessionStorage.setItem('userid', JSON.stringify(id))
    },
    setUserMsg (state, obj) {
      state.id = obj.id
      state.account = obj.account
      state.nickname = obj.nickname
      sessionStorage.setItem('userid', JSON.stringify(obj.id))
      sessionStorage.setItem('account', JSON.stringify(obj.account))
      sessionStorage.setItem('nickname', JSON.stringify(obj.nickname))
    },
    print (state) {
      console.log(state.id)
      console.log(state.account)
    }

  },
  actions: {
    getId () {
      return this.state.id
    }
  }
})
