import { useState, useEffect } from 'react';
import { CanceledError } from '../services/api-client';
import genresService from '../services/genres-service';

export interface Genre {
  id: number;
  name: string;
  slug: string;
}

interface FetchGenresResponse {
  count: number;
  results: Genre[];
}

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    const { request, cancel } = genresService.get<FetchGenresResponse>();
    request
      .then((res) => setGenres(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) {
          return;
        }
        setError(err.message);
      })
      .finally(() => setIsLoading(false));

    return () => cancel();
  }, []);

  return { genres, error, isLoading };
};

export default useGenres;
