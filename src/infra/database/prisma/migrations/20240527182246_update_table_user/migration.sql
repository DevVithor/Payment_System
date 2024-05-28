/*
  Warnings:

  - You are about to alter the column `phone` on the `user` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(11)`.

*/
-- AlterTable
ALTER TABLE `user` MODIFY `phone` VARCHAR(11) NOT NULL,
    MODIFY `cpf` VARCHAR(11) NOT NULL;
