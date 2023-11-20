/*
  Warnings:

  - Added the required column `stockCurrent` to the `products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `stockMax` to the `products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `stockMin` to the `products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `products` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "products" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "stockCurrent" INTEGER NOT NULL,
ADD COLUMN     "stockMax" INTEGER NOT NULL,
ADD COLUMN     "stockMin" INTEGER NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;
