/*
  Warnings:

  - You are about to drop the column `code` on the `planos` table. All the data in the column will be lost.
  - Added the required column `name` to the `planos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `planos` DROP COLUMN `code`,
    ADD COLUMN `name` VARCHAR(191) NOT NULL;
