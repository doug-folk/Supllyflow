/*
  Warnings:

  - You are about to drop the column `category` on the `suppliers` table. All the data in the column will be lost.
  - You are about to drop the column `contact` on the `suppliers` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `suppliers` table. All the data in the column will be lost.
  - Added the required column `cnpj` to the `suppliers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `suppliers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `reasonSocial` to the `suppliers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `telephone` to the `suppliers` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "suppliers" DROP COLUMN "category",
DROP COLUMN "contact",
DROP COLUMN "description",
ADD COLUMN     "cnpj" TEXT NOT NULL,
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "reasonSocial" TEXT NOT NULL,
ADD COLUMN     "telephone" TEXT NOT NULL;
