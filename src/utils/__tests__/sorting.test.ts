import sortPile, * as sorting from '../sorting';

describe('Sorting utils', () => {
  
  it('Should mount new suits reference', () => {
    expect(sorting.mountNewReference('S', 'suits')).toEqual(['S','H','D', 'C']);
    expect(sorting.mountNewReference('H', 'suits')).toEqual(['H', 'D', 'C', 'S']);
  });

  it('Should mount new values reference', () => {
    expect(sorting.mountNewReference('2', 'values')).toEqual(['2', 'A', 'K', 'Q', 'J', '10', '9', '8', '7', '6', '5', '4', '3']);
    expect(sorting.mountNewReference('7', 'values')).toEqual(['7', '6', '5', '4', '3', '2', 'A', 'K', 'Q', 'J', '10', '9', '8']);
  });

  it ('Should get card value', () => {
    expect(sorting.getCardValue('10C')).toEqual('10');
    expect(sorting.getCardValue('2H')).toEqual('2');
    expect(sorting.getCardValue('KH')).toEqual('K');
  });

  it ('Should get card suit', () => {
    expect(sorting.getCardSuit('10C')).toEqual('C');
    expect(sorting.getCardSuit('2H')).toEqual('H');
    expect(sorting.getCardSuit('KH')).toEqual('H');
  });

  it('Should get greater suit', () => {
    expect(sorting.getGreaterSuit('6S', '10S', sorting.getNewReference('6C'))).toEqual('equal');
    expect(sorting.getGreaterSuit('6S', '10C', sorting.getNewReference('6C'))).toEqual('10C');
  });

  it('Should get greater value', () => {
    expect(sorting.getGreaterValue('6S', '10S', sorting.getNewReference('6C'))).toEqual('6S');
    expect(sorting.getGreaterValue('6S', '10C', sorting.getNewReference('6C'))).toEqual('6S');
  });

  it('Should get greater card', () => {
    expect(sorting.getGreaterCard('6S', '10S', sorting.getNewReference('6C'))).toEqual('6S');
    expect(sorting.getGreaterCard('6S', '10C', sorting.getNewReference('6C'))).toEqual('10C');
  })

  it('Should sort pile', () => {
    expect(sortPile(['2H', '2D', '2C', '2S', '3H', '3D', '3C'])).toEqual(['2H', '3H', '2D', '3D', '2C', '3C', '2S'])
    expect(sortPile(['2H', '2D', '2C', '2S', '3H', '3D', '3C'], sorting.getNewReference('3C'))).toEqual(['3C', '2C', '2S', '3H', '2H', '3D', '2D'])
  });
});