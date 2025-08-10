/*
  Warnings:

  - You are about to drop the column `salaryRange` on the `Jobs` table. All the data in the column will be lost.
  - Made the column `maxSalary` on table `Jobs` required. This step will fail if there are existing NULL values in that column.
  - Made the column `minSalary` on table `Jobs` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "public"."Jobs" DROP COLUMN "salaryRange",
ALTER COLUMN "maxSalary" SET NOT NULL,
ALTER COLUMN "minSalary" SET NOT NULL;
