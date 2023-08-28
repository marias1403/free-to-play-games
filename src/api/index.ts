import axios from 'axios';
import { IGameCard } from '../types/types';

const API_URL = 'https://free-to-play-games-database.p.rapidapi.com/api';

export default {
  games: {
    load: () => {
      const options = {
        method: 'GET',
        url: `${API_URL}/games`,
        headers: {
          'X-RapidAPI-Key': 'cffa014724msh93a69d153bdec0ep1a261ejsn857f5e848ba6',
          'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
        },
        timeout: 10000,
      };
      return axios.request<IGameCard[]>(options).then((response) => response.data);
    },
  },
};
