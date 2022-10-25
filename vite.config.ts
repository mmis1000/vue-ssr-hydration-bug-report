import path from 'path';
import { defineConfig, UserConfig } from 'vite';
import vuePlugin from '@vitejs/plugin-vue';
import vueJsxPlugin from '@vitejs/plugin-vue-jsx';
export default  defineConfig({
  plugins: [
    vuePlugin(),
    vueJsxPlugin()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  server: {
    port: 8086
  }
})
