import type { NuxtAxiosRequestConfig } from '../../types'

import { useAxios } from './use-axios'

/**
 * Sends a HEAD request to the specified URL using Axios.
 *
 * @template T - The type of the response data.
 * @param {string} url - The URL to send the HEAD request to.
 * @param {NuxtAxiosRequestConfig} [config] - Optional configuration for the Axios request.
 * @returns {Promise<T>} A promise that resolves to the response data of type T.
 *
 * @example
 * const response = await useAxiosHead('/api/resource/1');
 */
export const useAxiosHead = <T = unknown>(url: string, config?: NuxtAxiosRequestConfig): Promise<T> => {
  return useAxios().head(url, config)
}
