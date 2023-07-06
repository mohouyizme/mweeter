'use client'

import Image from 'next/image'
import Link from 'next/link'

import { User } from '@clerk/clerk-sdk-node'
import { SignOutButton } from '@clerk/nextjs'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import { Icons } from './Icons'

const links = [
  {
    href: '/',
    label: 'Home',
    Icon: Icons.Home,
  },
  {
    href: '/profile',
    label: 'Profile',
    Icon: Icons.Profile,
  },
  {
    href: '/edit-profile',
    label: 'Edit Profile',
    Icon: Icons.Settings,
  },
]

interface MobileDropdownMenuProps {
  user: User | null
}

export default function MobileDropdownMenu({ user }: MobileDropdownMenuProps) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="cursor-pointer">
          <span className="sr-only">Open</span>
          <Image
            src={user?.imageUrl as string}
            alt="Avatar"
            width={36}
            height={36}
            className="rounded-full"
          />
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align="end"
          className="z-20 mt-4 block min-w-[220px] overflow-hidden rounded-xl border bg-white shadow-sm lg:hidden"
        >
          <ul>
            {links.map((link) => (
              <li
                key={link.label}
                className="border-b last-of-type:border-none"
              >
                <DropdownMenu.Item asChild>
                  <Link
                    href={link.href}
                    className="block px-4 py-3 text-gray-500 focus:bg-gray-200 focus:outline-none"
                  >
                    {link.label}
                  </Link>
                </DropdownMenu.Item>
              </li>
            ))}
            <li className="border-b last-of-type:border-none">
              <DropdownMenu.Item asChild>
                <SignOutButton>
                  <button className="block w-full px-4 py-3 text-left text-gray-500 focus:bg-gray-200 focus:outline-none">
                    Log out
                  </button>
                </SignOutButton>
              </DropdownMenu.Item>
            </li>
          </ul>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
