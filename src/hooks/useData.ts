import { useState, useEffect } from 'react';
import { CanceledError } from '../services/api-client';
import create from '../services/http-service';

interface FetchResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(endpoint: string) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    const { request, cancel } = create(endpoint).get<FetchResponse<T>>();
    request
      .then((res) => setData(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) {
          return;
        }
        setError(err.message);
      })
      .finally(() => setIsLoading(false));

    return () => cancel();
  }, []);

  return { data, error, isLoading };
};

export default useData;
