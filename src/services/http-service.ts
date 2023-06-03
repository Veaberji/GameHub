import { AxiosRequestConfig } from 'axios';
import apiClient from './api-client';

export interface FetchResponse<Entity> {
  count: number;
  next: string | null;
  results: Entity[];
}

class HttpService<T> {
  constructor(private readonly endpoint: string) {}

  getAll(config?: AxiosRequestConfig) {
    return apiClient.get<FetchResponse<T>>(this.endpoint, config).then((res) => res.data);
  }
}

export default HttpService;
