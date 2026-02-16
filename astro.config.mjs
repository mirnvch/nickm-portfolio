// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://nickm-portfolio.vercel.app',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ru'],
    routing: {
      prefixDefaultLocale: false
    }
  },

  redirects: {
    '/blog/remote-life': '/notes/remote-life',
    '/blog/learning-in-public': '/notes/learning-in-public',
    '/blog/ai-tools-daily': '/notes/ai-tools-daily',
    '/ru/blog/remote-life': '/ru/notes/remote-life',
    '/ru/blog/learning-in-public': '/ru/notes/learning-in-public',
    '/ru/blog/ai-tools-daily': '/ru/notes/ai-tools-daily',
  },

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap()]
});
