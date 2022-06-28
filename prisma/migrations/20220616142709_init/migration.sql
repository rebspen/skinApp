-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "ingreedients" TEXT[],

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);
