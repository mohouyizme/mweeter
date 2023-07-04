import { forwardRef } from 'react'

import { Slot } from '@radix-ui/react-slot'
import { type VariantProps, cva } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-lg text-sm disabled:opacity-50 disabled:cursor-not-allowed transition',
  {
    variants: {
      variant: {
        primary: 'bg-blue-400 text-white shadow-sm hover:bg-blue-500',
        secondary:
          'bg-white text-sm text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50',
      },
      size: {
        small: 'px-3 py-1',
        normal: 'px-3.5 py-1.5',
        large: 'px-4 py-2',
        xlarge: 'px-4 py-2.5',
      },
      fullWidth: {
        true: 'w-full',
      },
      rounded: {
        true: 'rounded-full',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'normal',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, fullWidth, rounded, asChild = false, ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size, fullWidth, rounded, className })
        )}
        ref={ref}
        {...props}
      />
    )
  }
)

Button.displayName = 'Button'

export { Button, buttonVariants }
