/*
  Warnings:

  - Added the required column `cpf` to the `clientes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `clientes` ADD COLUMN `cpf` VARCHAR(191) NOT NULL;
