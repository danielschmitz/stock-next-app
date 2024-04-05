import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function page() {
  return (
    <div>
      <h2>New Category</h2>
      <div className="flex flex-row w-full m-5">
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="shadow appearance-none border 
                rounded w-full py-2 px-3 text-gray-700 leading-tight 
                focus:outline-none focus:shadow-outline min-w-[300px]"
              id="name"
              name="name"
              type="text"
              placeholder="Category name"
            />
          </div>
          <div className="flex items-center justify-between">
            <button type="submit">Save</button>
          </div>
        </form>
      </div>
      <Button asChild variant="outline">
        <Link href="/categories">Back</Link>
      </Button>
    </div>
  )
}
