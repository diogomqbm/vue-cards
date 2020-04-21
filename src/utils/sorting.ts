const DEFAULT_SUITS = ['H', 'D', 'C', 'S'];
const DEFAULT_VALUES = ['2', 'A', 'K', 'Q', 'J', '10', '9', '8', '7', '6', '5', '4', '3'];
const DEFAULT_REFERENCE: Reference = {
  suits: DEFAULT_SUITS,
  values: DEFAULT_VALUES
};

type Reference = {
  suits: string[];
  values: string[];
}

function getReference(rotationCard: string, reference: string[]): string[] {
  if (rotationCard === reference[0]) {
    return reference;
  }
  const index = reference.indexOf(rotationCard);
  const minorRef = reference.slice(0, index);
  const majorRef = reference.slice(index, reference.length);
  return majorRef.concat(minorRef);
}

function getCardValue(card: string): string {
  if (card.length > 2) {
    return card.slice(0,2);
  }
  return card[0];
}

function getCardSuit(card: string) {
  return card[card.length - 1];
}

export function getNewReference(rotationCard: string): Reference {
  const newValues = getReference(getCardValue(rotationCard), DEFAULT_VALUES);
  const newSuits = getReference(getCardSuit(rotationCard), DEFAULT_SUITS);
  return {
    suits: newSuits,
    values: newValues
  }
}

function getGreaterSuit(a: string, b: string, reference: Reference) {
  if (reference.suits.indexOf(getCardSuit(a)) < reference.suits.indexOf(getCardSuit(b))) {
    return a;
  } 
  if (reference.suits.indexOf(getCardSuit(a)) === reference.suits.indexOf(getCardSuit(b))) {
    return "equal";
  }
  return b;
}

function getGreaterValue(a: string,b: string, reference: Reference) {
  if (reference.values.indexOf(getCardValue(a)) < reference.values.indexOf(getCardValue(b))) {
    return a;
  }
  return b;
}

function getGreaterCard(a: string,b: string, reference: Reference) {
  if (getGreaterSuit(a,b, reference) === a) {
    return a;
  }
  if (getGreaterSuit(a,b, reference) === b) {
    return b;
  }
  return getGreaterValue(a,b, reference);
}

export default function sortPile(pile: string[], reference = DEFAULT_REFERENCE) {
  return pile.sort((a: string,b: string) => {
    if (getGreaterCard(a,b, reference) === a) {
      return -1;
    }
    return 1;
  })
}