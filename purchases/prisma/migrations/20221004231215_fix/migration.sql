/*
  Warnings:

  - You are about to drop the `Custumer` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Custumer";

-- CreateTable
CREATE TABLE "Customer" (
    "id" TEXT NOT NULL,

    CONSTRAINT "Customer_pkey" PRIMARY KEY ("id")
);
