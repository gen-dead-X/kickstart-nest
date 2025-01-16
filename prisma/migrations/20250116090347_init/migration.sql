/*
  Warnings:

  - The primary key for the `Cat` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "Cat" DROP CONSTRAINT "Cat_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Cat_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Cat_id_seq";
