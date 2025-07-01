import { defineConfig } from 'vitest/config'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    coverage: {
      exclude: [
        './src/utils/morgan.ts',
        './src/utils/express.ts',
        './src/utils/router.ts',
        './src/routes/swagger/index.ts',
        './src/server.ts',
        './vitest.config.ts',
        './test'
      ],
    },
  }
})