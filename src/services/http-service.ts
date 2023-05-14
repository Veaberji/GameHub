import apiClient from './api-client';

class HttpService {
  constructor(private readonly endpoint: string) {}

  get<T>() {
    const controller = new AbortController();
    const request = apiClient.get<T>(this.endpoint, { signal: controller.signal });

    return { request, cancel: () => controller.abort() };
  }
}

const create = (endpoint: string) => new HttpService(endpoint);

export default create;