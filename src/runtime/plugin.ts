import { defineNuxtPlugin } from 'nuxt/app'

import { createAxios } from './core/create-axios'

import axiosConfig from '#nuxt-axios'

/**
 * Nuxt plugin that creates and provides the Axios instance
 * to the application via `useNuxtApp().$axios`.
 */
export default defineNuxtPlugin(() => {
  return {
    provide: {
      axios: createAxios(axiosConfig),
    },
  }
})
