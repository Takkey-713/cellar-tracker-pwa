import { prisma } from 'globals/prismadb'

export const getFormItem = async () => {
  const categories = await prisma.category.findMany({
    select: {
      id: true,
      name: true,
    },
  })

  const varieties = await prisma.variety.findMany({
    select: {
      id: true,
      name: true,
    },
  })

  return { categories, varieties }
}
