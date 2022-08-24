// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient, Product } from "@prisma/client";
const prisma = new PrismaClient();

type Products = Product[];

export const getProduct = async (query: { id: string }) => {
  const { id } = query;
  const product = await prisma.product.findUnique({
    where: {
      id: parseInt(id),
    },
  });
  return product;
};

export default getProduct;

/* app.get('/feed', async (req, res) => {
  const posts = await prisma.post.findMany({ where: { published: true } })
  res.json(posts)
}) */
