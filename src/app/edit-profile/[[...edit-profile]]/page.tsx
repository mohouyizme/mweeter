import Image from 'next/image'
import Link from 'next/link'

import { UserProfile } from '@clerk/nextjs'

export default function EditProfilePage() {
  return (
    <div className="flex flex-col items-center space-y-8 py-8">
      <Link href="/" className="inline-block">
        <Image
          src="/logo.svg"
          alt="mwitter logo"
          width={200}
          height={24}
          priority
          className="h-5 w-auto"
        />
      </Link>
      <UserProfile />
    </div>
  )
}
