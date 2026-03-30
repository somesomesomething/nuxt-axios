declare module '#nuxt-axios' {
  import type { CreateAxiosDefaults } from 'axios'

  interface NuxtAxiosDefaults extends CreateAxiosDefaults {
    https?: boolean
    host?: string
    port?: number
    prefix?: string
  }

  interface NuxtAxiosConfigOptions {
    defaults?: NuxtAxiosDefaults
  }

  const config: NuxtAxiosConfigOptions

  export default config
}
