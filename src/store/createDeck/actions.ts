import { Action } from 'vuex';
import * as types from './types';
import client from '@/api/client';

export const createDeck: Action<types.State, {}> = ({ commit }) => commit(types.CREATE_DECK);
export const createDeckSuccess: Action<types.State, {}> = ({ commit }, data: string) => commit(types.CREATE_DECK_SUCCESS, data);
export const createDeckError: Action<types.State, {}> = ({ commit}, error: string) => commit(types.CREATE_DECK_ERROR, error);

const drawAllCardsFromDeck = (deckId: string, count: number) => {
  return client.get(`/${deckId}/draw/?count=${count}`)
};

const createCardsPile = (deckId: string, cards: string[]) => {
  return client.get(`/${deckId}/pile/cards/add/?cards=${cards.join()}`);
};

export const generateDeck: Action<types.State, {}> = ({ state, dispatch }, payload: types.Payload) => {
  const { deck, rotationCard } = payload;
  const allCards = deck.concat([rotationCard]);
  dispatch('createDeck');

  return client.get(`/new/shuffle/?cards=${allCards.join()}`)
          .then(({ data }) => drawAllCardsFromDeck(data.deck_id, allCards.length))
          .then(({ data }) => createCardsPile(data.deck_id, allCards))
          .then(({ data }) => dispatch('createDeckSuccess', data.deck_id))
          .then(() => window.location.href = state.deckId)
          .catch(error => dispatch('createDeckError', error))
  
};