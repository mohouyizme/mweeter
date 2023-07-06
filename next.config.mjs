import './src/env/client.mjs'
import './src/env/server.mjs'

/** @type {import("next").NextConfig} */
const config = {
  images: {
    domains: ['images.clerk.dev', 'www.gravatar.com'],
  },
}

export default config
