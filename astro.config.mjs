import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://imersao.institutonutricaoavancada.com',
  server: {
    port: 4323
  },
  redirects: {
    '/imersao-5ed-pre-venda': '/imersao-5ed-v6'
  }
});
