/*
  Warnings:

  - You are about to drop the column `parcel` on the `subscription` table. All the data in the column will be lost.
  - You are about to drop the column `total` on the `subscription` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `subscription` DROP COLUMN `parcel`,
    DROP COLUMN `total`;
