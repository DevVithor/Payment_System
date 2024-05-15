-- AlterTable
ALTER TABLE `planos` ADD COLUMN `subscriptionId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `planos` ADD CONSTRAINT `planos_subscriptionId_fkey` FOREIGN KEY (`subscriptionId`) REFERENCES `Inscrição`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
