import { NextResponse } from 'next/server'

import { currentUser } from '@clerk/nextjs'

import { prisma } from '@/lib/prisma'

export async function GET(
  request: Request,
  { params }: { params: { username: string } }
) {
  const user = await currentUser()
  const username = params.username

  if (user?.username === username)
    return NextResponse.json({
      status: {
        isMyself: true,
      },
    })

  try {
    const targetUser = await prisma.user.findUnique({
      where: { username },
      select: {
        followers: {
          where: { followerId: user?.id },
          select: { followerId: true },
        },
        following: {
          where: { followingId: user?.id },
          select: { followingId: true },
        },
      },
    })

    const isFollowing = targetUser?.following?.length ?? 0 > 0
    const isFollowedBy = targetUser?.followers?.length ?? 0 > 0

    return NextResponse.json({
      status: {
        isFollowing,
        isFollowedBy,
      },
    })
  } catch (error) {
    return new Response('Something went wrong', { status: 500 })
  }
}
