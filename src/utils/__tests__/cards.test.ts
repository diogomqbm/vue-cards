import getFullHouse, * as cards from '../cards';

describe('Card utils', () => {
  
  it('Should validate cards', () => {
    expect(cards.isValidCard('10C')).toBe(true);
    expect(cards.isValidCard('2H')).toBe(true);
    expect(cards.isValidCard('KH')).toBe(true);
    expect(cards.isValidCard('')).toBe(false);
  });

  it('Should get pairs', () => {
    expect(cards.getPairs([])).toStrictEqual([]);
    expect(cards.getPairs(['10C', '2C'])).toEqual([['10C', '2C']]);
    expect(cards.getPairs(['10C', '2C', '3C'])).toEqual([['10C','2C'], ['10C','3C'], ['2C', '3C']]);
  });

  it('Should get triplets', () => {
    expect(cards.getTriplets([])).toEqual([]);
    expect(cards.getTriplets(['10D', '2S', '3C'])).toEqual([['10D', '2S', '3C']]);
    expect(cards.getTriplets(['10D', '2S', '3C', 'KH'])).toEqual([['10D', '2S', '3C'], ['10D', '2S', 'KH'], ['10D', '3C', 'KH'], ['2S', '3C', 'KH']]);
  });

  it('Should match pairs w/ triplets', () => {
    expect(cards.matchPairsTriplets([], [])).toEqual([]);
    expect(cards.matchPairsTriplets([['2H', '2D']], [['3D', '3S', '3C']])).toEqual([['3D', '3S', '3C', '2H', '2D']]);
  });

  it('Should get full house combos', () => {
    expect(getFullHouse(['2H'])).toEqual([]);
    expect(getFullHouse([])).toEqual([]);
    expect(getFullHouse(['2H', '2D', '2C', '3H', '3D'])).toEqual([['2H', '2D', '2C', '3H', '3D']]);
    expect(getFullHouse(['2H', '2D', '2C', '2D', '3H', '3D', '3C']).length).toEqual(18);
  });

});