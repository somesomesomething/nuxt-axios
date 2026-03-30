import type { AxiosResponse } from 'axios'
import type { NuxtAxiosRequestConfig } from '../../types'

import { useAxios } from './use-axios'

/**
 * Sends a request using Axios with the specified configuration.
 *
 * @template T - The type of the response data.
 * @template R - The type of the full response. Defaults to AxiosResponse<T>.
 * @template D - The type of the request config data.
 * @param {NuxtAxiosRequestConfig<D>} config - The configuration for the Axios request.
 * @returns {Promise<R>} A promise that resolves to the response of type R.
 *
 * @example
 * const response = await useAxiosRequest({ method: 'GET', url: '/api/resource' });
 */
export const useAxiosRequest = <T = unknown, R = AxiosResponse<T>, D = unknown>(config: NuxtAxiosRequestConfig<D>): Promise<R> => {
  return useAxios().request<T, R, D>(config)
}
