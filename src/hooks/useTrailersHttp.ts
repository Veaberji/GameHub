import { CACHE_KEY_GAMES } from '../constants/cacheKeys';
import { Trailer } from '../entities/Trailer';
import HttpService from '../services/http-service';

const useTrailersHttp = () => {
  const getTrailers = (gameId: number) => new HttpService<Trailer>(`${CACHE_KEY_GAMES}/${gameId}/movies`).getAll();

  return { getTrailers };
};

export default useTrailersHttp;
