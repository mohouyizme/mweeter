import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
  server: {
    DATABASE_URL: z.string().url(),
    CLERK_SECRET_KEY: z.string().min(1),
    SVIX_USER_HOOK_SIGNING_SECRET: z.string().min(1),
  },
  runtimeEnv: {
    DATABASE_URL: process.env.DATABASE_URL,
    CLERK_SECRET_KEY: process.env.CLERK_SECRET_KEY,
    SVIX_USER_HOOK_SIGNING_SECRET: process.env.SVIX_USER_HOOK_SIGNING_SECRET,
  },
})
