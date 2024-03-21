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
import DeleteDialog from '../../components/delete-dialog'
import { redirect } from 'next/navigation'

export default async function page() {
  const prisma = new PrismaClient()
  const categories = await prisma.category.findMany()

  async function deleteCategory(id: string) {
    'use server'

    const prisma = new PrismaClient()

    const category = await prisma.category.findUnique({ where: { id } })

    if (!category) {
      throw new Error('Category not found')
    }

    const hasProducts = await prisma.product.findFirst({
      where: {
        categoryId: id
      }
    })
    if (hasProducts) {
      throw new Error('Category has products, can not be deleted')
    }

    await prisma.category.delete({ where: { id } })

    redirect('/categories')
  }

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
                  <DeleteDialog
                    message={`Delete ${category.name}?`}
                    id={category.id}
                    actionYes={deleteCategory}
                  ></DeleteDialog>
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
