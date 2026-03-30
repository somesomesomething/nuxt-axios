export default defineNuxtConfig({
  modules: ['../src/module'],

  compatibilityDate: '2026-01-01',

  axios: {
    enableLogger: true,
    enableAutoImport: true,
    configPath: 'nuxt-axios.config.ts',
  },
})
