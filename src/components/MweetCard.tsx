import Image from 'next/image'
import Link from 'next/link'

export default function MweetCard() {
  return (
    <div className="flex gap-4 text-gray-500">
      <div className="">
        <Image
          src="/avatar.jpg"
          alt="avatar"
          width={48}
          height={48}
          className="rounded-full bg-gray-200"
        />
      </div>
      <div className="flex-1">
        <Link href="/profile/1" className="inline-block space-x-2">
          <span className="font-bold text-gray-800">Jhon Doe</span>
          <span>@jhondoe</span>
          <span>•</span>
          <span>4h</span>
        </Link>
        <p className="mt-2 text-lg text-gray-800">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus
          fugiat dolores voluptate ea illo eius sequi voluptatum minus. Quam,
          repudiandae magni cumque numquam architecto esse autem temporibus illo
          similique aliquid.
        </p>
      </div>
    </div>
  )
}
