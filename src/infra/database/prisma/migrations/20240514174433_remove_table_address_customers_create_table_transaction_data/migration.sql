/*
  Warnings:

  - You are about to drop the `clientes` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `endereços de cobrança` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `endereços de cobrança` DROP FOREIGN KEY `endereços de cobrança_customerId_fkey`;

-- DropTable
DROP TABLE `clientes`;

-- DropTable
DROP TABLE `endereços de cobrança`;

-- CreateTable
CREATE TABLE `TransactionData` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `subscriptionId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
