import { Action } from 'vuex';
import * as types from './types';
import client from '@/api/client';

export const fetchPiles: Action<types.State, {}> = ({ commit }) => commit(types.FETCH_PILES);
export const fetchPilesSuccess: Action<types.State, {}> = ({ commit }, data) => commit(types.FETCH_PILES_SUCCESS, data);
export const fetchPilesError: Action<types.State, {}> = ({ commit }, error) => commit(types.FETCH_PILES_SUCCESS, error);

const getCardsFromPile = (deckId: string, pileName: string): Promise<string[]> => {
  return client
    .get(`${deckId}/pile/${pileName}/list`)
    .then(({ data }) => data.piles[pileName].cards.map((c: types.ServerCard) => c.code));
};

export const requestPiles: Action<types.State, {}> = async ({ dispatch }, deckId: string) => {
  dispatch('fetchPiles');

  try {
    const cards = await getCardsFromPile(deckId, 'cards');
    const rotationCard = await getCardsFromPile(deckId, 'rotation');
    dispatch('fetchPilesSuccess', { cards, rotationCard: rotationCard[0] })
  } catch(e) {
    dispatch('fetchPilesError', e);
  }
};