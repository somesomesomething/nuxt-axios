import type { NuxtAxiosRequestConfig } from '../../types'
import { useAxios } from './use-axios'

/**
 * Sends a POST request with form data to the specified URL using Axios.
 *
 * @template T - The type of the response data.
 * @template D - The type of the data being sent in the request.
 * @param {string} url - The URL to send the POST request to.
 * @param {D} [data] - The data to be sent in the request body.
 * @param {NuxtAxiosRequestConfig} [config] - Optional configuration for the Axios request.
 * @returns {Promise<T>} A promise that resolves to the response data of type T.
 *
 * @example
 * const response = await useAxiosPostForm('/api/resource', { key: 'value' });
 */
export const useAxiosPostForm = <T = unknown, TData = unknown>(url: string, data?: TData, config?: NuxtAxiosRequestConfig): Promise<T> => {
  return useAxios().postForm(url, data, config)
}
