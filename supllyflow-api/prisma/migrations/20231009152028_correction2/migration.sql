/*
  Warnings:

  - You are about to drop the column `amount` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `bar_code` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `category` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `category` on the `suppliers` table. All the data in the column will be lost.
  - You are about to drop the column `contact` on the `suppliers` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `suppliers` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "products_bar_code_key";

-- AlterTable
ALTER TABLE "products" DROP COLUMN "amount",
DROP COLUMN "bar_code",
DROP COLUMN "category",
DROP COLUMN "description";

-- AlterTable
ALTER TABLE "suppliers" DROP COLUMN "category",
DROP COLUMN "contact",
DROP COLUMN "description";
