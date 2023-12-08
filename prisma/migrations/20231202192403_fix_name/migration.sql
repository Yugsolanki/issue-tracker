/*
  Warnings:

  - You are about to drop the column `assigneeIdTo` on the `issue` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `issue` DROP FOREIGN KEY `Issue_assigneeIdTo_fkey`;

-- AlterTable
ALTER TABLE `issue` DROP COLUMN `assigneeIdTo`,
    ADD COLUMN `assigneeToUserId` VARCHAR(255) NULL;

-- AddForeignKey
ALTER TABLE `Issue` ADD CONSTRAINT `Issue_assigneeToUserId_fkey` FOREIGN KEY (`assigneeToUserId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
