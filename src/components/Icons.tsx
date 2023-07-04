import {
  HomeIcon,
  LogOutIcon,
  LucideProps,
  Settings2Icon,
  UserCircle2Icon,
} from 'lucide-react'

export const Icons = {
  Home: HomeIcon,
  Profile: UserCircle2Icon,
  LogOut: LogOutIcon,
  Settings: Settings2Icon,
  microsoft: ({ size, ...props }: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      height={size}
      width={size}
      {...props}
    >
      <path fill="#ff5722" d="M22 22H6V6h16z"></path>
      <path fill="#4caf50" d="M42 22H26V6h16z"></path>
      <path fill="#ffc107" d="M42 42H26V26h16z"></path>
      <path fill="#03a9f4" d="M22 42H6V26h16z"></path>
    </svg>
  ),
  google: ({ size, ...props }: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      height={size}
      width={size}
      {...props}
    >
      <path
        fill="#FFC107"
        d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
      ></path>
      <path
        fill="#FF3D00"
        d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"
      ></path>
      <path
        fill="#4CAF50"
        d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0124 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
      ></path>
      <path
        fill="#1976D2"
        d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 01-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
      ></path>
    </svg>
  ),
}
