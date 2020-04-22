import Vue from 'vue'
import Vuex from 'vuex'
import createDeckModule from './createDeck'
import viewDeckModule from './viewDeck'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    createDeck: createDeckModule,
    viewDeck: viewDeckModule,
  }
})
