/*
  Warnings:

  - The primary key for the `Item` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "Item" DROP CONSTRAINT "Item_itemId_fkey";

-- AlterTable
CREATE SEQUENCE item_itemid_seq;
ALTER TABLE "Item" DROP CONSTRAINT "Item_pkey",
ALTER COLUMN "itemId" SET DEFAULT nextval('item_itemid_seq'),
ALTER COLUMN "todoId" DROP DEFAULT,
ADD CONSTRAINT "Item_pkey" PRIMARY KEY ("itemId");
ALTER SEQUENCE item_itemid_seq OWNED BY "Item"."itemId";
DROP SEQUENCE "Item_todoId_seq";

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_todoId_fkey" FOREIGN KEY ("todoId") REFERENCES "Todo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
