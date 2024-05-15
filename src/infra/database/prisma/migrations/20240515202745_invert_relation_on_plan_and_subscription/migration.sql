/*
  Warnings:

  - You are about to drop the column `subscriptionId` on the `planos` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `planos` DROP FOREIGN KEY `planos_subscriptionId_fkey`;

-- AlterTable
ALTER TABLE `inscrição` ADD COLUMN `planId` INTEGER NULL;

-- AlterTable
ALTER TABLE `planos` DROP COLUMN `subscriptionId`;

-- AddForeignKey
ALTER TABLE `Inscrição` ADD CONSTRAINT `Inscrição_planId_fkey` FOREIGN KEY (`planId`) REFERENCES `planos`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
