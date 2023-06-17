import { useQuery } from '@tanstack/react-query';
import ms from 'ms';
import { CACHE_KEY_PLATFORMS } from '../constants/cacheKeys';
import usePlatformsHttp from './usePlatformsHttp';

const usePlatforms = () => {
  const { getPlatforms } = usePlatformsHttp();

  const { data, error, isLoading } = useQuery({
    queryKey: [CACHE_KEY_PLATFORMS],
    queryFn: getPlatforms,
    staleTime: ms('1d'),
  });

  const findPlatform = (id?: number) => data?.results.find((p) => p.id === id);

  return { platforms: data, error, isLoading, findPlatform };
};

export default usePlatforms;
