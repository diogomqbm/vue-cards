export type State = {
  isLoading: boolean;
  error: null | string;
  rotationPile: string;
  cardsPile: string[];
};

export type ServerCard = {
  code: string;
  image: string;
  images: {
    svg: string;
    png: string;
  };
  value: string;
  suit: string;
};

export const FETCH_PILES = 'FETCH_PILES';
export const FETCH_PILES_SUCCESS = 'FETCH_PILES_SUCCESS';
export const FETCH_PILES_ERROR = 'FETCH_PILES_ERROR';