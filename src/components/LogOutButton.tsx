import { Icons } from '@/components/Icons'

export default function LogOutButton() {
  return (
    <div className="-mx-4">
      <button className="flex w-full items-center rounded-full px-4 py-3 text-lg font-medium transition duration-300 hover:bg-blue-50">
        <Icons.LogOut size={24} className="mr-4" />
        Log out
      </button>
    </div>
  )
}
