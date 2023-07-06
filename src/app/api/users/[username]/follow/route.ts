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

    const isFollowedBy = (targetUser?.following?.length ?? 0) > 0
    const isFollowing = (targetUser?.followers?.length ?? 0) > 0

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

export async function POST(
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

  const targetUser = await prisma.user.findUnique({
    where: { username },
    select: {
      id: true,
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

  const isFollowedBy = (targetUser?.following?.length ?? 0) > 0
  const isFollowing = (targetUser?.followers?.length ?? 0) > 0

  if (isFollowing) {
    return NextResponse.json({
      status: {
        isFollowing: true,
        isFollowedBy,
      },
    })
  }

  try {
    await prisma.follow.create({
      data: {
        followerId: user?.id as string,
        followingId: targetUser?.id as string,
      },
    })

    return NextResponse.json({
      status: {
        isFollowing: true,
        isFollowedBy,
      },
    })
  } catch (error) {
    return new Response('Something went wrong', { status: 500 })
  }
}

export async function DELETE(
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

  const targetUser = await prisma.user.findUnique({
    where: { username },
    select: {
      id: true,
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

  const isFollowedBy = (targetUser?.following?.length ?? 0) > 0
  const isFollowing = (targetUser?.followers?.length ?? 0) > 0

  if (!isFollowing) {
    return NextResponse.json({
      status: {
        isFollowing: false,
        isFollowedBy,
      },
    })
  }

  try {
    await prisma.follow.delete({
      where: {
        followerId_followingId: {
          followerId: user?.id as string,
          followingId: targetUser?.id as string,
        },
      },
    })

    return NextResponse.json({
      status: {
        isFollowing: false,
        isFollowedBy,
      },
    })
  } catch (error) {
    return new Response('Something went wrong', { status: 500 })
  }
}
