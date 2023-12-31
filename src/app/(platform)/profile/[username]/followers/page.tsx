'use client'

import Image from 'next/image'
import Link from 'next/link'

import useSWR from 'swr'

import { Icons } from '@/components/Icons'
import { fetcher } from '@/lib/fetcher'
import { User } from '@/types/user'

interface FollowersPageProps {
  params: {
    username: string
  }
}

export default function FollowersPage({ params }: FollowersPageProps) {
  const { data, isLoading, error } = useSWR<{ user: User }>(
    `/api/users/${params.username}?with_followers=true`,
    fetcher
  )

  if (error)
    return (
      <p className="mt-8 text-center text-gray-500">
        Something went wrong while fetching mweets. Please try again.
      </p>
    )

  return (
    <div>
      <Link
        href={`/profile/${params.username}`}
        className="flex items-center gap-4"
      >
        <Icons.ArrowLeft size={24} />
        <h1 className="text-xl font-bold">Followers of @{params.username}</h1>
      </Link>
      <div className="mt-8">
        {isLoading ? (
          <div className="mt-8 flex justify-center">
            <Icons.Loader size={32} className="animate-spin text-blue-400" />
          </div>
        ) : (
          <div className="overflow-hidden rounded-3xl border bg-white">
            {data?.user.followers.length === 0 ? (
              <p className="p-6 text-center text-gray-500">
                @{params.username} is not followed by anyone.
              </p>
            ) : null}
            {data?.user.followers.map(({ follower }) => (
              <Link
                href={`/profile/${follower.username}`}
                key={follower.username}
                className="flex items-center gap-4 border-b p-6 transition duration-300 last-of-type:border-none hover:bg-gray-100"
              >
                <Image
                  src={follower.imageUrl}
                  alt={follower.username}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div>
                  <p className="font-bold">
                    {follower.firstName} {follower.lastName}
                  </p>
                  <p className="text-gray-500">@{follower.username}</p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
