import { PLATFORMS_API } from '../constants/cacheKeys';
import HttpService from '../services/http-service';
import { Platform } from '../entities/Platform';

const usePlatformsHttp = () => {
  const client = new HttpService<Platform>(PLATFORMS_API);

  const getPlatforms = () => client.getAll();

  return { getPlatforms };
};

export default usePlatformsHttp;
