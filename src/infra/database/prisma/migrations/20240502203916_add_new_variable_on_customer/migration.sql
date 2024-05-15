-- CreateTable
CREATE TABLE `planos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `repeats` INTEGER NOT NULL,
    `interval` INTEGER NOT NULL,
    `external_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `clientes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `birth` INTEGER NOT NULL,
    `phone_number` INTEGER NOT NULL,
    `subscription_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `endereços de cobrança` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `street` VARCHAR(191) NOT NULL,
    `number` INTEGER NOT NULL,
    `neighborhood` VARCHAR(191) NOT NULL,
    `zipcode` INTEGER NOT NULL,
    `city` VARCHAR(191) NOT NULL,
    `state` VARCHAR(191) NOT NULL,
    `customerId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `endereços de cobrança` ADD CONSTRAINT `endereços de cobrança_customerId_fkey` FOREIGN KEY (`customerId`) REFERENCES `clientes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
