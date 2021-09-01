-- CreateTable
CREATE TABLE "Task" (
    "id" TEXT NOT NULL,
    "complete" BOOLEAN NOT NULL DEFAULT false,
    "name" TEXT NOT NULL,

    PRIMARY KEY ("id")
);
