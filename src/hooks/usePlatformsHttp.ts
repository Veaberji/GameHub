import { PLATFORMS_API } from '../services/constants';
import HttpService from '../services/http-service';

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatformsHttp = () => {
  const client = new HttpService<Platform>(PLATFORMS_API);

  const getPlatforms = () => client.getAll();

  return { getPlatforms };
};

export default usePlatformsHttp;
