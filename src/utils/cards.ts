import { getCardValue } from './sorting';
import groupBy from 'lodash/groupBy';
import filter from 'lodash/filter';

export function isValidCard(card: string) {
  const pattern = new RegExp("^(([A, K, Q, J, 2,3,4,5,6,7,8,9])|(10))[H,D,C,S]$")
  return pattern.test(card);
}

export function getPairs(cards: string[]) {
  if (cards.length < 2) {
    return [];
  }
  if (cards.length == 2) {
    return [cards];
  }
  const pairs = [];
  for (let i = 0; i < cards.length; i++) {
    for (let j = i + 1; j < cards.length; j++) {
      pairs.push([cards[i], cards[j]]);
    }
  }
  return pairs;
}

export function getTriplets(cards: string[]) {
  if (cards.length < 3) {
    return [];
  }
  if (cards.length == 3) {
    return [cards];
  }
  const triplets = [];
  for (let i = 0; i < cards.length; i++) {
    for (let j = i + 1; j < cards.length; j++) {
      for(let k = j + 1; k < cards.length; k++) {
        triplets.push([cards[i], cards[j], cards[k]]);
      }
    }
  }
  return triplets;
}

export function matchPairsTriplets(pairs: string[][], triplets: string[][]) {
  const matches = [];
  for (let i = 0; i < triplets.length; i++) {
    for (let j = 0; j < pairs.length; j++) {
      if (getCardValue(triplets[i][0]) !== getCardValue(pairs[j][0])) {
        matches.push(triplets[i].concat(pairs[j]));
      }
    }
  }
  return matches;
}

export default function getFullHouse(cards: string[]) {
  if (cards.length < 5) {
    return [];
  }
  const grouped = groupBy(cards, (card: string) => getCardValue(card));
  const couldHavePairs = filter(grouped, (value) => value.length >= 2);
  const couldHaveTriplets = filter(grouped, (value) => value.length >= 3);
  const allPairs = couldHavePairs.map(i => getPairs(i)).flat();
  const allTriplets = couldHaveTriplets.map(i => getTriplets(i)).flat();
  return matchPairsTriplets(allPairs, allTriplets);
}
