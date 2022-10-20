/* eslint-disable prefer-spread */
import axios from 'axios';

import addLoading from './interceptor/request/addLoading';
import businessErrorHandler from './interceptor/response/businessErrorHandler';
import errorHandler from './interceptor/response/errorHandler';

// 默认配置
const defaultConfig = {
  timeout: 60000,
};

// 请求拦截
const requestInterceptors = [
  [
    addLoading,
  ],
];
// 返回拦截
const responseInterceptors = [
  [businessErrorHandler, errorHandler],
];

// 初始化实例
function initInstance(config) {
  // 初始化实例
  const instance = axios.create({
    ...config,
    ...defaultConfig,
  });

  // 注入拦截器
  requestInterceptors.forEach((interceptor) => {
    const r = instance.interceptors.request;
    r.use.apply(r, interceptor);
  });
  responseInterceptors.forEach((interceptor) => {
    const r = instance.interceptors.response;
    r.use.apply(r, interceptor);
  });

  return instance;
}

export function setup(instances) {
  const resList = {};
  Object.keys(instances).forEach((key) => {
    resList[key] = initInstance(instances[key]);
  });
  return resList;
}

export default {
  setup,
};
