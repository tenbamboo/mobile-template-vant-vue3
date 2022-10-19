import { createRouter, createWebHashHistory } from 'vue-router';
import base from './route/base';
import { setupRouterGuard } from './guard';

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    ...base,
  ],
});

export function setupRouter(app) {
  setupRouterGuard(router);
  app.use(router);
}
