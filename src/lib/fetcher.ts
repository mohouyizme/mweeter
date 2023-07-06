export const fetcher = async (...args: Parameters<typeof fetch>) => {
  const res = await fetch(...args)
  return res.json()
}
