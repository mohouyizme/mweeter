import Image from 'next/image'
import Link from 'next/link'

import { withPageAuthRequired } from '@auth0/nextjs-auth0'

import MweetCard from '@/components/MweetCard'
import { Button } from '@/components/ui/Button'

export default withPageAuthRequired(async function ProfilePage() {
  return (
    <div className="overflow-hidden rounded-3xl border bg-white shadow-sm">
      <div className="h-32 bg-gray-100" />
      <div className="relative border-b px-6 pb-6">
        <div className="-mt-14">
          <Image
            src="/avatar.jpg"
            alt="avatar"
            width={48}
            height={48}
            className="h-28 w-28 rounded-full bg-gray-200"
          />
        </div>
        <h2 className="mt-6 text-xl font-bold">Mohamed Ouyizme</h2>
        <p className="text-gray-500">@mohouyizme</p>
        <div className="mt-2 flex gap-2 text-sm text-gray-500">
          <Link href="/following">
            <span className="font-bold text-gray-800">199</span> Following
          </Link>
          <Link href="/followers">
            <span className="font-bold text-gray-800">32</span> Followers
          </Link>
        </div>
        <Button variant="secondary" rounded className="absolute right-6 top-10">
          Following
        </Button>
      </div>
      <div className="">
        <MweetCard />
        <MweetCard />
        <MweetCard />
      </div>
    </div>
  )
})
