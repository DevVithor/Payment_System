/*
  Warnings:

  - The primary key for the `inscrição` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `subscriptionId` on the `inscrição` table. All the data in the column will be lost.
  - You are about to drop the column `subscriptionId` on the `pagamento` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[subscription_id]` on the table `pagamento` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE `planos` DROP FOREIGN KEY `planos_subscriptionId_fkey`;

-- AlterTable
ALTER TABLE `Inscrição` DROP PRIMARY KEY,
    DROP COLUMN `subscriptionId`,
    MODIFY `id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `pagamento` DROP COLUMN `subscriptionId`,
    ADD COLUMN `subscription_id` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `planos` MODIFY `subscriptionId` VARCHAR(191) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `pagamento_subscription_id_key` ON `pagamento`(`subscription_id`);

-- AddForeignKey
ALTER TABLE `planos` ADD CONSTRAINT `planos_subscriptionId_fkey` FOREIGN KEY (`subscriptionId`) REFERENCES `Inscrição`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `pagamento` ADD CONSTRAINT `pagamento_subscription_id_fkey` FOREIGN KEY (`subscription_id`) REFERENCES `Inscrição`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
