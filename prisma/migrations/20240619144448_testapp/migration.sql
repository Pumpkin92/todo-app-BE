-- DropForeignKey
ALTER TABLE "Item" DROP CONSTRAINT "Item_itemId_fkey";

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Todo"("id") ON DELETE CASCADE ON UPDATE CASCADE;
