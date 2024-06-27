import { defineConfig, envField } from 'astro/config'
import tailwind from '@astrojs/tailwind'

export default defineConfig({
  integrations: [tailwind()],
  experimental: {
    env: {
      schema: {
        STRIPE_SECRET_KEY: envField.string({ context: 'server', access: 'secret' })
      }
    }
  }
})
