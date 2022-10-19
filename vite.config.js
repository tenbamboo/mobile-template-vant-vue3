import vue from '@vitejs/plugin-vue';
import {
  createStyleImportPlugin,
  VantResolve,
} from 'vite-plugin-style-import';

import { VantResolver } from 'unplugin-vue-components/resolvers';
import path from 'path';
import Components from 'unplugin-vue-components/vite';

export default {
  server: {
    port: 8800,
    proxy: {
      // // 字符串简写写法
      // '/foo': 'http://localhost:4567',
      // // 选项写法
      // '/api': {
      //   target: 'http://jsonplaceholder.typicode.com',
      //   changeOrigin: true,
      //   rewrite: (path) => path.replace(/^\/api/, ''),
      // },
      // // 正则表达式写法
      // '^/fallback/.*': {
      //   target: 'http://jsonplaceholder.typicode.com',
      //   changeOrigin: true,
      //   rewrite: (path) => path.replace(/^\/fallback/, ''),
      // },
      // // 使用 proxy 实例
      // '/api': {
      //   target: 'http://jsonplaceholder.typicode.com',
      //   changeOrigin: true,
      //   configure: (proxy, options) => {
      //     // proxy 是 'http-proxy' 的实例
      //   },
      // },
      // // Proxying websockets or socket.io
      // '/socket.io': {
      //   target: 'ws://localhost:3000',
      //   ws: true,
      // },
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: false,
        modifyVars: {
          hack: 'true; @import "src/style/vant.less";',
        },
      },
    },
  },
  resolve: {
    alias:
      {
        '@': path.resolve(__dirname, './src'),
      },
  },
  plugins: [
    vue(),
    createStyleImportPlugin({
      resolves: [
        VantResolve(),
      ],
      libs: [
        // 如果没有你需要的resolve，可以在lib内直接写，也可以给我们提供PR
        {
          libraryName: 'vant',
          esModule: true,
          resolveStyle: (name) => `../../vant/es/${name}/style/less`,
        },
      ],
    }),
    Components({
      resolvers: [VantResolver({
        importStyle: 'less',
      })],
    }),
  ],
};
