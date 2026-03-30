import axios from 'axios'
import defu from 'defu'

import type { NuxtAxiosConfigOptions, NuxtAxiosDefaults } from '../../types'

const defaultOptions: NuxtAxiosDefaults = {
  headers: {
    common: {
      'crossDomain': 'true',
      'Accept': 'application/json, text/plain, */*',
      'Access-Control-Allow-Origin': '*',
      'X-Requested-With': 'XMLHttpRequest',
    },
  },
  withCredentials: false,
  proxy: false,
}

/**
 * Creates an Axios instance with the provided configuration options.
 *
 * @param {NuxtAxiosConfigOptions} options - The configuration options for the Axios instance.
 * @returns {AxiosInstance} The created Axios instance.
 *
 * @throws {Error} Throws an error if the options are invalid.
 */
export const createAxios = (options: NuxtAxiosConfigOptions) => {
  const instanceOptions = defu(defaultOptions, options)

  if (!instanceOptions.baseURL) {
    /**
     * Determines the protocol to use (http or https).
     * @type {string}
     */
    const protocol = instanceOptions.https || process.env.HTTPS ? 'https' : 'http'

    /**
     * Determines the host to use for the base URL.
     * @type {string}
     */
    const host = instanceOptions.host || process.env.HOST || 'localhost'

    /**
     * Determines the port to use for the base URL.
     * @type {number}
     */
    const port = instanceOptions.port || process.env.PORT || '3000'

    /**
     * Determines the prefix to use for the base URL.
     * @type {string}
     */
    const prefix = instanceOptions.prefix || '/'

    instanceOptions.baseURL = `${protocol}://${host}:${port}${prefix}`
  }

  const instance = axios.create(instanceOptions)

  return instance
}
