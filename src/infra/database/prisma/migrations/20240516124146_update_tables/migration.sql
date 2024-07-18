/*
  Warnings:

  - You are about to drop the column `subscription_id` on the `pagamento` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[subscription_id]` on the table `Inscrição` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `subscription_id` to the `Inscrição` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `pagamento` DROP FOREIGN KEY `pagamento_subscription_id_fkey`;

-- AlterTable
ALTER TABLE `Inscrição` ADD COLUMN `subscription_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `pagamento` DROP COLUMN `subscription_id`,
    ADD COLUMN `subscriptionId` INTEGER NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Inscrição_subscription_id_key` ON `Inscrição`(`subscription_id`);

-- AddForeignKey
ALTER TABLE `pagamento` ADD CONSTRAINT `pagamento_subscriptionId_fkey` FOREIGN KEY (`subscriptionId`) REFERENCES `Inscrição`(`subscription_id`) ON DELETE SET NULL ON UPDATE CASCADE;
