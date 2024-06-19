/*
  Warnings:

  - The primary key for the `Item` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Item` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Item` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Todo` table. All the data in the column will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Item" DROP CONSTRAINT "Item_userId_fkey";

-- DropForeignKey
ALTER TABLE "Todo" DROP CONSTRAINT "Todo_userId_fkey";

-- AlterTable
ALTER TABLE "Item" DROP CONSTRAINT "Item_pkey",
DROP COLUMN "id",
DROP COLUMN "userId",
ADD COLUMN     "itemId" SERIAL NOT NULL,
ADD CONSTRAINT "Item_pkey" PRIMARY KEY ("itemId");

-- AlterTable
ALTER TABLE "Todo" DROP COLUMN "userId";

-- DropTable
DROP TABLE "User";

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Todo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
