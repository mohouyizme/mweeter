import { redirect } from 'next/navigation'

import { currentUser } from '@clerk/nextjs'

export default async function ProfileRedirectPage() {
  const user = await currentUser()

  if (user) redirect(`/profile/${user.username}`)
  else redirect('/')
}
