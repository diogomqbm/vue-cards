import { Module } from 'vuex';
import * as actions from './actions';
import { State } from './types';
import mutations from './mutations';

const viewDeckModule: Module<State, {}> = {
  state: {
    isLoading: false,
    error: null,
    rotationPile: "",
    cardsPile: []
  },
  actions: actions,
  mutations: mutations,
  namespaced: true
};

export default viewDeckModule;