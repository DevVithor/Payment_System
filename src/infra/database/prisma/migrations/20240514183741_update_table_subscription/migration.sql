/*
  Warnings:

  - You are about to drop the `subscription` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `subscription`;

-- CreateTable
CREATE TABLE `inscrição` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `subscriptionId` INTEGER NOT NULL,
    `chargeId` INTEGER NOT NULL,
    `status` VARCHAR(191) NOT NULL,
    `total` INTEGER NOT NULL,
    `parcel` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
