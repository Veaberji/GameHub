import { AxiosRequestConfig } from 'axios';
import apiClient from './api-client';

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

class HttpService<T> {
  constructor(private readonly endpoint: string) {}

  getAll(config?: AxiosRequestConfig) {
    return apiClient.get<FetchResponse<T>>(this.endpoint, { ...config }).then((res) => res.data);
  }

  get(config?: AxiosRequestConfig) {
    const controller = new AbortController();
    const request = apiClient.get<T>(this.endpoint, { signal: controller.signal, ...config });

    return { request, cancel: () => controller.abort() };
  }
}

export default HttpService;
