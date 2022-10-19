// import Setaria from 'setaria';
// import { getCookie } from '@/util/cain';
// import { getSubAppEnvParams } from '../../subAppParams';

// const whiteList = ['/login', '/404', '/403', '/500', '/networkError', '/', '/refreshToken'];
import { useCounterStore } from '../../store/simple';

const code404Guard = (to, _, next) => {
  // store 实例
  const { count, increment, double } = useCounterStore();
  increment();
  console.log('count', count, double);
  // store 实例
  if (to.matched.length === 0 || (to.matched.length === 1 && to.matched[0].path === '*')) {
    next({
      path: '/404',
    });
    return;
  }
  next();
};

export function createRouterEvnetGuard(router) {
  // cover 第一次进入无权页面时的处理
  // router.beforeResolve(loginGuard);
  router.beforeResolve(code404Guard);
  // if (isNoRole(router.app.$route.path)) {
  //   router.replace('/403');
  // }
}

export default {
  createRouterEvnetGuard,
};
