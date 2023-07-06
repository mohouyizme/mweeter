import Link from 'next/link'

import { Icons } from '@/components/Icons'

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

export default function SideNavigation() {
  return (
    <nav>
      <ul>
        {links.map(({ href, label, Icon }) => (
          <li key={label}>
            <Link
              href={href}
              className="-mx-4 flex items-center rounded-full px-4 py-3 text-lg font-medium ring-gray-200 transition duration-300 hover:bg-gray-200"
            >
              <Icon size={24} className="mr-4" />
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
