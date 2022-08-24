// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient, Product } from "@prisma/client";
const prisma = new PrismaClient();

type Products = Product[];

const getProducts = async (
  req: NextApiRequest,
  res: NextApiResponse<Products>
) => {
  const products = await prisma.product.findMany();
  return products;
};

export default getProducts;
