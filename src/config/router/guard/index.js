// import { createPermissionGuard } from '@/config/router/guard/permissionGuard';
import { createRouterEvnetGuard } from './simpleGruard';
// import { createErrorGuard } from '@/config/route/guard/errorGuard';

export function setupRouterGuard(router) {
  // eslint-disable-next-line no-async-promise-executor
  return new Promise(async (resolve) => {
    console.log('setupRouterGuard staring');
    // await createPermissionGuard(router, store);
    // createErrorGuard(router);
    // // 当是demo演示文档系统时，无视guard内容
    // if (process.env.VUE_APP_IGNORE_ROUTER_GUARD === 'true') {
    //   resolve();
    //   return;
    // }

    createRouterEvnetGuard(router);
    resolve();
  });
}

export default {
  setupRouterGuard,
};
