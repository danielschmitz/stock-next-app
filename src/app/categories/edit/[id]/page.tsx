import { PrismaClient } from '@prisma/client'
import UpdateForm from './form'
import { redirect } from 'next/navigation'

interface PageParams {
  params: {
    id: string
  }
}

export default async function page({ params }: PageParams) {
  const id = params.id
  const prisma = new PrismaClient()
  const category = await prisma.category.findUniqueOrThrow({ where: { id } })

  async function saveCategory(formData: FormData) {
    'use server'
    console.log('Save Category with formData', formData)

    if (!formData.get('id')) {
      throw new Error('Id is required')
    }

    if (!formData.get('name')) {
      throw new Error('Name is required')
    }

    const id = formData.get('id') as string
    const name = formData.get('name') as string

    const prisma = new PrismaClient()
    await prisma.category.update({
      where: { id },
      data: { name }
    })

    redirect('/categories')
  }

  return <UpdateForm data={category} onSubmit={saveCategory} />
}
