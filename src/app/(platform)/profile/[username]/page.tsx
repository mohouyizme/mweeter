'use client'

import Image from 'next/image'
import Link from 'next/link'

import useSWR from 'swr'

import FollowButton from '@/components/FollowButton'
import { Icons } from '@/components/Icons'
import MweetCard from '@/components/MweetCard'
import { fetcher } from '@/lib/fetcher'
import { User } from '@/types/user'

interface ProfilePageParams {
  params: {
    username: string
  }
}

export default function ProfilePage({ params }: ProfilePageParams) {
  const { data, isLoading, error } = useSWR<{ user: User }>(
    `/api/users/${params.username}?with_mweets=true`,
    fetcher
  )

  if (isLoading)
    return (
      <div className="flex justify-center">
        <Icons.Loader size={32} className="animate-spin text-blue-400" />
      </div>
    )

  if (error)
    return (
      <p className="mt-8 text-center text-gray-500">
        Something went wrong while fetching mweets. Please try again.
      </p>
    )

  return (
    <div className="overflow-hidden rounded-3xl border bg-white shadow-sm">
      <div className="h-32 bg-gray-100" />
      <div className="relative border-b px-6 pb-6">
        <div className="-mt-14">
          <Image
            src={data?.user.imageUrl as string}
            alt="avatar"
            width={48}
            height={48}
            className="h-28 w-28 rounded-full bg-gray-200"
          />
        </div>
        <h2 className="mt-6 text-xl font-bold">
          {data?.user.firstName} {data?.user.lastName}
        </h2>
        <p className="text-gray-500">@{data?.user.username}</p>
        <div className="mt-2 flex gap-2 text-sm text-gray-500">
          <Link href={`/profile/${params.username}/following`}>
            <span className="font-bold text-gray-800">
              {data?.user._count.following}
            </span>{' '}
            Following
          </Link>
          <Link href={`/profile/${params.username}/followers`}>
            <span className="font-bold text-gray-800">
              {data?.user._count.followers}
            </span>{' '}
            Followers
          </Link>
        </div>
        <FollowButton username={params.username} />
      </div>
      <div className="">
        {data?.user.mweets.map((mweet) => (
          <MweetCard key={mweet.id} mweet={mweet} user={data?.user} />
        ))}
      </div>
    </div>
  )
}
