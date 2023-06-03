import { useQuery } from '@tanstack/react-query';
import { CACHE_KEY_GENRES } from '../services/constants';
import useGenresHttp from './useGenresHttp';
import ms from 'ms';

const useGenres = () => {
  const { getGenres } = useGenresHttp();

  const { data, error, isLoading } = useQuery({
    queryKey: [CACHE_KEY_GENRES],
    queryFn: getGenres,
    staleTime: ms('1d'),
  });

  const findGenre = (id?: number) => data?.results.find((p) => p.id === id);

  return { genres: data, error, isLoading, findGenre };
};

export default useGenres;
