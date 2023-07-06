import Image from 'next/image'
import Link from 'next/link'

import { Mweet } from '@/types/mweet'

interface MweetCardProps {
  mweet: Mweet
}

export default function MweetCard({ mweet }: MweetCardProps) {
  return (
    <div className="flex gap-4 border-b px-6 pb-8 pt-6 text-gray-500 last-of-type:border-none">
      <Image
        src={mweet.user.imageUrl}
        alt="avatar"
        width={48}
        height={48}
        className="h-10 w-10 rounded-full bg-gray-200"
      />
      <div className="flex-1">
        <Link href="/profile/1" className="inline-block items-center space-x-2">
          <span className="font-bold text-gray-800">
            {mweet.user.firstName} {mweet.user.lastName}
          </span>
          <span>{mweet.user.username}</span>
          <span>•</span>
          <span>4h</span>
        </Link>
        <p className="mt-1">{mweet.text}</p>
      </div>
    </div>
  )
}
