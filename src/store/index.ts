import Vue from 'vue'
import Vuex from 'vuex'
import createDeckModule from './createDeck'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    createDeck: createDeckModule
  }
})
