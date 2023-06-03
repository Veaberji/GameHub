import { CACHE_KEY_PLATFORMS } from '../services/constants';
import HttpService from '../services/http-service';

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatformsHttp = () => {
  const client = new HttpService<Platform>(CACHE_KEY_PLATFORMS);

  const getPlatforms = () => client.getAll();

  return { getPlatforms };
};

export default usePlatformsHttp;
