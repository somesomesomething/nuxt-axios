import type { NuxtAxiosRequestConfig } from '../../types'

import { useAxios } from './use-axios'

/**
 * Sends a request using Axios with the specified configuration.
 *
 * @template T - The type of the response data.
 * @param {NuxtAxiosRequestConfig} config - The configuration for the Axios request.
 * @returns {Promise<T>} A promise that resolves to the response data of type T.
 *
 * @example
 * const response = await useAxiosRequest({ method: 'GET', url: '/api/resource' });
 */
export const useAxiosRequest = <T = unknown>(config: NuxtAxiosRequestConfig): Promise<T> => {
  return useAxios().request(config)
}
