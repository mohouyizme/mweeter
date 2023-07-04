import Image from 'next/image'

import { Icons } from '@/components/Icons'
import { Button } from '@/components/ui/Button'

export default function LoginPage() {
  return (
    <main className="flex h-screen items-center justify-center">
      <div className="flex w-full flex-col items-center space-y-8 p-8">
        <Image
          src="/logo.svg"
          alt="mwitter logo"
          width={200}
          height={24}
          priority
          className="h-6 w-auto"
        />
        <div className="flex flex-wrap justify-center gap-4">
          <Button variant="secondary" size="large">
            <Icons.microsoft size={18} className="mr-2" /> Sign In with Google
          </Button>
          <Button variant="secondary" size="large">
            <Icons.google size={18} className="mr-2" /> Sign In with Microsoft
          </Button>
        </div>
      </div>
    </main>
  )
}
