import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";

import VueJsx from '@vitejs/plugin-vue-jsx';
import viteCompression from 'vite-plugin-compression';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, __dirname);
  return {
    server: {
      host: env.VITE_APP_URL,
      port: Number(env.VITE_APP_PORT),
      open: true,
    },
    plugins: [vue() ,VueJsx(), viteCompression()],
    build: {
      terser: {
        compress: {
          drop_console: true,
          drop_debugger:  true
        }
      }
    },
    css: {
      postcss: {},
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
        },
      },
    },
    resolve: {
      extensions: ['.vue', '.tsx', '.ts','.js','.jsx','.mjs']
    }
  };
});
