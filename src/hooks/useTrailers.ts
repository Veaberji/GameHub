import { useQuery } from '@tanstack/react-query';
import ms from 'ms';
import { CACHE_KEY_TRAILERS } from '../constants/cacheKeys';
import { Trailer } from '../entities/Trailer';
import { FetchResponse } from '../services/http-service';
import useTrailersHttp from './useTrailersHttp';

const useTrailers = (gameId: number) => {
  const { getTrailers } = useTrailersHttp();

  const { data, error, isLoading } = useQuery<FetchResponse<Trailer>, Error>({
    queryKey: [CACHE_KEY_TRAILERS, gameId],
    queryFn: () => getTrailers(gameId),
    staleTime: ms('1h'),
  });

  return { trailers: data, error, isLoading };
};

export default useTrailers;
