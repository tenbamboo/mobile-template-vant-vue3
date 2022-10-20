import { setupRouter } from './router';
import { setupStore } from './store';
import { setupHttp } from './http';

export function setupConfig(app) {
  setupHttp(app);
  setupStore(app);
  setupRouter(app);
}
export default {
  setupConfig,
};
