import { Getter } from 'vuex';
import { State } from './types';
import sortPile, { getNewReference } from '@/utils/sorting';
import getFullHouse from '@/utils/cards';

export const sortedCards: Getter<State, {}> = ({ rotationPile, cardsPile }) => {
  const reference = getNewReference(rotationPile);
  return sortPile(cardsPile, reference);
};

export const fullHouseCombos: Getter<State, {}> = ({ cardsPile }) => {
  return getFullHouse(cardsPile);
};