/*
  Warnings:

  - You are about to drop the `transactiondata` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `transactiondata`;

-- CreateTable
CREATE TABLE `pagamento` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `subscriptionId` INTEGER NOT NULL,
    `subscriptionStatus` VARCHAR(191) NOT NULL,
    `planId` INTEGER NOT NULL,
    `interval` INTEGER NOT NULL,
    `repeats` INTEGER NOT NULL,
    `chargeId` INTEGER NOT NULL,
    `chargeStatus` VARCHAR(191) NOT NULL,
    `parcel` INTEGER NOT NULL,
    `total` INTEGER NOT NULL,
    `firstExecution` DATETIME(3) NOT NULL,
    `subscriptionTotal` INTEGER NOT NULL,
    `payment` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
