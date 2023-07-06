import useSWR from 'swr'

import { fetcher } from '@/lib/fetcher'
import { Follow } from '@/types/follow'

import { Button } from './ui/Button'

interface FollowButtonProps {
  username: string
}

export default function FollowButton({ username }: FollowButtonProps) {
  const { data, isLoading } = useSWR<{ status: Follow }>(
    `/api/users/${username}/follow`,
    fetcher
  )

  if (isLoading)
    return (
      <Button
        variant="secondary"
        disabled
        rounded
        className="absolute right-6 top-10"
      >
        Loading
      </Button>
    )

  if (data?.status.isFollowing)
    return (
      <Button variant="secondary" rounded className="absolute right-6 top-10">
        Unfollow
      </Button>
    )

  if (data?.status.isMyself)
    return (
      <Button variant="secondary" rounded className="absolute right-6 top-10">
        Edit Profile
      </Button>
    )

  return (
    <Button variant="primary" rounded className="absolute right-6 top-10">
      Follow
    </Button>
  )
}
