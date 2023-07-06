import { useState } from 'react'

import useSWR, { mutate } from 'swr'

import { fetcher } from '@/lib/fetcher'
import { Follow } from '@/types/follow'

import { Icons } from './Icons'
import { Button } from './ui/Button'

interface FollowButtonProps {
  username: string
}

export default function FollowButton({ username }: FollowButtonProps) {
  const { data, isLoading } = useSWR<{ status: Follow }>(
    `/api/users/${username}/follow`,
    fetcher
  )
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function followUser() {
    setIsSubmitting(true)
    await fetch(`/api/users/${username}/follow`, {
      method: 'POST',
    })
    await mutate(`/api/users/${username}/follow`)
    setIsSubmitting(false)
    mutate(`/api/users/${username}?with_mweets=true`)
  }

  async function unfollowUser() {
    setIsSubmitting(true)
    await fetch(`/api/users/${username}/follow`, {
      method: 'DELETE',
    })
    await mutate(`/api/users/${username}/follow`)
    setIsSubmitting(false)
    mutate(`/api/users/${username}?with_mweets=true`)
  }

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
      <Button
        onClick={() => unfollowUser()}
        variant="secondary"
        rounded
        className="absolute right-6 top-10"
      >
        {isSubmitting ? (
          <Icons.Loader size={14} className="mr-1 animate-spin" />
        ) : null}
        {isSubmitting ? 'Unfollowing' : 'Unfollow'}
      </Button>
    )

  if (data?.status.isMyself)
    return (
      <Button variant="secondary" rounded className="absolute right-6 top-10">
        Edit Profile
      </Button>
    )

  return (
    <Button
      onClick={() => followUser()}
      variant="primary"
      rounded
      className="absolute right-6 top-10"
    >
      {isSubmitting ? (
        <Icons.Loader size={14} className="mr-1 animate-spin" />
      ) : null}
      {isSubmitting ? 'Following' : 'Follow'}
    </Button>
  )
}
