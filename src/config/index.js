import { setupRouter } from './router';
import { setupStore } from './store';

export function setupConfig(app) {
  setupStore(app);
  setupRouter(app);
}
export default {
  setupConfig,
};
