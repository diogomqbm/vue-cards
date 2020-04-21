import * as types from './types';
import { MutationTree } from 'vuex';

const mutations: MutationTree<types.State> = {
  [types.CREATE_DECK](state) {
    state.isLoading = true;
  },
  [types.CREATE_DECK_SUCCESS](state, data) {
    state.isLoading = false;
    state.deckId = data;
  },
  [types.CREATE_DECK_ERROR](state, error) {
    state.isLoading = false;
    state.error = error;
  }
};

export default mutations;