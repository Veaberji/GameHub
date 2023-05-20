import useData from './useData';
import { Platform } from './useGames';

const usePlatforms = () => {
  const { data, error, isLoading } = { ...useData<Platform>('platforms/lists/parents') };

  return { platforms: data, error, isLoading };
};

export default usePlatforms;
