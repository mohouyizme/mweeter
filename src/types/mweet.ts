import { User } from './user'

export type Mweet = {
  id: string
  createdAt: string
  updatedAt: string
  text: string
  user: User
}
