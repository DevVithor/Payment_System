/*
  Warnings:

  - You are about to drop the column `cpf` on the `user` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[email]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `user` DROP COLUMN `cpf`,
    ADD COLUMN `email` VARCHAR(191) NOT NULL,
    MODIFY `adress` VARCHAR(200) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `User_email_key` ON `user`(`email`);
