import { setup } from './setup';

// 服务请求实例
const instances = {
  base: {
    baseURL: '/system-int/api/v1',
  },
};

let service = {};

export function setupHttp() {
  service = setup(instances);
}

export function getService() {
  return service;
}
