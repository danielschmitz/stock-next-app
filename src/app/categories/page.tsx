import { Button } from '@/components/ui/button'
import {
  Table,
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell
} from '@/components/ui/table'
import { PrismaClient } from '@prisma/client'
import Link from 'next/link'

export default async function page() {
  const prisma = new PrismaClient()
  const categories = await prisma.category.findMany()

  return (
    <div>
      <Table>
        <TableCaption>A list of your categories.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead className="w-[100px] text-center">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {categories.map((category) => (
            <TableRow key={category.id}>
              <TableCell>{category.name}</TableCell>
              <TableCell className="text-right">
                <div className="flex flex-row gap-2">
                  <Button asChild variant="link">
                    <Link href={`/categories/edit/${category.id}`}>Edit</Link>
                  </Button>
                  <Button asChild variant="link">
                    <Link href={`/categories/del/${category.id}`}>Delete</Link>
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Button asChild>
        <Link href="/categories/new">New Category</Link>
      </Button>
    </div>
  )
}
