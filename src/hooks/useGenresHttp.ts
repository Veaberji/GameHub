import { CACHE_KEY_GENRES } from '../services/constants';
import HttpService from '../services/http-service';

export interface Genre {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}

const useGenresHttp = () => {
  const client = new HttpService<Genre>(CACHE_KEY_GENRES);

  const getGenres = () => client.getAll();

  return { getGenres };
};

export default useGenresHttp;
