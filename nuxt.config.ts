export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/reset.scss'],
  ssr: false,
  modules: ['@pinia/nuxt', '@netlify/nuxt', '@netlify/nuxt'],
  imports: {
    dirs: ['./stores'],
  },
  app: {
    head: {
      link: [
        {
          href: 'https://hangeul.pstatic.net/hangeul_static/css/nanum-square-round.css',
          rel: 'stylesheet',
        },
      ],
    },
  },
});
