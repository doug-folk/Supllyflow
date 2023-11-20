/*
  Warnings:

  - You are about to drop the column `bar_code` on the `products` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "products_bar_code_key";

-- AlterTable
ALTER TABLE "products" DROP COLUMN "bar_code";
