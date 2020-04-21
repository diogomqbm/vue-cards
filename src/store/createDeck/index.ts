import { Module } from 'vuex';
import * as actions from './actions';
import { State } from './types';
import mutations from './mutations';

const createDeckModule: Module<State, {}> = {
  state: {
    isLoading: false,
    error: null,
    deckId: ''
  },
  actions: actions,
  mutations: mutations,
  namespaced: true
};

export default createDeckModule;