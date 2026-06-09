// astro.config.mjs
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://szepsegterapeuta.hu',

  // i18n locales nyilvántartva, de az Astro routing ki van kapcsolva —
  // a nyelvkezelést kézzel végzi az app (?lang=en query param + v3/index.ts).
  // Ha ja/ko oldalak elkészülnek, a routing blokk visszakapcsolható.
  i18n: {
    defaultLocale: 'hu',
    locales: ['hu', 'en', 'ja', 'ko'],
  },

  build: {
    inlineStylesheets: 'auto',
  },
});
