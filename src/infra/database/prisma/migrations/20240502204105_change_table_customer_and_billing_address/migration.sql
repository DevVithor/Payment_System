-- AlterTable
ALTER TABLE `clientes` MODIFY `birth` VARCHAR(191) NOT NULL,
    MODIFY `phone_number` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `endereços de cobrança` MODIFY `number` VARCHAR(191) NOT NULL,
    MODIFY `zipcode` VARCHAR(191) NOT NULL;
