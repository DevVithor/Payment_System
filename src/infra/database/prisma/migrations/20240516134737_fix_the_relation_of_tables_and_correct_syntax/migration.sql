/*
  Warnings:

  - You are about to drop the column `repeats` on the `planos` table. All the data in the column will be lost.
  - You are about to drop the `inscrição` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `pagamento` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `repeat` to the `planos` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `inscrição` DROP FOREIGN KEY `Inscrição_planId_fkey`;

-- DropForeignKey
ALTER TABLE `pagamento` DROP FOREIGN KEY `pagamento_subscriptionId_fkey`;

-- AlterTable
ALTER TABLE `planos` DROP COLUMN `repeats`,
    ADD COLUMN `repeat` INTEGER NOT NULL;

-- DropTable
DROP TABLE `inscrição`;

-- DropTable
DROP TABLE `pagamento`;

-- CreateTable
CREATE TABLE `Inscricoes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `charge_id` INTEGER NOT NULL,
    `status` VARCHAR(191) NOT NULL,
    `total` INTEGER NOT NULL,
    `parcel` INTEGER NOT NULL,
    `plan_id` INTEGER NULL,
    `external_id` INTEGER NOT NULL,

    UNIQUE INDEX `Inscricoes_external_id_key`(`external_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `pagamentos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `subscriptionStatus` VARCHAR(191) NOT NULL,
    `planId` INTEGER NOT NULL,
    `interval` INTEGER NOT NULL,
    `repeat` INTEGER NOT NULL,
    `chargeId` INTEGER NOT NULL,
    `chargeStatus` VARCHAR(191) NOT NULL,
    `parcel` INTEGER NOT NULL,
    `total` INTEGER NOT NULL,
    `firstExecution` VARCHAR(191) NOT NULL,
    `subscriptionTotal` INTEGER NOT NULL,
    `payment` VARCHAR(191) NOT NULL,
    `subscription_id` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Inscricoes` ADD CONSTRAINT `Inscricoes_plan_id_fkey` FOREIGN KEY (`plan_id`) REFERENCES `planos`(`external_id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `pagamentos` ADD CONSTRAINT `pagamentos_subscription_id_fkey` FOREIGN KEY (`subscription_id`) REFERENCES `Inscricoes`(`external_id`) ON DELETE SET NULL ON UPDATE CASCADE;
