import { createApp } from 'vue';
import { setupConfig } from './config';
import App from './App.vue';
import 'amfe-flexible';

const app = createApp(App);
setupConfig(app);
app.mount('#app');
