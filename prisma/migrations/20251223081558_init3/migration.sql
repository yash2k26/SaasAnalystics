/*
  Warnings:

  - The values [purchase] on the enum `Events` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Events_new" AS ENUM ('page_view', 'user_signup', 'button_click', 'revenue');
ALTER TABLE "AnalyticsEvent" ALTER COLUMN "eventName" TYPE "Events_new" USING ("eventName"::text::"Events_new");
ALTER TYPE "Events" RENAME TO "Events_old";
ALTER TYPE "Events_new" RENAME TO "Events";
DROP TYPE "public"."Events_old";
COMMIT;
