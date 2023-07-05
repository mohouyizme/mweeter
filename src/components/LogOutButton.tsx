import { Icons } from '@/components/Icons'

export default function LogOutButton() {
  return (
    <a
      href="/api/auth/logout"
      className="-mx-4 flex items-center rounded-full px-4 py-3 text-lg font-medium ring-gray-200 transition duration-300 hover:bg-gray-200"
    >
      <Icons.LogOut size={24} className="mr-4" />
      Log out
    </a>
  )
}
