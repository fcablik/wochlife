-- CreateTable
CREATE TABLE "ContactMessage" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "status" TEXT NOT NULL DEFAULT 'accepted',
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "message" TEXT,
    "reservationNumber" TEXT NOT NULL,
    "createdAtString" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "ContactMessage_id_key" ON "ContactMessage"("id");

-- CreateIndex
CREATE UNIQUE INDEX "ContactMessage_reservationNumber_key" ON "ContactMessage"("reservationNumber");
