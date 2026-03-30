import { defineNuxtModule, addPlugin, addImports, findPath, createResolver, useLogger } from '@nuxt/kit'
import type { Nuxt } from '@nuxt/schema'

import type { NuxtAxiosModuleOptions } from './types'

const MODULE_NAME = '@nuxt-core/axios'
const MODULE_VERSION = '1.0.0'
const MODULE_CONFIG_KEY = 'axios'

const logger = useLogger('nuxt:axios')

export default defineNuxtModule<NuxtAxiosModuleOptions>({
  meta: {
    name: MODULE_NAME,
    version: MODULE_VERSION,
    configKey: MODULE_CONFIG_KEY,
    compatibility: {
      nuxt: '>=3.0.0',
    },
  },

  defaults: {
    enableLogger: true,
    enableAutoImport: true,
    configPath: 'nuxt-axios.config.ts',
  },

  async setup(options: NuxtAxiosModuleOptions, nuxt: Nuxt) {
    /**
     * Resolves the path to the configuration file relative to the project root.
     */
    const rootResolver = createResolver(nuxt.options.rootDir)

    const configPath = await findPath(rootResolver.resolve(options.configPath))

    if (!configPath) {
      if (options.enableLogger) {
        logger.error(`Module ${MODULE_NAME}. Configuration file ${options.configPath} was not created.`)
      }

      return
    }

    /**
     * Registers the configuration file as a module alias,
     * making it available via `#nuxt-axios` in runtime code.
     */
    nuxt.options.alias['#nuxt-axios'] = configPath

    /**
     * Resolves paths relative to the module's source directory.
     */
    const { resolve } = createResolver(import.meta.url)

    const runtimePath = resolve('./runtime')

    /**
     * Registers the Axios plugin that initializes the instance
     * and provides it to the Nuxt app via `$axios`.
     */
    addPlugin(resolve(runtimePath, './plugin.ts'))

    /**
     * Registers composables for auto-import when enabled,
     * allowing usage of `useAxios`, `useAxiosGet`, etc. without explicit imports.
     */
    if (options.enableAutoImport) {
      const composablesPath = resolve(runtimePath, './composables')

      addImports([
        { name: 'useAxios', from: resolve(composablesPath, './use-axios') },
        { name: 'useAxiosConfig', from: resolve(composablesPath, './use-axios-config') },
        { name: 'useAxiosGet', from: resolve(composablesPath, './use-axios-get') },
        { name: 'useAxiosPost', from: resolve(composablesPath, './use-axios-post') },
        { name: 'useAxiosPut', from: resolve(composablesPath, './use-axios-put') },
        { name: 'useAxiosDelete', from: resolve(composablesPath, './use-axios-delete') },
        { name: 'useAxiosPatch', from: resolve(composablesPath, './use-axios-patch') },
        { name: 'useAxiosHead', from: resolve(composablesPath, './use-axios-head') },
        { name: 'useAxiosOptions', from: resolve(composablesPath, './use-axios-options') },
        { name: 'useAxiosRequest', from: resolve(composablesPath, './use-axios-request') },
        { name: 'useAxiosPostForm', from: resolve(composablesPath, './use-axios-post-form') },
        { name: 'useAxiosPutForm', from: resolve(composablesPath, './use-axios-put-form') },
        { name: 'useAxiosPatchForm', from: resolve(composablesPath, './use-axios-patch-form') },
      ])
    }

    if (options.enableLogger) {
      logger.info(`Module ${MODULE_NAME} added. Version: ${MODULE_VERSION}`)
    }
  },
})
