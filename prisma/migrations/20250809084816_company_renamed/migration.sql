/*
  Warnings:

  - You are about to drop the `Company` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."Jobs" DROP CONSTRAINT "Jobs_companyId_fkey";

-- DropTable
DROP TABLE "public"."Company";

-- CreateTable
CREATE TABLE "public"."Companies" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "logo" TEXT,

    CONSTRAINT "Companies_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Companies_name_key" ON "public"."Companies"("name");

-- AddForeignKey
ALTER TABLE "public"."Jobs" ADD CONSTRAINT "Jobs_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "public"."Companies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
