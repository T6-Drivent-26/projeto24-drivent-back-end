/*
  Warnings:

  - Added the required column `accomodationId` to the `Ticket` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Ticket" ADD COLUMN     "accomodationId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Accomodation" (
    "id" SERIAL NOT NULL,
    "accomodation" VARCHAR(255) NOT NULL,
    "price" INTEGER NOT NULL,

    CONSTRAINT "Accomodation_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_accomodationId_fkey" FOREIGN KEY ("accomodationId") REFERENCES "Accomodation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
