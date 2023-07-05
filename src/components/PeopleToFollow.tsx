import Image from 'next/image'

import { Button } from '@/components/ui/Button'

const array = [1, 2, 3, 4, 5]

export default function PeopleToFollow() {
  return (
    <div className="space-y-6">
      {array.map((item) => (
        <div key={item} className="flex items-center justify-between">
          <div className="flex gap-3">
            <div className="">
              <Image
                src="/avatar.jpg"
                alt="avatar"
                width={48}
                height={48}
                className="h-10 w-10 rounded-full bg-gray-200"
              />
            </div>
            <div className="flex-1">
              <span className="block font-bold">Jhon Doe</span>
              <span className="block text-sm text-gray-500">@jhondoe</span>
            </div>
          </div>
          <Button variant="secondary" size="small" rounded>
            Follow
          </Button>
        </div>
      ))}
    </div>
  )
}
