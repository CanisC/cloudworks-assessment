// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxtjs/i18n', '@nuxtjs/tailwindcss'],
  hooks: {
    "prerender:routes"({routes}) {
      routes.clear(); // Do not generate any routes (except for defaults)
    }
  },
  ssr: false, // Disable Server-Side Rendering (SSR) to ensure it's a Single Page Application (SPA)
  router: {
    options: {
      hashMode: true // Enable hash mode for the router to use hash-based navigation (e.g., '#/home') typically used for SPA
    }
  },
  i18n: {
    locales: [
      {
        code: 'en',
        name: 'English'
      },
      {
        code: 'en-gb',
        name: 'English (UK)'
      }
    ],
    defaultLocale: 'en-gb',  //Set 'en-gb' (English UK) as the default locale
    strategy: 'prefix_and_default'
  },
})