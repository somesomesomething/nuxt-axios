import type { AxiosResponse } from 'axios'
import type { NuxtAxiosRequestConfig } from '../../types'

import { useAxios } from './use-axios'

/**
 * Sends a GET request to the specified URL using Axios.
 *
 * @template T - The type of the response data.
 * @template R - The type of the full response. Defaults to AxiosResponse<T>.
 * @template D - The type of the request config data.
 * @param {string} url - The URL to send the GET request to.
 * @param {NuxtAxiosRequestConfig<D>} [config] - Optional configuration for the Axios request.
 * @returns {Promise<R>} A promise that resolves to the response of type R.
 *
 * @example
 * const response = await useAxiosGet('/api/resource/1');
 */
export const useAxiosGet = <T = unknown, R = AxiosResponse<T>, D = unknown>(url: string, config?: NuxtAxiosRequestConfig<D>): Promise<R> => {
  return useAxios().get<T, R, D>(url, config)
}
