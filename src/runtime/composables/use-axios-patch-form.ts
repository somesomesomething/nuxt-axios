import type { AxiosResponse } from 'axios'
import type { NuxtAxiosRequestConfig } from '../../types'

import { useAxios } from './use-axios'

/**
 * Sends a PATCH request with form data to the specified URL using Axios.
 *
 * @template T - The type of the response data.
 * @template R - The type of the full response. Defaults to AxiosResponse<T>.
 * @template D - The type of the data being sent in the request.
 * @param {string} url - The URL to send the PATCH request to.
 * @param {D} [data] - The data to be sent in the request body.
 * @param {NuxtAxiosRequestConfig<D>} [config] - Optional configuration for the Axios request.
 * @returns {Promise<R>} A promise that resolves to the response of type R.
 *
 * @example
 * const response = await useAxiosPatchForm('/api/resource/1', { key: 'value' });
 */
export const useAxiosPatchForm = <T = unknown, R = AxiosResponse<T>, D = unknown>(url: string, data?: D, config?: NuxtAxiosRequestConfig<D>): Promise<R> => {
  return useAxios().patchForm<T, R, D>(url, data, config)
}
