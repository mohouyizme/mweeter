import Image from 'next/image'
import Link from 'next/link'

import { currentUser } from '@clerk/nextjs'

import MobileDropdownMenu from './MobileDropdownMenu'

export default async function MobileNavbar() {
  const user = await currentUser()

  return (
    <nav>
      <div className="flex items-center justify-between">
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
        <MobileDropdownMenu user={user} />
      </div>
    </nav>
  )
}
