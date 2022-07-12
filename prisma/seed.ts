import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.product.createMany({
    data: [
      {
        name: "fexofenadine hydrochloride",
        ingredients: [
          "fexofenadine hydrochloride",
          "Coagulation Factor IX (Recombinant), Fc Fusion Protein",
        ],
      },
      {
        name: "ALPROLIX",
        ingredients: ["Coagulation Factor IX (Recombinant), Fc Fusion Protein"],
      },
      {
        name: "METFORMIN HYDROCHLORIDE",
        ingredients: ["METFORMIN HYDROCHLORIDE"],
      },
      { name: "Baclofen", ingredients: ["Baclofen"] },
      { name: "Nadolol", ingredients: ["Nadolol"] },
    ],
  });
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
