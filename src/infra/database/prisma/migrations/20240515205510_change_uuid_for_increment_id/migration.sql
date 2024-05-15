/*
  Warnings:

  - The primary key for the `inscrição` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `inscrição` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `subscription_id` on the `pagamento` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - A unique constraint covering the columns `[external_id]` on the table `planos` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE `inscrição` DROP FOREIGN KEY `Inscrição_planId_fkey`;

-- DropForeignKey
ALTER TABLE `pagamento` DROP FOREIGN KEY `pagamento_subscription_id_fkey`;

-- AlterTable
ALTER TABLE `inscrição` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `pagamento` MODIFY `subscription_id` INTEGER NULL;

-- CreateIndex
CREATE UNIQUE INDEX `planos_external_id_key` ON `planos`(`external_id`);

-- AddForeignKey
ALTER TABLE `Inscrição` ADD CONSTRAINT `Inscrição_planId_fkey` FOREIGN KEY (`planId`) REFERENCES `planos`(`external_id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `pagamento` ADD CONSTRAINT `pagamento_subscription_id_fkey` FOREIGN KEY (`subscription_id`) REFERENCES `Inscrição`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
