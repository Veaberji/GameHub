import { useQuery } from '@tanstack/react-query';
import { CACHE_KEY_GENRES } from '../services/constants';
import useGenresHttp from './useGenresHttp';

const useGenres = () => {
  const { getGenres } = useGenresHttp();

  const { data, error, isLoading } = useQuery({
    queryKey: [CACHE_KEY_GENRES],
    queryFn: getGenres,
    staleTime: 24 * 60 * 60 * 1000,
  });

  const findGenre = (id?: number) => data?.results.find((p) => p.id === id);

  return { genres: data, error, isLoading, findGenre };
};

export default useGenres;
