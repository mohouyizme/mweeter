export type Mweet = {
  id: string
  createdAt: string
  updatedAt: string
  text: string
  user: {
    id: string
    username: string
    firstName: string
    lastName: string
    imageUrl: string
  }
}
