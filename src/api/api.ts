import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import qs from "qs";

import { setupInterceptorsTo } from "./interceptors";

const getBaseUrl = () => {
  return process.env.NODE_ENV === "development"
    ? `http://localhost:5005/api/v1/`
    : `${window.location.origin}/api/v1/`;
};

const getInstance = () => {
  return setupInterceptorsTo(
    axios.create({
      baseURL: getBaseUrl(),
      // baseURL: 'http://localhost:4000/api/',
      timeout: 25000,
      headers: {
        "Content-Type": "application/json",
      },
    })
  );
};

const API = () => {
  const instance = getInstance();
  return {
    get: <P, R>(
      url: string,
      params?: P,
      config?: AxiosRequestConfig
    ): Promise<AxiosResponse<any> | R> => {
      return instance
        .get(url, {
          ...params,
          paramsSerializer: {
            serialize: (param) => {
              return qs.stringify(param, { arrayFormat: "repeat" });
            },
          },
          responseType: "json",
          ...config,
        })
        .then((data) => data);
    },
    post: <D, R>(
      url: string,
      payload?: D,
      config?: AxiosRequestConfig
    ): Promise<AxiosResponse<any> | R> =>
      instance.post(url, payload, config).then((data) => data),
    patch: <D, R>(
      url: string,
      payload: D,
      config?: AxiosRequestConfig
    ): Promise<AxiosResponse<any> | R> =>
      instance.patch(url, payload, config).then((data) => data),
    put: <D, R>(
      url: string,
      payload?: D,
      config?: AxiosRequestConfig
    ): Promise<AxiosResponse<any> | R> =>
      instance.put(url, payload, config).then((data) => data),
    delete: <D, R>(
      url: string,
      payload?: D,
      config?: AxiosRequestConfig
    ): Promise<AxiosResponse<any> | R> =>
      instance.delete(url, { ...config, data: payload }).then((data) => data),
  };
};

export default API;
