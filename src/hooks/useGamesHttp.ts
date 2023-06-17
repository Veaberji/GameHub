import { AxiosRequestConfig } from 'axios';
import { CACHE_KEY_GAMES } from '../constants/cacheKeys';
import HttpService from '../services/http-service';
import { Game } from '../entities/Game';

const useGamesHttp = () => {
  const client = new HttpService<Game>(CACHE_KEY_GAMES);

  const getGames = (config?: AxiosRequestConfig) => client.getAll(config);

  const getGame = (id: string) => client.get(id);

  return { getGames, getGame };
};

export default useGamesHttp;
