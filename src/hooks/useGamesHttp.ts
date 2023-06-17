import { AxiosRequestConfig } from 'axios';
import HttpService from '../services/http-service';
import Game from '../entities/Game';

const useGamesHttp = () => {
  const client = new HttpService<Game>('games');

  const getGames = (config?: AxiosRequestConfig) => client.getAll(config);

  const getGame = (id: string) => client.get(id);

  return { getGames, getGame };
};

export default useGamesHttp;
