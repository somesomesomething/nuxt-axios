import type { NuxtAxiosRequestConfig } from '../../types'
import { useAxios } from './use-axios'

/**
 * Sends a PUT request with form data to the specified URL using Axios.
 *
 * @template T - The type of the response data.
 * @template D - The type of the data being sent in the request.
 * @param {string} url - The URL to send the PUT request to.
 * @param {D} [data] - The data to be sent in the request body.
 * @param {NuxtAxiosRequestConfig} [config] - Optional configuration for the Axios request.
 * @returns {Promise<T>} A promise that resolves to the response data of type T.
 *
 * @example
 * const response = await useAxiosPutForm('/api/resource/1', { key: 'value' });
 */
export const useAxiosPutForm = <T = unknown, TData = unknown>(url: string, data?: TData, config?: NuxtAxiosRequestConfig): Promise<T> => {
  return useAxios().putForm(url, data, config)
}
