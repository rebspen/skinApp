import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.product.create({
    data: {
      name: "Nivea",
      ingreedients: ["ex1", "ex2", "ex3"],
    },
  });
}

main().catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })