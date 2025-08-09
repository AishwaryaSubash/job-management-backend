/*
  Warnings:

  - You are about to drop the column `companyName` on the `Jobs` table. All the data in the column will be lost.
  - Added the required column `companyId` to the `Jobs` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Jobs" DROP COLUMN "companyName",
ADD COLUMN     "companyId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "public"."Company" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "logo" TEXT,

    CONSTRAINT "Company_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Company_name_key" ON "public"."Company"("name");

-- AddForeignKey
ALTER TABLE "public"."Jobs" ADD CONSTRAINT "Jobs_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "public"."Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
