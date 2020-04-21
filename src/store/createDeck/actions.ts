import { Action } from 'vuex';
import * as types from './types';
import client from '@/api/client';

export const createDeck: Action<types.State, {}> = ({ commit }) => commit(types.CREATE_DECK);
export const createDeckSuccess: Action<types.State, {}> = ({ commit }, data: string) => commit(types.CREATE_DECK_SUCCESS, data);
export const createDeckError: Action<types.State, {}> = ({ commit}, error: string) => commit(types.CREATE_DECK_ERROR, error);

export const fetchDeck: Action<types.State, {}> = ({ dispatch }, cards: string[]) => {
  dispatch('createDeck');

  return client.get(`/new/shuffle/?cards=${cards.join()}`)
          .then(res => dispatch('createDeckSuccess', res.data.deck_id))
          .catch(error => dispatch('createDeckError', error))
  
};