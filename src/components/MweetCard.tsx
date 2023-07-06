import Image from 'next/image'
import Link from 'next/link'

import dayjs from '@/lib/dayjs'
import { Mweet } from '@/types/mweet'
import { User } from '@/types/user'

interface MweetCardProps {
  mweet: Mweet
  user: User
}

export default function MweetCard({ mweet, user }: MweetCardProps) {
  return (
    <div className="flex gap-4 border-b p-6 text-gray-500 last-of-type:border-none">
      <Image
        src={user.imageUrl}
        alt="avatar"
        width={48}
        height={48}
        className="h-10 w-10 rounded-full bg-gray-200"
      />
      <div className="flex-1">
        <Link
          href={`/profile/${user.username}`}
          className="inline-block items-center space-x-2"
        >
          <span className="font-bold text-gray-800">
            {user.firstName} {user.lastName}
          </span>
          <span>{user.username}</span>
          <span>•</span>
          <span>{dayjs(mweet.createdAt).fromNow(true)}</span>
        </Link>
        <p className="mt-1">{mweet.text}</p>
      </div>
    </div>
  )
}
