import { authMiddleware } from '@clerk/nextjs'

export default authMiddleware({
  publicRoutes: ['/api/hooks/user'],
})

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
}
