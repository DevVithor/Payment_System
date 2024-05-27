/*
  Warnings:

  - You are about to drop the column `chargeId` on the `inscrição` table. All the data in the column will be lost.
  - You are about to drop the column `subscriptionId` on the `inscrição` table. All the data in the column will be lost.
  - You are about to drop the column `chargeId` on the `pagamento` table. All the data in the column will be lost.
  - You are about to drop the column `chargeStatus` on the `pagamento` table. All the data in the column will be lost.
  - You are about to drop the column `firstExecution` on the `pagamento` table. All the data in the column will be lost.
  - You are about to drop the column `planId` on the `pagamento` table. All the data in the column will be lost.
  - You are about to drop the column `repeats` on the `pagamento` table. All the data in the column will be lost.
  - You are about to drop the column `subscriptionId` on the `pagamento` table. All the data in the column will be lost.
  - You are about to drop the column `subscriptionStatus` on the `pagamento` table. All the data in the column will be lost.
  - You are about to drop the column `subscriptionTotal` on the `pagamento` table. All the data in the column will be lost.
  - You are about to drop the column `external_id` on the `planos` table. All the data in the column will be lost.
  - You are about to drop the column `repeats` on the `planos` table. All the data in the column will be lost.
  - Added the required column `charge_id` to the `Inscrição` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subscription_id` to the `Inscrição` table without a default value. This is not possible if the table is not empty.
  - Added the required column `charge_id` to the `pagamento` table without a default value. This is not possible if the table is not empty.
  - Added the required column `charge_status` to the `pagamento` table without a default value. This is not possible if the table is not empty.
  - Added the required column `first_execution` to the `pagamento` table without a default value. This is not possible if the table is not empty.
  - Added the required column `plan_id` to the `pagamento` table without a default value. This is not possible if the table is not empty.
  - Added the required column `repeat` to the `pagamento` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subscription_id` to the `pagamento` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subscription_status` to the `pagamento` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subscription_total` to the `pagamento` table without a default value. This is not possible if the table is not empty.
  - Added the required column `extenal_id` to the `planos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `repeat` to the `planos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `inscrição` DROP COLUMN `chargeId`,
    DROP COLUMN `subscriptionId`,
    ADD COLUMN `charge_id` INTEGER NOT NULL,
    ADD COLUMN `subscription_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `pagamento` DROP COLUMN `chargeId`,
    DROP COLUMN `chargeStatus`,
    DROP COLUMN `firstExecution`,
    DROP COLUMN `planId`,
    DROP COLUMN `repeats`,
    DROP COLUMN `subscriptionId`,
    DROP COLUMN `subscriptionStatus`,
    DROP COLUMN `subscriptionTotal`,
    ADD COLUMN `charge_id` INTEGER NOT NULL,
    ADD COLUMN `charge_status` VARCHAR(191) NOT NULL,
    ADD COLUMN `first_execution` VARCHAR(191) NOT NULL,
    ADD COLUMN `plan_id` INTEGER NOT NULL,
    ADD COLUMN `repeat` INTEGER NOT NULL,
    ADD COLUMN `subscription_id` INTEGER NOT NULL,
    ADD COLUMN `subscription_status` VARCHAR(191) NOT NULL,
    ADD COLUMN `subscription_total` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `planos` DROP COLUMN `external_id`,
    DROP COLUMN `repeats`,
    ADD COLUMN `extenal_id` INTEGER NOT NULL,
    ADD COLUMN `repeat` INTEGER NOT NULL;
