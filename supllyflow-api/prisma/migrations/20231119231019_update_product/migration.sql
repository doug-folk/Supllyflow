/*
  Warnings:

  - Added the required column `dueDate` to the `products` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "products" ADD COLUMN     "dueDate" TIMESTAMP(3) NOT NULL;
