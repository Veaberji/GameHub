import { CACHE_KEY_GENRES } from '../constants/cacheKeys';
import HttpService from '../services/http-service';
import { Genre } from '../entities/Genre';

const useGenresHttp = () => {
  const client = new HttpService<Genre>(CACHE_KEY_GENRES);

  const getGenres = () => client.getAll();

  return { getGenres };
};

export default useGenresHttp;
