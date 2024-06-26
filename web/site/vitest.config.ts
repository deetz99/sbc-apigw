import { fileURLToPath } from 'node:url'
import { defineVitestConfig } from '@nuxt/test-utils/config'

export default defineVitestConfig({
  test: {
    environment: 'nuxt',
    dir: 'tests',
    // coverage: {
    //   reportsDirectory: 'coverage',
    // },
    includeSource: ['../pages/index.vue'],
    environmentOptions: {
      nuxt: {
        rootDir: fileURLToPath(new URL('./', import.meta.url)),
        domEnvironment: 'happy-dom'
        // mock: {
        //   indexedDb: true,
        // },
      }
    },
    // setupFiles: './tests/setup/i18n.ts',
    globals: true
  }
})
