/*
  Warnings:

  - You are about to drop the column `address` on the `Reservation` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Reservation" DROP COLUMN "address",
ADD COLUMN     "location" TEXT;
