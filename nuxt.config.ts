export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/reset.scss'],
  ssr: false,
  modules: ['@pinia/nuxt'],
  imports: {
    dirs: ['./stores'],
  },
});
