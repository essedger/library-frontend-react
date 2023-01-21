import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { message } from 'antd';

import { messageDurability } from '../constants';
import { NotificationType } from '../types/entities';
import notificationService from '../services/notificationService';
import { localStorageService } from '../services/localStorageService';

const onRequest = (config: AxiosRequestConfig): AxiosRequestConfig => {
  const authData = localStorageService.getAuthData();

  if (authData && config?.headers) {
    config.headers.Authorization = `Bearer ${authData.access}`;
  }

  return config;
};

const onRequestError = async (error: AxiosError): Promise<AxiosResponse<any, any>> => {
  const notification = {
    type: NotificationType.error,
    description: `${error.response?.data || 'Something went wrond'}`,
  };
  notificationService.show(notification);

  return Promise.reject(error.request);
};

const onResponse = (response: AxiosResponse): AxiosResponse => {
  return response?.data;
};

const onResponseError = async (error: AxiosError): Promise<AxiosResponse<any, any>> => {
  message.error('Something went wrong', messageDurability);
  return Promise.reject(error.response);
};

export const setupInterceptorsTo = (axiosInstance: AxiosInstance): AxiosInstance => {
  // axiosInstance.interceptors.request.use(onRequest, onRequestError);
  // axiosInstance.interceptors.response.use(onResponse, onResponseError);
  return axiosInstance;
};
