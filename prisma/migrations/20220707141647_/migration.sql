/*
  Warnings:

  - You are about to drop the column `ingreedients` on the `Product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "ingreedients",
ADD COLUMN     "ingredients" TEXT[];
