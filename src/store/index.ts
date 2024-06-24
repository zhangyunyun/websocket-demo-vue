import Vue from 'vue'
import Vuex from 'vuex'

import wsState from './modules/wsState'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    wsState
  }
});
