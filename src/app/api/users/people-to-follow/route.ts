import { NextResponse } from 'next/server'

import { auth } from '@clerk/nextjs'

import { prisma } from '@/lib/prisma'

export async function GET() {
  const { userId } = auth()

  try {
    const users = await prisma.user.findMany({
      take: 8,
      orderBy: {
        createdAt: 'desc',
      },
      where: {
        NOT: {
          id: userId as string,
        },
      },
    })

    return NextResponse.json({ users })
  } catch (error) {
    return new Response('Internal server error', { status: 500 })
  }
}
