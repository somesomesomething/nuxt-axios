import type { NuxtAxiosRequestConfig } from '../../types'
import { useAxios } from './use-axios'

/**
 * Sends a PATCH request to the specified URL using Axios.
 *
 * @template T - The type of the response data.
 * @template D - The type of the data being sent in the request.
 * @param {string} url - The URL to send the PATCH request to.
 * @param {D} [data] - The data to be sent in the request body.
 * @param {NuxtAxiosRequestConfig} [config] - Optional configuration for the Axios request.
 * @returns {Promise<T>} A promise that resolves to the response data of type T.
 *
 * @example
 * const response = await useAxiosPatch('/api/resource/1', { key: 'value' });
 */
export const useAxiosPatch = <T = unknown, TData = unknown>(url: string, data?: TData, config?: NuxtAxiosRequestConfig): Promise<T> => {
  return useAxios().patch(url, data, config)
}
