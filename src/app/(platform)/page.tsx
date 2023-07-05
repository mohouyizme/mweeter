import MweetCard from '@/components/MweetCard'

export default function HomePage() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-xl font-bold">Latest mweets</h2>
        <div className="rounded-3xl border bg-white shadow-sm">
          <MweetCard />
          <MweetCard />
          <MweetCard />
        </div>
      </div>
    </div>
  )
}
