import { SignOutButton } from '@clerk/nextjs'

import { Icons } from '@/components/Icons'

export default function LogOutButton() {
  return (
    <div className="-mx-4">
      <SignOutButton>
        <button className="flex w-full items-center rounded-full px-4 py-3 text-lg font-medium transition duration-300 hover:bg-gray-200">
          <Icons.LogOut size={24} className="mr-4" />
          Log out
        </button>
      </SignOutButton>
    </div>
  )
}
