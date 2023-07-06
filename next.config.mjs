import './src/env/client.mjs'
import './src/env/server.mjs'

/** @type {import("next").NextConfig} */
const config = {
  images: {
    domains: [
      'img.clerk.com',
      'images.clerk.dev',
      'www.gravatar.com',
      'lh3.googleusercontent.com',
    ],
  },
}

export default config
