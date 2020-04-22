import * as types from './types';
import { MutationTree } from 'vuex';

const mutations: MutationTree<types.State> = {
  [types.FETCH_PILES](state) {
    state.isLoading = true;
  },
  [types.FETCH_PILES_SUCCESS](state, data) {
    state.isLoading = false;
    state.rotationPile = data.rotationCard;
    state.cardsPile = data.cards;
  },
  [types.FETCH_PILES_ERROR](state, error) {
    state.isLoading = false;
    state.error = error;
  }
};

export default mutations;