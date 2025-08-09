/*
  Warnings:

  - You are about to drop the `Job` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "public"."Job";

-- CreateTable
CREATE TABLE "public"."Jobs" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "title" TEXT NOT NULL,
    "companyName" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "type" "public"."JobType" NOT NULL DEFAULT 'FULL_TIME',
    "salaryRange" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "requirements" TEXT NOT NULL,
    "responsibilities" TEXT NOT NULL,
    "deadline" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Jobs_pkey" PRIMARY KEY ("id")
);
