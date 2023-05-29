import { useState, useEffect, DependencyList } from 'react';
import { CanceledError } from '../services/api-client';
import { AxiosRequestConfig } from 'axios';
import HttpService, { FetchResponse } from '../services/http-service';

const useData = <T>(endpoint: string, config?: AxiosRequestConfig, deps: DependencyList = []) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    const { request, cancel } = new HttpService<FetchResponse<T>>(endpoint).get(config);

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
  }, deps);

  return { data, error, isLoading };
};

export default useData;
