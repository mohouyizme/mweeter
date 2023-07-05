import type { WebhookEvent } from '@clerk/clerk-sdk-node'
import { Webhook } from 'svix'

import { env } from '@/env/server.mjs'
import { prisma } from '@/lib/prisma'

export async function POST(request: Request) {
  const body = (await request.json()) as WebhookEvent
  const headers = {
    'svix-id': request.headers.get('SVIX-ID') as string,
    'svix-timestamp': request.headers.get('SVIX-TIMESTAMP') as string,
    'svix-signature': request.headers.get('SVIX-SIGNATURE') as string,
  }

  const webhook = new Webhook(env.SVIX_USER_HOOK_SIGNING_SECRET)

  try {
    webhook.verify(JSON.stringify(body), headers)
  } catch (error) {
    return new Response('Invalid signature', { status: 401 })
  }

  switch (body.type) {
    case 'user.created':
      await prisma.user.create({
        data: {
          id: body.data.id,
          firstName: body.data.first_name,
          lastName: body.data.last_name,
          username: body.data.username as string,
          imageUrl: body.data.profile_image_url,
        },
      })
      return new Response('User created')
    case 'user.updated':
      await prisma.user.update({
        where: {
          id: body.data.id,
        },
        data: {
          firstName: body.data.first_name,
          lastName: body.data.last_name,
          username: body.data.username as string,
          imageUrl: body.data.profile_image_url,
        },
      })
      return new Response('User updated')
    case 'user.deleted':
      await prisma.user.delete({
        where: {
          id: body.data.id,
        },
      })
      return new Response('User deleted')
  }
}
