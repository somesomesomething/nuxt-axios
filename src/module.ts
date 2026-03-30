import { defineNuxtModule, addPlugin, addImportsDir, findPath, createResolver, useLogger } from '@nuxt/kit'
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
     * Finds the path to the configuration file.
     * @type {string | null}
     */

    const rootResolver = createResolver(nuxt.options.rootDir)

    const configPath = await findPath(rootResolver.resolve(options.configPath))

    if (!configPath) {
      if (options.enableLogger) {
        logger.error(`Module ${MODULE_NAME}. Configuration file ${options.configPath} was not created.`)
      }

      return
    }

    nuxt.options.alias['#nuxt-axios'] = configPath

    /**
     * Resolves the runtime path for the module.
     * @type {Function}
     */

    const { resolve } = createResolver(import.meta.url)

    const runtimePath = resolve('./runtime')

    /**
     * Resolves the path to the Axios plugin.
     * @type {string}
     */

    const axiosPlugin = resolve(runtimePath, './plugin.ts')

    addPlugin(axiosPlugin)

    /**
     * If auto-import is enabled, adds the composable directory.
     */

    if (options.enableAutoImport) {
      const composables = resolve(runtimePath, './composables')

      /**
       * Adds the imports directory for composables.
       */

      addImportsDir(composables)
    }

    if (options.enableLogger) {
      logger.info(`Module ${MODULE_NAME} added. Version: ${MODULE_VERSION}`)
    }
  },
})
