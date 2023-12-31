import { useRef } from 'react'

import { useAuth } from '@clerk/nextjs'
import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useSWRConfig } from 'swr'
import { z } from 'zod'

import { Button } from '@/components/ui/Button'
import useAutosizeTextArea from '@/hooks/useAutosizeTextArea'
import { cn } from '@/lib/utils'

import { Icons } from './Icons'

const mweetSchema = z.object({
  mweet: z.string().min(1).max(280),
})

type MweetSchema = z.infer<typeof mweetSchema>

export default function SendMweet() {
  const maxLength = 280

  const textAreaRef = useRef<HTMLTextAreaElement | null>(null)
  const { userId } = useAuth()
  const { mutate } = useSWRConfig()
  const {
    register,
    handleSubmit,
    watch,
    resetField,
    formState: { isValid, isSubmitting },
  } = useForm<MweetSchema>({
    resolver: zodResolver(mweetSchema),
  })
  const { ref, ...rest } = register('mweet')
  const mweet = watch('mweet')
  const mweetLength = mweet?.length ?? 0

  useAutosizeTextArea(textAreaRef.current, mweet)

  const onSubmit: SubmitHandler<MweetSchema> = async (data) => {
    await fetch('/api/mweets', {
      method: 'POST',
      body: JSON.stringify({
        ...data,
        userId,
      }),
    })
    resetField('mweet')
    mutate('/api/mweets')
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="group relative overflow-hidden rounded-3xl border bg-white shadow-sm">
        <textarea
          placeholder="What's on your mind"
          className="block w-full p-6 pb-24 text-xl outline-none placeholder:text-gray-500"
          rows={1}
          {...rest}
          ref={(e) => {
            ref(e)
            textAreaRef.current = e
          }}
        />
        <Button
          size="xlarge"
          rounded
          disabled={!isValid}
          className="absolute bottom-6 left-6"
        >
          {isSubmitting ? (
            <Icons.Loader size={18} className="mr-2 animate-spin" />
          ) : null}
          {isSubmitting ? 'Submitting' : 'Send mweet'}
        </Button>
        <span
          className={cn(
            'absolute bottom-6 right-6 text-sm font-bold',
            maxLength - mweetLength <= 0 ? 'text-red-400' : 'text-gray-500'
          )}
        >
          {maxLength - mweetLength}
        </span>
      </div>
    </form>
  )
}
