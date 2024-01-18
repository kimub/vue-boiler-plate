import type { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

export function setInterceptors(instance: AxiosInstance) {
  // 요청을 보내기 전에
  instance.interceptors.request.use(
    function (config: AxiosRequestConfig) {
      if (!config.headers) {
        return;
      }

      config.headers.Authorization = 'token';
      return config;
    },
    function (error: AxiosError) {
      return Promise.reject(error);
    }
  );

  // 응답을 받기 전에
  instance.interceptors.response.use(
    function (response: AxiosResponse) {
      return response;
    },
    function (error: AxiosError) {
      return Promise.reject(error);
    }
  );

  return instance;
}
