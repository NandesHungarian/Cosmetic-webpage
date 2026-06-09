// astro.config.mjs
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://szepsegterapeuta.hu',

  /**
   * i18n routing
   * ────────────────────────────────────────────────
   * prefixDefaultLocale: false  →  hu: /        (gyökér URL, SEO barát)
   *                                 en: /en
   *                                 ja: /ja
   *                                 ko: /ko
   *
   * Új locale hozzáadásához:
   *   1. Add hozzá a locales tömböhöz
   *   2. Készíts fordítási fájlt: src/i18n/v3/{locale}.ts
   *   3. Regisztráld a src/i18n/v3/index.ts translations objektumban
   */
  i18n: {
    defaultLocale: 'hu',
    locales: ['hu', 'en', 'ja', 'ko'],
    routing: {
      prefixDefaultLocale: false,
    },
  },

  build: {
    inlineStylesheets: 'auto',
  },
});
