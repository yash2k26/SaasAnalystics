/*
  Warnings:

  - You are about to drop the column `eventname` on the `AnalyticsEvent` table. All the data in the column will be lost.
  - Added the required column `eventName` to the `AnalyticsEvent` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Events" AS ENUM ('page_view', 'user_signup', 'button_click', 'purchase');

-- AlterTable
ALTER TABLE "AnalyticsEvent" DROP COLUMN "eventname",
ADD COLUMN     "eventName" "Events" NOT NULL,
ALTER COLUMN "value" DROP NOT NULL;
