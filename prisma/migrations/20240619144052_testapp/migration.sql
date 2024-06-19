/*
  Warnings:

  - The primary key for the `Item` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "Item" DROP CONSTRAINT "Item_todoId_fkey";

-- AlterTable
CREATE SEQUENCE item_todoid_seq;
ALTER TABLE "Item" DROP CONSTRAINT "Item_pkey",
ALTER COLUMN "itemId" DROP DEFAULT,
ALTER COLUMN "todoId" SET DEFAULT nextval('item_todoid_seq'),
ADD CONSTRAINT "Item_pkey" PRIMARY KEY ("todoId");
DROP SEQUENCE "item_itemid_seq";
ALTER SEQUENCE item_todoid_seq OWNED BY "Item"."todoId";

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Todo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
