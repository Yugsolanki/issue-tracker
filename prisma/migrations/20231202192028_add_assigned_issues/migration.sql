-- AlterTable
ALTER TABLE `issue` ADD COLUMN `assigneeIdTo` VARCHAR(255) NULL;

-- AddForeignKey
ALTER TABLE `Issue` ADD CONSTRAINT `Issue_assigneeIdTo_fkey` FOREIGN KEY (`assigneeIdTo`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
