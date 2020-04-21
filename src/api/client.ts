import axios from 'axios';

const client = axios.create({
  baseURL: 'https://deckofcardsapi.com/api/deck'
});

export default client;