import { Mweet } from './mweet'

export type User = {
  id: string
  username: string
  firstName: string
  lastName: string
  imageUrl: string
  _count: {
    followers: number
    following: number
  }
  mweets: Mweet[]
}
