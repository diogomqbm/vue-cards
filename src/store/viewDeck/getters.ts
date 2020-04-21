import { Getter } from 'vuex';
import { State } from './types';
import sortPile, { getNewReference } from '@/utils/sorting';

export const sortedCards: Getter<State, {}> = ({ rotationPile, cardsPile }) => {
  const reference = getNewReference(rotationPile);
  return sortPile(cardsPile, reference);
};