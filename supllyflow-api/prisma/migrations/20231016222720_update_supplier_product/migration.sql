/*
  Warnings:

  - A unique constraint covering the columns `[bar_code]` on the table `products` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `amount` to the `products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `bar_code` to the `products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `category` to the `products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `category` to the `suppliers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `contact` to the `suppliers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `suppliers` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "products" ADD COLUMN     "amount" INTEGER NOT NULL,
ADD COLUMN     "bar_code" TEXT NOT NULL,
ADD COLUMN     "category" TEXT NOT NULL,
ADD COLUMN     "description" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "suppliers" ADD COLUMN     "category" TEXT NOT NULL,
ADD COLUMN     "contact" TEXT NOT NULL,
ADD COLUMN     "description" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "products_bar_code_key" ON "products"("bar_code");
