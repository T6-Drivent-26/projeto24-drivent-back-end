/*
  Warnings:

  - A unique constraint covering the columns `[accommodation]` on the table `Accommodation` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[category]` on the table `Category` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Accommodation_accommodation_key" ON "Accommodation"("accommodation");

-- CreateIndex
CREATE UNIQUE INDEX "Category_category_key" ON "Category"("category");
