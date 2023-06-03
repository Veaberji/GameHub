import { AxiosRequestConfig } from 'axios';
import { CACHE_KEY_GAMES } from '../services/constants';
import HttpService from '../services/http-service';
import { Platform } from './usePlatformsHttp';

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const useGamesHttp = () => {
  const client = new HttpService<Game>(CACHE_KEY_GAMES);

  const getGames = (config?: AxiosRequestConfig) => client.getAll(config);

  return { getGames };
};

export default useGamesHttp;
