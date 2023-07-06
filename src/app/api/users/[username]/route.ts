import { NextResponse } from 'next/server'

import { prisma } from '@/lib/prisma'

export async function GET(
  request: Request,
  { params }: { params: { username: string } }
) {
  const username = params.username
  const { searchParams } = new URL(request.url)
  const with_mweets = searchParams.get('with_mweets')

  try {
    const user = await prisma.user.findUnique({
      where: {
        username,
      },
      include: {
        mweets: with_mweets === 'true' ? true : false,
      },
    })

    if (!user) return new Response('User not found', { status: 404 })

    return NextResponse.json({ user })
  } catch (error) {
    return new Response('Something went wrong', { status: 500 })
  }
}
