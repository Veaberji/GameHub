import { useQuery } from '@tanstack/react-query';
import ms from 'ms';
import { CACHE_KEY_SCREENSHOTS } from '../constants/cacheKeys';
import { Screenshot } from '../entities/Screenshots';
import { FetchResponse } from '../services/http-service';
import useScreenshotsHttp from './useScreenshotsHttp';

const useScreenshots = (gameId: number) => {
  const { getScreenshots } = useScreenshotsHttp();

  const { data, error, isLoading } = useQuery<FetchResponse<Screenshot>, Error>({
    queryKey: [CACHE_KEY_SCREENSHOTS, gameId],
    queryFn: () => getScreenshots(gameId),
    staleTime: ms('1h'),
  });

  return { screenshots: data, error, isLoading };
};

export default useScreenshots;
