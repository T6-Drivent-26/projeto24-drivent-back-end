/*
  Warnings:

  - You are about to drop the column `accomodationId` on the `Ticket` table. All the data in the column will be lost.
  - You are about to drop the `Accomodation` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `accommodationId` to the `Ticket` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Ticket" DROP CONSTRAINT "Ticket_accomodationId_fkey";

-- AlterTable
ALTER TABLE "Ticket" DROP COLUMN "accomodationId",
ADD COLUMN     "accommodationId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Accomodation";

-- CreateTable
CREATE TABLE "Accommodation" (
    "id" SERIAL NOT NULL,
    "accommodation" VARCHAR(255) NOT NULL,
    "price" INTEGER NOT NULL,

    CONSTRAINT "Accommodation_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_accommodationId_fkey" FOREIGN KEY ("accommodationId") REFERENCES "Accommodation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
