'use client'

import Image from 'next/image'
import Link from 'next/link'

import useSWR from 'swr'

import { fetcher } from '@/lib/fetcher'
import { User } from '@/types/user'

import FollowButton from './FollowButton'
import { Icons } from './Icons'

export default function PeopleToFollow() {
  const { data, isLoading, error } = useSWR<{ users: User[] }>(
    '/api/users/people-to-follow',
    fetcher
  )

  if (isLoading)
    return (
      <div className="mt-8 flex justify-center">
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
    <div>
      {data?.users.map((user) => (
        <div
          key={user.id}
          className="-mx-4 flex items-center justify-between rounded-3xl p-4 transition duration-300 hover:bg-gray-200"
        >
          <Link href={`/profile/${user.username}`} className="flex gap-3">
            <Image
              src={user.imageUrl}
              alt="avatar"
              width={48}
              height={48}
              className="h-10 w-10 rounded-full bg-gray-200"
            />
            <div className="flex-1">
              <p className="font-bold">
                {user.firstName} {user.lastName}
              </p>
              <p className="text-sm text-gray-500">@{user.username}</p>
            </div>
          </Link>
          <FollowButton username={user.username} />
        </div>
      ))}
    </div>
  )
}
