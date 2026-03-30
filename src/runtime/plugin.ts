import { defineNuxtPlugin } from 'nuxt/app'

import { createAxios } from './core/create-axios'

import axiosConfig from '#nuxt-axios'

/**
 * Nuxt plugin to initialize Axios with the provided configuration.
 * @function
 * @returns {object} The plugin object containing the Axios instance.
 * @throws {TypeError} Throws an error if the Axios configuration is not a function.
 */
export default defineNuxtPlugin(() => {
  return {
    provide: {
      axios: createAxios(axiosConfig),
    },
  }
})
