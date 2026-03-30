import type { CreateAxiosDefaults, AxiosInstance, AxiosRequestConfig } from 'axios'

export interface NuxtAxiosModuleOptions {
  enableLogger: boolean
  enableAutoImport: boolean
  configPath: string
}

export interface NuxtAxiosDefaults extends CreateAxiosDefaults {
  https?: boolean
  host?: string
  port?: number
  prefix?: string
}

export interface NuxtAxiosConfigOptions {
  defaults?: NuxtAxiosDefaults
}

export type NuxtAxiosInstance = AxiosInstance

export type NuxtAxiosRequestConfig<D = unknown> = AxiosRequestConfig<D>
