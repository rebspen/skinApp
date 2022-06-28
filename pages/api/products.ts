// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient, Product } from '@prisma/client'
const prisma = new PrismaClient()

type Products = Product[]

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Products>
) {
  const products = await prisma.product.findMany()
  res.json(products);
  return products;
}

/* app.get('/feed', async (req, res) => {
  const posts = await prisma.post.findMany({ where: { published: true } })
  res.json(posts)
}) */
