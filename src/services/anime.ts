import { api } from './api';
import { AnimeResponse, Anime } from '../common/types/api/anime';

import { replaceURLBrackets } from '../utils/replaceURLbrackets';

interface SingleAnimeResponse extends Omit<AnimeResponse, 'data'> {
  data: Anime;
}

export const anime = {
  topRated: async () => {
    const encodedURL = replaceURLBrackets('/anime');

    const topRatedResponse = await api
      .get<AnimeResponse>(encodedURL, {
        params: {
          sort: 'ratingRank',
        },
      })
      .then(({ ...response }) => response)
      .catch(({ ...response }) => response);

    return topRatedResponse;
  },
  trending: async () => {
    const trendingResponse = await api
      .get<AnimeResponse>('/trending/anime', {
        params: {
          sort: 'ratingRank',
        },
      })
      .then(({ ...response }) => response)
      .catch(({ ...response }) => response);

    return trendingResponse;
  },
  show: async (id: string | number) => {
    const showResponse = await api
      .get<SingleAnimeResponse>(`/anime/${id}`)
      .then(({ ...response }) => response)
      .catch(({ ...response }) => response);

    return showResponse;
  },
};
