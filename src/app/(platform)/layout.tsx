import Image from 'next/image'
import Link from 'next/link'

import SideNavigation from '@/components/SideNavigation'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto flex w-full max-w-6xl items-start gap-x-8 px-4 py-10 sm:px-6 lg:px-8">
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
        <SideNavigation />
      </aside>
      <main className="flex-1">{children}</main>
      <aside className="sticky top-8 hidden w-52 shrink-0 xl:block">
        Right side
      </aside>
    </div>
  )
}
