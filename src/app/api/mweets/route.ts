import { NextResponse } from 'next/server'

import { auth } from '@clerk/nextjs'

import { prisma } from '@/lib/prisma'

export async function GET(request: Request) {
  try {
    const mweets = await prisma.mweet.findMany({
      include: {
        user: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    })

    return NextResponse.json({ mweets })
  } catch (error) {
    return new Response('An error occurred while fetching the mweets.', {
      status: 500,
    })
  }
}

export async function POST(request: Request) {
  const { userId } = await auth()
  const body = await request.json()

  if (body.userId !== userId)
    return new Response('You are not authorized to create this mweet.', {
      status: 401,
    })

  try {
    await prisma.mweet.create({
      data: {
        text: body.mweet,
        userId: userId as string,
      },
    })
  } catch (error) {
    return new Response('An error occurred while creating the mweet.', {
      status: 500,
    })
  }

  return new Response('Mweet created successfully.')
}
