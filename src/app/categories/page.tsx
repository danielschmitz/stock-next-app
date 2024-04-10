import { Button } from '@/components/ui/button'
import { PrismaClient } from '@prisma/client'
import Link from 'next/link'

export default async function page() {
  const prisma = new PrismaClient()
  const categories = await prisma.category.findMany()

  return (
    <div>
      {categories.map((category) => (
        <div key={category.id}>{category.name}</div>
      ))}
      <Button asChild>
        <Link href="/categories/new">New</Link>
      </Button>
    </div>
  )
}
