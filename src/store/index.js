import Vue from 'vue'
import Vuex from 'vuex'
import Persistedstate from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      name: '',
      id: ''
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
  plugins: [Persistedstate()]
})
