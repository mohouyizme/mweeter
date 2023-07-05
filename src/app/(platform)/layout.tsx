import Image from 'next/image'
import Link from 'next/link'

import LogOutButton from '@/components/LogOutButton'
import PeopleToFollow from '@/components/PeopleToFollow'
import SideNavigation from '@/components/SideNavigation'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto my-8 flex w-full max-w-6xl items-start gap-x-8 px-4 sm:px-6 lg:px-8">
      <aside className="sticky top-8 hidden w-52 shrink-0 space-y-8 lg:block">
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
        <div className="">
          <SideNavigation />
          <hr className="my-4" />
          <LogOutButton />
        </div>
      </aside>
      <main className="flex-1">{children}</main>
      <aside className="sticky top-8 hidden w-64 shrink-0 xl:block">
        <div className="space-y-8">
          <h2 className="text-xl font-bold">People to follow</h2>
          <PeopleToFollow />
        </div>
      </aside>
    </div>
  )
}
