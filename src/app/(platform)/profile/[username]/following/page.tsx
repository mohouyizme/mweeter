'use client'

import Link from 'next/link'

import useSWR from 'swr'

import { Icons } from '@/components/Icons'
import { fetcher } from '@/lib/fetcher'
import { User } from '@/types/user'

interface FollowingPageProps {
  params: {
    username: string
  }
}

export default function FollowingPage({ params }: FollowingPageProps) {
  const { data, isLoading, error } = useSWR<{ user: User }>(
    `/api/users/${params.username}?with_following=true`,
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
        <h1 className="text-xl font-bold">@{params.username} is following</h1>
      </Link>
      <div className="mt-8">
        {isLoading ? (
          <div className="mt-8 flex justify-center">
            <Icons.Loader size={32} className="animate-spin text-blue-400" />
          </div>
        ) : (
          <div className="rounded-3xl border bg-white">
            {data?.user.following.length === 0 ? (
              <p className="p-6 text-center text-gray-500">
                @{params.username} is not following anyone.
              </p>
            ) : null}
            {data?.user.following.map(({ following }) => (
              <div
                key={following.username}
                className="flex items-center gap-4 border-b p-6 last-of-type:border-none"
              >
                <img
                  src={following.imageUrl}
                  alt={following.username}
                  className="h-12 w-12 rounded-full"
                />
                <div>
                  <p className="font-bold">
                    {following.firstName} {following.lastName}
                  </p>
                  <p className="text-gray-500">@{following.username}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
