export type State = {
  isLoading: boolean;
  error: null | string;
  deckId: string;
};

export const CREATE_DECK = 'CREATE_DECK';
export const CREATE_DECK_SUCCESS = 'CREATE_DECK_SUCCESS';
export const CREATE_DECK_ERROR = 'CREATE_DECK_ERROR';