import { useNuxtApp } from 'nuxt/app'

import type { NuxtAxiosInstance } from '../../types'

/**
 * Retrieves the Axios instance from the Nuxt app.
 *
 * @template T - The type of the Axios instance to return. Defaults to NuxtAxiosInstance.
 * @returns {T} The Axios instance.
 * @throws {Error} Throws an error if the Axios instance is not found.
 *
 * @example
 * const axios = useAxios();
 */
export const useAxios = <T = NuxtAxiosInstance>(): T => {
  const { $axios } = useNuxtApp()

  if ($axios) {
    return $axios as T
  }

  throw new Error('Axios instance not found.')
}
