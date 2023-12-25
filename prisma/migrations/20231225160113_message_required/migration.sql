/*
  Warnings:

  - Made the column `message` on table `ContactMessage` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ContactMessage" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "status" TEXT NOT NULL DEFAULT 'accepted',
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "createdAtString" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_ContactMessage" ("createdAt", "createdAtString", "email", "id", "message", "name", "status", "updatedAt") SELECT "createdAt", "createdAtString", "email", "id", "message", "name", "status", "updatedAt" FROM "ContactMessage";
DROP TABLE "ContactMessage";
ALTER TABLE "new_ContactMessage" RENAME TO "ContactMessage";
CREATE UNIQUE INDEX "ContactMessage_id_key" ON "ContactMessage"("id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
