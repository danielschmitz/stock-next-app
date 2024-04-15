import { PrismaClient } from '@prisma/client'
import UpdateForm from './form'

interface PageParams {
  params: {
    id: string
  }
}

export default async function page({ params }: PageParams) {
  const id = params.id
  const prisma = new PrismaClient()
  const category = await prisma.category.findUniqueOrThrow({ where: { id } })

  return <UpdateForm data={category} />
}
