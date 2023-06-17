import { AxiosRequestConfig } from 'axios';
import { CACHE_KEY_GAMES } from '../constants/cacheKeys';
import { Trailer } from '../entities/Trailer';
import HttpService from '../services/http-service';

const useTrailersHttp = () => {
  const getTrailers = (gameId: number, config?: AxiosRequestConfig) =>
    new HttpService<Trailer>(`${CACHE_KEY_GAMES}/${gameId}/movies`).getAll(config);

  return { getTrailers };
};

export default useTrailersHttp;
