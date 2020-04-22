import { Action } from 'vuex';
import * as types from './types';
import client from '@/api/client';

export const fetchPiles: Action<types.State, {}> = ({ commit }) => commit(types.FETCH_PILES);
export const fetchPilesSuccess: Action<types.State, {}> = ({ commit }, data) => commit(types.FETCH_PILES_SUCCESS, data);
export const fetchPilesError: Action<types.State, {}> = ({ commit }, error) => commit(types.FETCH_PILES_SUCCESS, error);

const getCardsFromPile = (deckId: string): Promise<string[]> => {
  return client
    .get(`${deckId}/pile/cards/list`)
    .then(({ data }) => data.piles.cards.cards.map((c: types.ServerCard) => c.code));
};

export const requestPiles: Action<types.State, {}> = async ({ dispatch }, deckId: string) => {
  dispatch('fetchPiles');

  try {
    const allCards = await getCardsFromPile(deckId);
    const cards = allCards.slice(0, allCards.length - 1);
    const rotationCard = allCards;
    dispatch('fetchPilesSuccess', { cards, rotationCard: rotationCard[0] })
  } catch(e) {
    dispatch('fetchPilesError', e);
  }
};