-- CreateTable
CREATE TABLE `Subscription` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `subscriptionId` INTEGER NOT NULL,
    `chargeId` INTEGER NOT NULL,
    `total` INTEGER NOT NULL,
    `parcel` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
