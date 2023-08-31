import axios from 'axios';
import { IGameCard, IGameDetails } from '../types/types';
import { API_URL } from '../constants/constants';

const headers = {
  'X-RapidAPI-Key': 'cffa014724msh93a69d153bdec0ep1a261ejsn857f5e848ba6',
  'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
};

export default {
  games: {
    load: () => {
      const options = {
        method: 'GET',
        url: `${API_URL}/games`,
        headers,
      };
      return axios.request<IGameCard[]>(options).then((response) => response.data);
    },
    loadWithFilters: (
      platform: string | undefined,
      category: string | undefined,
      sortBy: string | undefined,
      signal: AbortSignal,
    ) => {
      const options = {
        method: 'GET',
        url: `${API_URL}/games`,
        params: {
          platform,
          category,
          'sort-by': sortBy,
        },
        headers,
        signal,
      };
      return axios.request<IGameCard[]>(options).then((response) => response.data);
    },
  },
  game: {
    details: (id: string) => {
      const options = {
        method: 'GET',
        url: `${API_URL}/game`,
        params: { id },
        headers,
      };
      return axios.request<IGameDetails>(options).then((response) => response.data);
    },
  },
};
