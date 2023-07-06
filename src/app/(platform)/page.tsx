'use client'

import useSWR from 'swr'

import { Icons } from '@/components/Icons'
import MweetCard from '@/components/MweetCard'
import SendMweet from '@/components/SendMweet'
import { fetcher } from '@/lib/fetcher'
import { Mweet } from '@/types/mweet'

export default function HomePage() {
  const { data, error, isLoading } = useSWR<{ mweets: Mweet[] }>(
    '/api/mweets',
    fetcher
  )

  if (error)
    return (
      <p className="mt-8 text-center text-gray-500">
        Something went wrong while fetching mweets. Please try again.
      </p>
    )

  return (
    <div className="space-y-8">
      <SendMweet />
      <div className="space-y-4">
        <h2 className="text-xl font-bold">Latest mweets</h2>
        {isLoading ? (
          <div className="mt-8 flex justify-center">
            <Icons.Loader size={32} className="animate-spin text-blue-400" />
          </div>
        ) : (
          <div className="rounded-3xl border bg-white shadow-sm">
            {data?.mweets.map((mweet) => (
              <MweetCard key={mweet.id} mweet={mweet} user={mweet.user} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
