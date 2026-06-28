import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://thibau.github.io',
  base: '/',
  integrations: [tailwind()],
  output: 'static',
});
