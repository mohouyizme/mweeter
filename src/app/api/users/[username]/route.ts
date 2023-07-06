import { NextResponse } from 'next/server'

import { prisma } from '@/lib/prisma'

export async function GET(
  request: Request,
  { params }: { params: { username: string } }
) {
  const username = params.username
  const { searchParams } = new URL(request.url)
  const with_mweets = searchParams.get('with_mweets')
  const with_followers = searchParams.get('with_followers')
  const with_following = searchParams.get('with_following')

  try {
    const user = await prisma.user.findUnique({
      where: {
        username,
      },
      include: {
        _count: {
          select: {
            followers: true,
            following: true,
          },
        },
        followers:
          with_followers === 'true'
            ? {
                select: {
                  follower: {
                    select: {
                      username: true,
                      firstName: true,
                      lastName: true,
                      imageUrl: true,
                    },
                  },
                },
              }
            : false,
        following:
          with_following === 'true'
            ? {
                select: {
                  following: {
                    select: {
                      username: true,
                      firstName: true,
                      lastName: true,
                      imageUrl: true,
                    },
                  },
                },
              }
            : false,
        mweets:
          with_mweets === 'true'
            ? {
                orderBy: {
                  createdAt: 'desc',
                },
              }
            : false,
      },
    })

    if (!user) return new Response('User not found', { status: 404 })

    return NextResponse.json({ user })
  } catch (error) {
    return new Response('Something went wrong', { status: 500 })
  }
}
