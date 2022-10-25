import App from './app.vue';
import { createSSRApp } from 'vue';
import { renderToString } from '@vue/server-renderer';

export async function render() {
  const app = createSSRApp(App);
  try {
    const ctx = {};
    const html = await renderToString(app, ctx);
    return [html];
  } catch (error) {
    console.log(error);
    throw error
  }
}
