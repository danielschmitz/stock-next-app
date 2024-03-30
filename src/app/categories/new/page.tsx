import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function page() {
  return (
    <div>
      <h2 className="text-cyan-950 text-md font-semibold">New Category</h2>
      <div className="flex flex-row w-full m-5">form</div>
      <Button asChild variant="outline">
        <Link href="/categories">Back</Link>
      </Button>
    </div>
  )
}
