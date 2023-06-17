import HttpService from '../services/http-service';
import Platform from '../entities/Platform';

const usePlatformsHttp = () => {
  const client = new HttpService<Platform>('platforms/lists/parents');

  const getPlatforms = () => client.getAll();

  return { getPlatforms };
};

export default usePlatformsHttp;
